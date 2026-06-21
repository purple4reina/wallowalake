/* bio.js
 * Fetches Rey's bio from purple4reina.github.io/MusicBook/about.html
 * and injects it into #bio on the About page.
 * Same-origin on the live site (purple4reina.github.io), so no CORS issue.
 * Falls back gracefully to the static link if the fetch fails.
 */
(function () {
  'use strict';

  var container = document.getElementById('bio');
  if (!container) return;

  fetch('https://purple4reina.github.io/MusicBook/about.html')
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.text();
    })
    .then(function (html) {
      var parser = new DOMParser();
      var doc    = parser.parseFromString(html, 'text/html');
      var main   = doc.querySelector('#main-content');
      if (!main) throw new Error('no #main-content');

      // Remove the redundant "About" h1 (we have our own heading)
      var h1 = main.querySelector('h1');
      if (h1) h1.remove();

      // Remove Just-the-Docs auto-footer (everything from the first <hr> onward)
      var hr = main.querySelector('hr');
      if (hr) {
        var node = hr;
        while (node) {
          var next = node.nextSibling;
          node.remove();
          node = next;
        }
      }

      container.innerHTML = main.innerHTML;
    })
    .catch(function () {
      // Keep whatever fallback HTML is already in #bio
    });
}());
