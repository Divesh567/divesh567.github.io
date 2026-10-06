# CV and Portfolio Improvement Tracker

Plan for strengthening `Divesh_Dogra_CV.pdf` and `index.html`, split into small tasks that can be tackled a few at a time. Created 2026-10-05 from a hiring-manager style review of the CV and the site.

## How to use

- Pick a batch and tell Claude "do batch 1", or name tasks ("do CV-03 and EXP-05").
- When a task is finished, tick its box and add the date and commit after it. The checklist below is the only place status lives.
- Progress: `grep -c '^- \[x\]' TRACKER.md` counts done tasks and `grep -c '^- \[ \]' TRACKER.md` counts open ones.
- This repo is public. Do not commit employer-confidential numbers, contacts, or code. Share figures in chat, and only publish what you are cleared to publish.

Legend. Priority: P0 = stops the CV being read at all, P1 = changes how a hiring manager scores it, P2 = polish. Effort: S = under an hour, M = a few hours, L = a day or more. Owner: claude = can be done alone, you = needs your input or action, both = needs both.

## Batches

| Batch | Theme | Tasks | Needs from you |
|---|---|---|---|
| 1 | Make the CV readable | CV-01, CV-02, CV-03, CV-04, EXP-05 | Nothing, review only |
| 2 | Decisions and facts | POS-01, EXP-01, MP-01, CV-05, PUB-03 | About an hour of answers (see worksheet) |
| 3 | Rewrite the experience | POS-02, EXP-02, EXP-03, EXP-04 | Batch 2 answers |
| 4 | Skills and credibility | MP-02, SK-01, SK-02, TL-01 | MP-01 and the dates from EXP-01 |
| 5 | Polish the story | EXP-06, EXP-07, EXP-08, POS-03 | Short confirmations |
| 6 | Links and reach | MISS-01, MISS-02, MISS-03, MISS-04, TL-02 | LinkedIn URL, store numbers, availability |
| 7 | Site sync and public proof | WEB-01, WEB-02, PUB-01, PUB-02 | Screenshots, time for a code sample |

Order matters: batch 3 needs batch 2, and the site sync in batch 7 should wait for batches 3 to 6.

## Tasks

### CV file and format

- [x] **CV-01** Rebuild the CV from an editable source and export a real text PDF · P0 · M · claude · done 2026-10-05 (a8cd93c)
  - Why: the current PDF is a screenshot (no text layer, no fonts, no clickable links), so applicant-tracking systems and recruiter search see a blank page.
  - Done when: `pdftotext Divesh_Dogra_CV.pdf -` prints the full CV, the website and GitHub links are clickable, the filename is unchanged (the site links to it), and the source plus one build command live in the repo so later batches only edit text and re-run it.
- [x] **CV-02** Cut to one page (two at most) and fix the layout · P0 · M · claude · done 2026-10-05 (a8cd93c) · fits one page now, re-check after batch 3 adds content
  - Why: three pages for about four years of experience, large white gaps, a nearly empty page 3, and dates clipped at the right edge on page 2.
  - Done when: no orphan page, no clipped text, strongest material on page 1. Revisit after batch 3, since the rewrite changes the length.
- [x] **CV-03** Set the PDF title and author metadata · P0 · S · claude · done 2026-10-05 (a8cd93c)
  - Why: the file title reads "Resume variations and photo" and shows in the browser tab.
  - Done when: `pdfinfo` shows a title like "Divesh Dogra, Unity Game Developer" (match the positioning from POS-01) and an author.
- [x] **CV-04** Single-column layout with standard section headings · P1 · S · claude · done 2026-10-05 (a8cd93c)
  - Why: parsers expect Summary, Experience, Skills, Education, and the contact line wraps and leaves a dangling separator.
  - Done when: the contact row fits cleanly and a text extraction reads in the right order.
- [x] **CV-05** Decide what the public CV shows · P2 · S · you · done 2026-10-06
  - Why: the PDF sits in a public repo, so the phone number and postal code can be scraped, and a photo is usually discouraged for US, UK and EU applications.
  - Done when: the decision is logged under Decisions; if a second variant is wanted, it builds from the same source as CV-01.

