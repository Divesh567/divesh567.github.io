# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Divesh Dogra's personal portfolio, a static GitHub Pages user site (`divesh567.github.io`). There is no build step, package manager, linter, or test suite. The whole site is one hand-written file, `index.html`, plus image assets and a CV PDF in the repo root.

## Running it

Open `index.html` directly, or serve the root so relative asset paths behave like production:

```
python3 -m http.server 8000
```

There is no CI or deploy config in the repo, so a push to the Pages source branch is the deploy. Fonts (Chakra Petch, Inter, JetBrains Mono) load from Google Fonts, and the FAUG trailer is a YouTube iframe, so layout checks need network access.

## Architecture of `index.html`

Everything lives in one file: `<style>` in the head (design tokens in `:root`, such as `--ember`, `--surface`, `--r-md`), markup, then a single `<script>` at the bottom. Page order is nav, hero `<header>`, then `#about`, `#skills`, `#projects`, `#timeline`, `#contact`, footer.

Things that span several places and are easy to break:

- **Runtime collapse wiring (script at the bottom).** Project cards and skill cards are authored fully expanded, and the script makes them collapsible. For `.project`, everything after the first `.proj-top` child is wrapped in a `.collapse` container, so `.proj-top` must stay the first child and the rest must be its siblings. For `.skill-card`, only `.skill-detail` is collapsed and the `h3` gets the chevron. New cards need these classes and this shape, with no extra JS.
- **Scroll reveal.** Anything with class `.rise` is faded in by an `IntersectionObserver`. Add `.rise` to new blocks and the stagger delay is computed automatically.
- **Image fallbacks.** Every image uses `onerror` to remove itself (`this.remove()`, or `this.closest('.shot').remove()` for screenshots), and `.proj-icon` carries a text-letter `.mono` fallback behind the `<img>`. This is deliberate: `steadylight-1.jpg`, `steadylight-2.jpg`, and `mahabharat-1.jpg` to `mahabharat-3.jpg` are referenced but not in the repo, so those screenshots silently don't render. Dropping files with those exact names in the root makes them appear. Keep the `onerror` pattern on new images.
- **Hardcoded numbering and anchors.** Section headers carry manual indices (`sec-idx` 01 to 04), and the nav links point at the section ids. Adding, removing, or reordering a section means updating both by hand.
- **Facts repeated across the page.** The same claims appear in several places and must be edited together: years of experience and title count (`<meta name="description">`, the `.board` stats, the `#about` copy, the hero tagline), and project names and bullets (`#projects`, the per-project rows in each `.skill-detail`, `#about`, and the `#timeline` descriptions).

## Content notes

- The copy deliberately avoids em dashes and en dashes (the last commit removed them). Use commas, colons, or "to" for ranges, for example "2025 to Present". Match that when adding text.
- The file name `Divesh_Dogra_CV.pdf` is the only CV in the repo (there is no `cv.pdf`), and the hero and contact sections link to it with "Download CV" buttons. Any CV link must point at `Divesh_Dogra_CV.pdf` exactly, since a wrong filename means a 404 on Pages. Content changes to `index.html` may need a matching edit in the CV source.
- **The CV PDF is generated, never hand-edited.** Edit `_cv/cv.html`, then run `NODE_PATH=$(npm root -g) node _cv/build.cjs` (needs Playwright with Chromium; in this cloud environment both are preinstalled). It overwrites `Divesh_Dogra_CV.pdf`, sets the title and author, and keeps a real text layer with clickable links. After a build, check `pdfinfo Divesh_Dogra_CV.pdf` (title, author, page count), that `pdftotext Divesh_Dogra_CV.pdf -` prints the full CV, and render a page to check for clipping. The layout is single-column A4, set to fit one page, using system fonts (Inter if installed, else Helvetica, Arial or Liberation Sans) that get embedded. Avoid letter-spacing on text, since it can make text extraction split words into letters. `_cv/` starts with an underscore so Jekyll-based GitHub Pages does not publish it, which keeps a second copy of the contact details off the live site. The icons in `_cv/img/` are downsized copies of the root `*-icon.png` files.
- **Confidentiality.** Divesh cannot share internal details of Dot9's or BoredLeaders' games, and no retention numbers for any game. On the CV, the site and the tracker, describe that work only at the level of features a player can see, plus general skills. Never add numbers (performance, retention), internal mechanics, architecture, tool-to-system mappings or partner names. Steady Light is Divesh's own game, so its design can be described in more detail. Ask before adding anything more specific.
- Layout is responsive. The nav links are hidden under 640px, and a `prefers-reduced-motion` block disables transitions, so keep new animations covered by it.

## Tracker

`TRACKER.md` holds the CV and site improvement plan as ID'd tasks grouped into batches, plus the open questions and decisions. Each open task also has a GitHub issue under parent issue 1 (labels `batch:N`, `P1`/`P2`, `owner:*`, `area:*`). When a task is finished, tick its box in `TRACKER.md`, add the date and commit, and close its issue (completed). When creating issues with the GitHub tools, create them without a parent so labels are auto-created, then attach them to the parent with the sub-issue tool using the issue's `id`. Many tasks touch both `Divesh_Dogra_CV.pdf` and `index.html`, so keep them in sync. This repo is public, so never commit the employer-confidential figures that the tracker's worksheet asks for.
