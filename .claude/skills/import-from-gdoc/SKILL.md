---
name: import-from-gdoc
description: Read a Google Doc of class notes and create or update that year's five day pages (Mon–Fri) with intro, key ideas, and recording links.
---

# Skill: import-from-gdoc

Reads a Google Doc of music history class notes and populates the day pages for a given year.
One Google Doc maps to exactly one year.

## Usage

```
/import-from-gdoc https://docs.google.com/document/d/<ID>/... 2027
```

## What this skill does

1. **Extract the file ID** from the Google Doc URL (the long alphanumeric string between `/d/` and `/edit`).
2. **Check** that `<YEAR>/` exists. If not, tell the user to run `/add-year <YEAR>` first.
3. **Read the Google Doc** using the Google Drive MCP tool (`read_file_content` with the extracted file ID).
4. **Parse** the document structure, mapping content to the five days:
   - Identify each day's section heading (Monday, Tuesday, Wednesday, Thursday, Friday).
   - For each day:
     - **Intro:** extract 1–2 sentence opener. Keep it concise and student-friendly (middle/high school).
     - **Key Ideas:** distill the main bullet points into a short, plain-English list.
     - **Listen & Watch:** extract all YouTube/recording links verbatim. Use the `<ul class="recordings">` HTML format established in `2026/monday.md`.
5. **Write** each day's content to `<YEAR>/monday.md` … `friday.md`, preserving all front-matter fields (layout, title, day_name, year, order).
6. **Flag** in a summary comment block any:
   - Days with no recording links found.
   - Links that were inferred (not present verbatim in the doc).
   - Sections that appear to be draft/incomplete in the doc.

## Format to follow

Look at `2026/monday.md` as the canonical example:
- Front matter: `layout: day`, `title`, `day_name`, `year`, `order`.
- Body: short intro paragraph, `## Key Ideas` (bullet list), `## Listen & Watch` (HTML `<ul class="recordings">`).
- Each recording item: `<a href="..." target="_blank" rel="noopener">Composer — Title</a>` + `<span class="rec-note">What to listen for.</span>`
- Optional: `<div class="info-box">`, `<p class="homework">` blocks where appropriate.

## Notes for Claude

- Requires the **Google Drive MCP** integration to be connected (the `mcp__claude_ai_Google_Drive__read_file_content` tool).
- If the doc's sections don't map neatly to Mon–Fri headings, use your best judgment and flag ambiguities.
- Do NOT change any front-matter values other than `title` and the body content.
- Do NOT modify `2026/` files — only write to the target `<YEAR>/` folder.
- Keep language accessible for middle and high school students: short sentences, minimal jargon.
- If a section is clearly a draft or placeholder in the doc, write what's there and add an HTML comment noting it's a draft.
