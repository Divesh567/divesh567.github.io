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
- The file name `Divesh_Dogra_CV.pdf` is the only CV in the repo (there is no `cv.pdf`), and the hero and contact sections link to it with "Download CV" buttons. Any CV link must point at `Divesh_Dogra_CV.pdf` exactly, since a wrong filename means a 404 on Pages. The PDF is a binary, so any content change in `index.html` should be flagged as possibly needing a matching manual CV update.
- Layout is responsive. The nav links are hidden under 640px, and a `prefers-reduced-motion` block disables transitions, so keep new animations covered by it.
