# Music Camps at Wallowa Lake — Music History Class

Student resource site for Rey Abolofia's music history class at
[Music Camps at Wallowa Lake](https://musicampswallowa.com).

Live site: **https://purple4reina.github.io/wallowalake/**

Built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

---

## Adding a New Year

Each summer's class notes live in their own folder (`2026/`, `2027/`, …).
The home page and navigation update automatically — no layout or CSS edits needed.

### Option A — Use the Claude skill (recommended)

In Claude Code, run:

```
/add-year 2027
```

This creates `2027/` with placeholder files. Then populate the content by hand or run:

```
/import-from-gdoc https://docs.google.com/document/d/<your-doc-id>/... 2027
```

This reads your Google Doc and fills in each day's intro, key ideas, and recording links.

### Option B — Copy manually

```bash
cp -r 2026 2027
```

Then open each file in `2027/` and:
1. Change `year: 2026` → `year: 2027` in the front matter.
2. Replace the body content with the new year's material.

That's it. Push to `main` and GitHub Pages rebuilds automatically.

---

## Running Locally

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000/wallowalake/

> **Note:** The About page fetches the instructor bio from `purple4reina.github.io/MusicBook/about.html`.
> This works on the live site (same origin) but may show a fallback link locally (cross-origin).

---

## File Structure

```
.
├── _config.yml            # Site title, baseurl, settings
├── _layouts/
│   ├── default.html       # Header, hero banner, footer
│   ├── year.html          # Year overview (list of day cards)
│   └── day.html           # Single day (prev/next nav)
├── _includes/
│   └── credits.html       # Photo attribution (footer)
├── assets/
│   ├── css/style.css      # Purple theme
│   ├── js/bio.js          # Bio embed (About page)
│   └── images/            # Wallowa Lake photo + LICENSES.md
├── _templates/year/       # Boilerplate copied by /add-year skill
├── .claude/skills/        # Claude Code skills for yearly workflow
├── index.html             # Home — auto-lists all years
├── about.md               # Instructor bio
└── 2026/                  # 2026 class notes (one .md per day)
    ├── index.md
    ├── monday.md
    ├── tuesday.md
    ├── wednesday.md
    ├── thursday.md
    └── friday.md
```

---

## Enabling GitHub Pages

After pushing to `main`:

1. Go to the repo on GitHub → **Settings** → **Pages**
2. Set **Source** to `Deploy from a branch`
3. Set **Branch** to `main` / `/ (root)`
4. Click **Save**

GitHub will build and deploy the site automatically on every push. It may take 1–2 minutes.

---

## Photo Credit

Banner photo: *Wallowa Lake from Mount Howard* by [Finetooth](https://commons.wikimedia.org/wiki/User:Finetooth),
[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), via Wikimedia Commons.