### Positioning

- [x] **POS-01** Pick your target lane · P1 · S · you · done 2026-10-06
  - Why: the CV reads as a generalist (gameplay, multiplayer, live-ops, shaders, lighting, UI, VFX) with no target role.
  - Done when: one sentence is agreed and logged under Decisions, for example "Unity gameplay and live-ops engineer with a VFX and tech-art background".
- [ ] **POS-02** Rewrite the summary · P1 · S · both · needs POS-01, EXP-01
  - Why: "Strong in..." is self-rating, and the summary names no role and no proof.
  - Done when: two to three sentences with the target role, the lane, and two measurable proof points.
- [ ] **POS-03** Surface the VFX to tech-art to engineering story · P2 · S · both · optional now: lane A was chosen without the VFX angle, drop unless wanted
  - Why: it is the real differentiator and is currently buried at the bottom of the timeline.
  - Done when: one line in the summary and the skills block use it.

### Experience

- [ ] **EXP-01** Collect real numbers and facts (worksheet below) · P1 · M · you · FAUG part answered 2026-10-06 from a git-history summary; claim checks, numbers, Chapter 26 and BoredLeaders still open
  - Why: the bullets lack baselines, scale and results, so rewrites are guesswork without them.
  - Done when: every worksheet question is answered or marked "not available".
- [ ] **EXP-02** Rewrite the FAUG bullets · P1 · M · both · needs EXP-01
  - Why: the bullets say what was built, not the scale, the method or the result.
  - Done when: each bullet has action, scope, tech and result; the FPS gain says how and on which devices; retention and A/B claims carry numbers or a named experiment; "Fixed backend, multiplayer, flow, and performance issues across the product" is replaced with something specific or deleted.
- [ ] **EXP-03** Rewrite the Chapter 26 bullets · P1 · M · both · needs EXP-01
  - Why: it is unclear what was client and what was backend, and the clan system is worded almost the same as in FAUG.
  - Done when: tournaments and leaderboards say whether you built the backend, the client, or both; the clan system says whether it is a reusable module shared with FAUG; "a few months" becomes real dates; Arabic localization mentions right-to-left handling if it applies.
- [ ] **EXP-04** Bring Mahabharat into the BoredLeaders entry · P1 · M · both · needs EXP-01
  - Why: Mahabharat is a Shipped Titles tile but appears in no bullet, while the site holds the best engineering detail (400+ level CSV-driven narrative puzzle, 50-level data-driven jigsaw, 3D Ludo with power-ups, Firebase).
  - Done when: the CV carries those points, "AI-driven NPC behaviors" is tied to a specific title and technique, and "improved performance by 40%" names the metric and the device.
- [x] **EXP-05** Merge Intern and Junior at BoredLeaders, vary bullet openers, lead with the strongest bullet · P1 · S · claude · done 2026-10-05 (a8cd93c)
  - Why: the same company appears twice for 2023 with two bullets on the intern role, "Built" opens 8 of the 26 bullets, and the strongest bullets sit at positions 2 and 4.
  - Done when: one entry shows the promotion, no verb opens more than two bullets, and the strongest bullet comes first in each role.
