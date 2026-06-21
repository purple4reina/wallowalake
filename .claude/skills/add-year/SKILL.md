---
name: add-year
description: Scaffold a new year's folder (index + 5 day pages) with placeholder front matter and empty content sections.
---

# Skill: add-year

Creates a `<YEAR>/` folder with all necessary boilerplate so you can fill in content
(by hand or with the `import-from-gdoc` skill).

## Usage

```
/add-year 2027
```

## What this skill does

1. **Validate** the year argument (4-digit number). Refuse if the `<YEAR>/` directory already exists.
2. **Create** `<YEAR>/index.md` by copying `_templates/year/index.md` and replacing every instance of `YEAR` with the given year.
3. **Create** the five day files, each based on `_templates/year/day.md`, with the correct values substituted:

   | File | day_name | order |
   |------|----------|-------|
   | `monday.md`    | Monday    | 1 |
   | `tuesday.md`   | Tuesday   | 2 |
   | `wednesday.md` | Wednesday | 3 |
   | `thursday.md`  | Thursday  | 4 |
   | `friday.md`    | Friday    | 5 |

4. **Confirm** each file was created and list the paths.
5. **Remind** the user: the home page and year nav are generated automatically — no other files need editing.

## Notes for Claude

- Read `_templates/year/index.md` and `_templates/year/day.md` to get the canonical templates.
- Replace the literal string `YEAR` (all caps) with the user's year in every front-matter field and body placeholder.
- Do NOT invent any class content — leave placeholder text in the body for the user or `import-from-gdoc` to fill.
- Do NOT modify any existing files.
- If the year folder already exists, stop and tell the user which files are already there.