- [ ] **EXP-06** Clarify the Immersiveorama entry · P2 · S · both
  - Why: it reads like an employer, and solo work is judged differently.
  - Done when: it says solo or self-employed and links Steady Light with installs or rating if you have them. Also confirm the live store title matches the name on the CV (the site's store link uses the package id `LightForce`).
- [ ] **EXP-07** Fix the Cinegence wording and trim the VFX role · P2 · S · both
  - Why: "Used Nuke for CG effects and simulations" is imprecise (Nuke is a compositor, and simulations usually come from other tools), and the role takes as much space as the engineering roles.
  - Done when: the bullets say what you actually did and keep only lines relevant to tech art.
- [ ] **EXP-08** Ownership and claims audit across all bullets · P1 · S · both · run last in the experience rewrite
  - Why: there are no team sizes, "I" versus "we" is unclear, and some bullets claim outcomes outside your control (for example "took the game into e-sports").
  - Done when: each role states team size and your part, and no bullet claims a business result you did not own.

### Multiplayer evidence

- [ ] **MP-01** Write down the netcode work you actually did · P1 · S · you · provisional answer logged 2026-10-06, confirm whether any gameplay sync was written
  - Why: the CV headlines Multiplayer / Netcode, but no bullet shows networking work and the NGO course is the only evidence.
  - Done when: stack, authority model, what was synced, player counts, and your part versus the team's are logged under Decisions (or "none, live-ops side only").
- [ ] **MP-02** Back up or reposition the multiplayer claim · P1 · S · both · needs MP-01
  - Why: a senior engineer will ask how state was synced, and the CV cannot answer.
  - Done when: either one or two concrete netcode bullets name the stack, or the summary and skill chips describe the work as live-ops and meta-game multiplayer instead.

### Skills and certifications

- [ ] **SK-01** Rebuild the skills block · P1 · S · both
  - Why: Unity is not listed as a skill, "OOP" and "Debugging" are table stakes, "UI/UX" and "Lighting / World Design" have no bullets behind them, and tools named in the bullets are missing.
  - Done when: skills are grouped (language, engine, backend and live-ops, tools); Unity and its version are listed; PlayFab, Firebase, GCP, Addressables, DOTween, Scriptable Objects, I2 Localization and remote config appear where true, along with the source control and profiling tools you actually use; every listed skill is backed by a bullet.
- [ ] **SK-02** Trim the certifications · P1 · S · both
  - Why: eight course titles with no issuer, date or link, and some read as tutorial projects.
  - Done when: only the strongest remain (candidates: Multiplayer in Unity with NGO, Shader Graphs for Effects), each with issuer, year and link, and the rest become a single "Courses" line or are removed.

### Timeline and credibility

- [ ] **TL-01** Add months to all dates and explain the transitions · P1 · S · both · needs EXP-01
  - Why: year-only dates make 2021 to 2022 (VFX to Unity) and 2024 to 2025 look like gaps and hide how long each role lasted.
  - Done when: every role has a month and year, and one line covers the VFX-to-Unity move and any gap.
- [ ] **TL-02** Reconcile numbers across the CV and the site · P1 · S · both
  - Why: the site says 5+ titles and the CV shows 4, the site claims Android and iOS but every store link is Google Play, and "4+ years" is repeated in several places.
  - Done when: each claim has one number everywhere (meta description, stats board, about, hero tagline, CV), and the iOS claim has App Store links or is dropped.

### Links and reach

- [ ] **MISS-01** Add LinkedIn to the CV and the site · P1 · S · you, then claude
  - Why: recruiters check LinkedIn first, and neither the CV nor the site links to it.
  - Done when: the link is in the CV header and in the site's hero and contact buttons (needs the URL).
- [ ] **MISS-02** Make Shipped Titles clickable with installs and ratings · P1 · S · you, then claude
  - Why: the CV tiles carry no links or numbers, while the site already has store links.
  - Done when: each title links to its store page with an installs bracket and rating read from the live listing.
- [ ] **MISS-03** Add availability · P2 · S · you
  - Why: nothing says when you can start or where you can work.
  - Done when: notice period, location, remote or relocation preference, and work authorization (for non-India applications) are decided and one line is added.
- [ ] **MISS-04** Add an engineering-practice line · P2 · S · you, then claude
  - Why: nothing shows version control, code review, build pipelines, or how you work with QA, backend and designers.
  - Done when: one line or two bullets cover them, only where true.

### Public proof

- [ ] **PUB-01** Publish one clean-room Unity sample · P1 · L · you, claude can help
  - Why: shipped work is proprietary, so no public code shows how you write; it also offsets the lack of a CS degree.
  - Done when: a public repo with a README and a short GIF. Ideas: a CSV-driven level pipeline, a small NGO multiplayer demo, a clan and leaderboard module on a mock backend. Never reuse employer code.
- [ ] **PUB-02** Write a short technical post · P2 · M · you
  - Why: it shows how you reason about performance, not only the result.
  - Done when: a post such as "15 to 30 FPS on 4GB devices: what changed and how it was measured" is linked from the site. Get Dot9's OK first.
- [ ] **PUB-03** Review your GitHub profile as an employer would · P1 · S · you
  - Why: reviewers open GitHub early, and pinned repos, the profile README and repo descriptions should show Unity work. This needs a manual pass.
  - Done when: pinned repos, profile README, descriptions and repo visibility are reviewed, and any findings are added here as new tasks.

### Site

- [x] **WEB-00** Add Download CV buttons to the hero and contact sections · P1 · S · claude · done 2026-10-05 (c8a9997)
- [ ] **WEB-01** Add the missing screenshots · P2 · S · you
  - Why: `steadylight-1.jpg`, `steadylight-2.jpg` and `mahabharat-1.jpg` to `mahabharat-3.jpg` are referenced but not in the repo, so those slots render nothing.
  - Done when: the images are added with the same names, or the references are removed.
- [ ] **WEB-02** Sync the site copy with the revised CV · P1 · M · claude · after batches 3 to 6
  - Why: the same facts live in the meta description, stats board, hero tagline, `#about`, skills detail, project bullets and timeline, and they drift easily (see CLAUDE.md).
  - Done when: all of them match the CV and the TL-02 numbers.

## EXP-01 worksheet

Answer in chat or privately; commit only what you are cleared to publish.

**All roles**
- Exact start and end month for every job, what you did in 2021 to 2022, any gap in 2024 to 2025, and the date you were promoted from intern to junior.
- Team size per project and which parts were yours alone.
- Unity versions, source control, build or CI pipeline, and how QA and backend worked with you.

**FAUG**
- 15 to 30 FPS: devices, how you measured, and the top three changes that moved it.
- Retention: which metric (day 1, day 7), before and after, and from which experiment.
- FBL League: matches or players, which parts you built (client UI, backend calls, matchmaking), team size.
- Teams / clan system: scope, backend, and whether it is shared with Chapter 26.
- Announcement system: how segments or traits were defined, and reach.
- A/B tests: experiments you ran and one concrete result.
- Netcode (also MP-01): stack, authority model, what was synced, players per match, your part.
- Store listing: installs bracket and rating.

**Chapter 26**
- Tournaments and leaderboards: backend, client, or both, and which GCP services.
- Minigames: how many shipped, which you owned, which were multiplayer.
- Live-cast: how it works end to end.
- Arabic localization: right-to-left handling approach.
- Real start and ship months, and team size.
- Store listing: installs bracket and rating.

**BoredLeaders and Mahabharat**
- The 40% gain: which metric (frame time, load time), which device, what changed.
- AI-driven NPC behaviors: which title and which technique.
- Release dates, installs and ratings for the board game and the jigsaw app, puzzle level counts per game, and how Firebase is used.

**Immersiveorama and Steady Light**
- Release date, installs and rating, and the live store title (the site's store link uses the package id `LightForce`).

**Cinegence Media**
- Which films or shows you can name, what your part was, and which tools you used for it (the Nuke role versus simulation tools).

**Reach**
- LinkedIn URL, any App Store links, and notice period, location, remote, relocation and work authorization preferences.

## Decisions

| Decision | Answer | Date |
|---|---|---|
| Target lane (POS-01) | Unity gameplay and live-ops engineer (VFX angle left out) | 2026-10-06 |
| Netcode work in one line (MP-01) | Provisional: Photon PUN connection, matchmaking and session layer on FAUG; no gameplay state sync claimed yet | 2026-10-06 |
| Public CV: phone, postal code, photo (CV-05) | Photo, phone number and postal code removed; location shows "Mumbai, India". | 2026-10-06 |
| Availability line (MISS-03) | | |
