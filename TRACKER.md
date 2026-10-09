# CV and Portfolio Improvement Tracker

Plan for strengthening `Divesh_Dogra_CV.pdf` and `index.html`, split into small tasks that can be tackled a few at a time. Created 2026-10-05 from a hiring-manager style review of the CV and the site.

## How to use

- Pick a batch and tell Claude "do batch 1", or name tasks ("do CV-03 and EXP-05").
- When a task is finished, tick its box and add the date and commit after it, and close its GitHub issue. This checklist is the record; the issues feed the project board, so keep both in step.
- Progress: `grep -c '^- \[x\]' TRACKER.md` counts done tasks and `grep -c '^- \[ \]' TRACKER.md` counts open ones.
- This repo is public. Do not commit employer-confidential numbers, contacts, or code. Share figures in chat, and only publish what you are cleared to publish.
- Confidentiality rule (2026-10-07): no performance or retention numbers for any game, and no internal details of Dot9's or BoredLeaders' games, on the CV, the site or this tracker. Describe the work at the level of features a player can see, plus general skills.

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

Order matters: batch 3 needs batch 2, and the site sync in batch 7 should wait for batches 3 to 6. Agreed workflow for batch 2: collect all four work summaries first, then answer the open questions, then write batch 3.

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
- [x] **POS-02** Rewrite the summary · P1 · S · both · needs POS-01, EXP-01 · done 2026-10-08: live-ops first, simulator line removed; no performance or retention proof points because of the confidentiality rule, so the proof is the shipped titles and visible counts · [#5](https://github.com/Divesh567/divesh567.github.io/issues/5)
  - Why: "Strong in..." is self-rating, and the summary names no role and no proof.
  - Done when: two to three sentences with the target role, the lane, and two measurable proof points.
- [ ] **POS-03** Surface the VFX to tech-art to engineering story · P2 · S · both · optional now: lane A was chosen without the VFX angle, drop unless wanted · [#16](https://github.com/Divesh567/divesh567.github.io/issues/16)
  - Why: it is the real differentiator and is currently buried at the bottom of the timeline.
  - Done when: one line in the summary and the skills block use it.

### Experience

- [ ] **EXP-01** Collect real numbers and facts (worksheet below) · P1 · M · you · work summaries: all four sources received 2026-10-06 (FAUG, Chapter 26, both Mahabharat apps, Steady Light); the open questions are next · [#2](https://github.com/Divesh567/divesh567.github.io/issues/2)
  - Why: the bullets lack baselines, scale and results, so rewrites are guesswork without them.
  - Done when: every worksheet question is answered or marked "not available".
- [ ] **EXP-02** Rewrite the FAUG bullets · P1 · M · both · needs EXP-01 · draft applied 2026-10-06 from the git history; unconfirmed claims left out until Q01 to Q08 are answered · FPS claim removed and overdraw fix added 2026-10-07, on the CV and the site · reward bullet corrected 2026-10-07 on the CV and the site card · [#6](https://github.com/Divesh567/divesh567.github.io/issues/6)
  - Why: the bullets say what was built, not the scale, the method or the result.
  - Done when: each bullet has action, scope, tech and result; the FPS gain says how and on which devices; retention and A/B claims carry numbers or a named experiment; "Fixed backend, multiplayer, flow, and performance issues across the product" is replaced with something specific or deleted.
- [ ] **EXP-03** Rewrite the Chapter 26 bullets · P1 · M · both · needs EXP-01 · draft applied 2026-10-06; client-only wording for tournaments, minigame claim reworded to fixes (see Q09, Q10) · [#7](https://github.com/Divesh567/divesh567.github.io/issues/7)
  - Why: it is unclear what was client and what was backend, and the clan system is worded almost the same as in FAUG.
  - Done when: tournaments and leaderboards say whether you built the backend, the client, or both; the clan system says whether it is a reusable module shared with FAUG; "a few months" becomes real dates (done 2026-10-08, released Jul 2026); Arabic localization mentions right-to-left handling if it applies.
- [ ] **EXP-04** Bring Mahabharat into the BoredLeaders entry · P1 · M · both · needs EXP-01 · draft applied 2026-10-06 for both Mahabharat apps; the 40% figure and intern claims left out (see Q14, Q28 to Q30) · [#8](https://github.com/Divesh567/divesh567.github.io/issues/8)
  - Why: Mahabharat is a Shipped Titles tile but appears in no bullet, while the site holds the best engineering detail (400+ level CSV-driven narrative puzzle, 50-level data-driven jigsaw, 3D Ludo with power-ups, Firebase).
  - Done when: the CV carries those points, "AI-driven NPC behaviors" is tied to a specific title and technique, and "improved performance by 40%" names the metric and the device.
- [x] **EXP-05** Merge Intern and Junior at BoredLeaders, vary bullet openers, lead with the strongest bullet · P1 · S · claude · done 2026-10-05 (a8cd93c)
  - Why: the same company appears twice for 2023 with two bullets on the intern role, "Built" opens 8 of the 26 bullets, and the strongest bullets sit at positions 2 and 4.
  - Done when: one entry shows the promotion, no verb opens more than two bullets, and the strongest bullet comes first in each role.
- [ ] **EXP-06** Clarify the Immersiveorama entry · P2 · S · both · release and update dates confirmed 2026-10-07 and on the CV · [#13](https://github.com/Divesh567/divesh567.github.io/issues/13)
  - Why: it reads like an employer, and solo work is judged differently.
  - Done when: it says solo or self-employed and links Steady Light with installs or rating if you have them. Also confirm the live store title matches the name on the CV (the site's store link uses the package id `LightForce`).
- [x] **EXP-07** Fix the Cinegence wording and trim the VFX role · P2 · S · both · done 2026-10-08 (two bullets, named films, Nuke described as compositing) · [#14](https://github.com/Divesh567/divesh567.github.io/issues/14)
  - Why: "Used Nuke for CG effects and simulations" is imprecise (Nuke is a compositor, and simulations usually come from other tools), and the role takes as much space as the engineering roles.
  - Done when: the bullets say what you actually did and keep only lines relevant to tech art.
- [ ] **EXP-08** Ownership and claims audit across all bullets · P1 · S · both · run last in the experience rewrite · [#15](https://github.com/Divesh567/divesh567.github.io/issues/15)
  - Why: there are no team sizes, "I" versus "we" is unclear, and some bullets claim outcomes outside your control (for example "took the game into e-sports").
  - Done when: each role states team size and your part, and no bullet claims a business result you did not own.

### Multiplayer evidence

- [x] **MP-01** Write down the netcode work you actually did · P1 · S · you · provisional answer logged 2026-10-06, confirm whether any gameplay sync was written · [#3](https://github.com/Divesh567/divesh567.github.io/issues/3) · done 2026-10-07 · issue closed
  - Why: the CV headlines Multiplayer / Netcode, but no bullet shows networking work and the NGO course is the only evidence.
  - Done when: stack, authority model, what was synced, player counts, and your part versus the team's are logged under Decisions (or "none, live-ops side only").
- [x] **MP-02** Back up or reposition the multiplayer claim · P1 · S · both · needs MP-01 · draft 2026-10-06: skills chip now reads Multiplayer (Photon PUN) instead of Multiplayer / Netcode · [#9](https://github.com/Divesh567/divesh567.github.io/issues/9) · done 2026-10-07 · issue closed
  - Why: a senior engineer will ask how state was synced, and the CV cannot answer.
  - Done when: either one or two concrete netcode bullets name the stack, or the summary and skill chips describe the work as live-ops and meta-game multiplayer instead.

### Skills and certifications

- [ ] **SK-01** Rebuild the skills block · P1 · S · both · [#10](https://github.com/Divesh567/divesh567.github.io/issues/10)
  - Why: Unity is not listed as a skill, "OOP" and "Debugging" are table stakes, "UI/UX" and "Lighting / World Design" have no bullets behind them, and tools named in the bullets are missing.
  - Done when: skills are grouped (language, engine, backend and live-ops, tools); Unity and its version are listed; PlayFab, Firebase, GCP, Addressables, DOTween, Scriptable Objects, I2 Localization and remote config appear where true, along with the source control and profiling tools you actually use; every listed skill is backed by a bullet.
- [ ] **SK-02** Trim the certifications · P1 · S · both · [#11](https://github.com/Divesh567/divesh567.github.io/issues/11)
  - Why: eight course titles with no issuer, date or link, and some read as tutorial projects.
  - Done when: only the strongest remain (candidates: Multiplayer in Unity with NGO, Shader Graphs for Effects), each with issuer, year and link, and the rest become a single "Courses" line or are removed.

### Timeline and credibility

- [x] **TL-01** Add months to all dates and explain the transitions · P1 · S · both · needs EXP-01 · done 2026-10-07: BoredLeaders, Dot9, VFX and the VFX-to-Unity story have months; Steady Light stays year-level because it is an independent project · [#12](https://github.com/Divesh567/divesh567.github.io/issues/12) · issue closed
  - Why: year-only dates make 2021 to 2022 (VFX to Unity) and 2024 to 2025 look like gaps and hide how long each role lasted.
  - Done when: every role has a month and year, and one line covers the VFX-to-Unity move and any gap.
- [ ] **TL-02** Reconcile numbers across the CV and the site · P1 · S · both · partly resolved 2026-10-06: the CV now counts five titles (two Mahabharat apps), matching the site's 5+; the iOS claim is still open · [#21](https://github.com/Divesh567/divesh567.github.io/issues/21)
  - Why: the site says 5+ titles and the CV shows 4, the site claims Android and iOS but every store link is Google Play, and "4+ years" is repeated in several places.
  - Done when: each claim has one number everywhere (meta description, stats board, about, hero tagline, CV), and the iOS claim has App Store links or is dropped.

### Links and reach

- [x] **MISS-01** Add LinkedIn to the CV and the site · P1 · S · you, then claude · done 2026-10-08 (CV header, site hero and contact buttons) · [#17](https://github.com/Divesh567/divesh567.github.io/issues/17)
  - Why: recruiters check LinkedIn first, and neither the CV nor the site links to it.
  - Done when: the link is in the CV header and in the site's hero and contact buttons (needs the URL).
- [ ] **MISS-02** Make Shipped Titles clickable with installs and ratings · P1 · S · you, then claude · [#18](https://github.com/Divesh567/divesh567.github.io/issues/18)
  - Why: the CV tiles carry no links or numbers, while the site already has store links.
  - Done when: each title links to its store page with an installs bracket and rating read from the live listing.
- [x] **MISS-03** Add availability · P2 · S · you · done 2026-10-08 (notice period and remote and relocation on the CV; remote and relocation on the site; work authorization left off until applying outside India) · [#19](https://github.com/Divesh567/divesh567.github.io/issues/19)
  - Why: nothing says when you can start or where you can work.
  - Done when: notice period, location, remote or relocation preference, and work authorization (for non-India applications) are decided and one line is added.
- [x] **MISS-04** Add an engineering-practice line · P2 · S · you, then claude · done 2026-10-08: tools only (Unity 2022 LTS and Unity 6, Git, Mantis) added to the CV Skills line; no CI, code-review or QA process claimed, since none was confirmed · [#20](https://github.com/Divesh567/divesh567.github.io/issues/20)
  - Why: nothing shows version control, code review, build pipelines, or how you work with QA, backend and designers.
  - Done when: one line or two bullets cover them, only where true.

### Public proof

- [ ] **PUB-01** Publish one clean-room Unity sample · P1 · L · you, claude can help · [#24](https://github.com/Divesh567/divesh567.github.io/issues/24)
  - Why: shipped work is proprietary, so no public code shows how you write; it also offsets the lack of a CS degree.
  - Done when: a public repo with a README and a short GIF. Ideas: a CSV-driven level pipeline, a small NGO multiplayer demo, a clan and leaderboard module on a mock backend. Never reuse employer code.
  - Note: Steady Light is the best source, since it is your own code (event channels, dependency injection, save system, editor tools). Leave out purchased packages and art (DOTween, Odin, Cartoon FX, Joystick Pack), because their licenses do not allow redistribution.
- [ ] **PUB-02** Write a short technical post · P2 · M · you · [#25](https://github.com/Divesh567/divesh567.github.io/issues/25)
  - Why: it shows how you reason about performance, not only the result.
  - Done when: a post such as "Finding hidden overdraw with the Frame Debugger", written in general terms with no game-specific detail, is linked from the site. Get Dot9's OK first.
- [ ] **PUB-03** Review your GitHub profile as an employer would · P1 · S · you · [#4](https://github.com/Divesh567/divesh567.github.io/issues/4)
  - Why: reviewers open GitHub early, and pinned repos, the profile README and repo descriptions should show Unity work. This needs a manual pass.
  - Done when: pinned repos, profile README, descriptions and repo visibility are reviewed, and any findings are added here as new tasks.

### Site

- [x] **WEB-00** Add Download CV buttons to the hero and contact sections · P1 · S · claude · done 2026-10-05 (c8a9997)
- [ ] **WEB-01** Add the missing screenshots · P2 · S · you · [#22](https://github.com/Divesh567/divesh567.github.io/issues/22)
  - Why: `steadylight-1.jpg`, `steadylight-2.jpg` and `mahabharat-1.jpg` to `mahabharat-3.jpg` are referenced but not in the repo, so those slots render nothing.
  - Done when: the images are added with the same names, or the references are removed.
- [ ] **WEB-02** Sync the site copy with the revised CV · P1 · M · claude · after batches 3 to 6 · [#23](https://github.com/Divesh567/divesh567.github.io/issues/23)
  - Why: the same facts live in the meta description, stats board, hero tagline, `#about`, skills detail, project bullets and timeline, and they drift easily (see CLAUDE.md).
  - Done when: all of them match the CV and the TL-02 numbers.

## EXP-01 worksheet

Answer in chat or privately; commit only what you are cleared to publish.

The Open questions section below narrows this list using the work summaries received.

**All roles**
- Exact start and end month for every job, what you did in 2021 to 2022, any gap in 2024 to 2025, and the date you were promoted from intern to junior.
- Team size per project and which parts were yours alone.
- Unity versions, source control, build or CI pipeline, and how QA and backend worked with you.

**FAUG**
- 15 to 30 FPS: devices, how you measured, and the top three changes that moved it.
- Retention: not shared; no retention figures for any game.
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

## Work summaries

Plan: collect a git-history summary of the work at each employer first, then answer the open questions, then write batch 3. The summaries are not stored in this repo because it is public and they contain internal details. Keep the originals privately.

| Source | Status |
|---|---|
| FAUG (Dot9 Games), two parts | received 2026-10-06 |
| Chapter 26 (Dot9 Games) | received 2026-10-06 |
| Mahabharat Board Game and Puzzles of Mahabharat (BoredLeaders) | received 2026-10-06 |
| Steady Light (Immersiveorama) | received 2026-10-06 |

Prompt to run in each repo's own Claude session. Add the claims list for that repo.

```
Summarize my work in this repo from git, for a CV. My author name/email is <yours>;
also include any alias or typo'd emails. Read ALL my commits, not a sample, and say
how many you read.

Give me:
1. First and last commit dates, unique commit count, and commits per month.
2. Team size: contributor count from `git shortlog -sn`, and my share of commits.
3. My work grouped as: built (new systems), integrated (third-party SDKs/services),
   fixed/maintained, performance, tooling/docs. For each item say whether it is
   client, backend, UI or tools, which tech it used, and roughly how big it was.
4. Release evidence: tags, version bumps, store-build commits, and any rename history.
5. Evidence check. For each claim below, say "supported", "partly", or "not found",
   and cite commit subjects: <paste the claims for this repo>
6. Caveats: what git cannot tell you, and which wording is your inference.
Show the git commands you ran. Do not include keys, secrets or internal URLs.
```

Claims to check for Mahabharat (BoredLeaders): 3D Ludo-style board game with power-up cards, obstacles, multiple boards, characters, maps and day/night lighting; 50-level data-driven jigsaw that designers extend with no developer work; 400+ level CSV-driven narrative puzzle game; a meta loop connecting the three games; Firebase use; AI-driven NPC behaviors (which game, which technique); "improved performance by 40%" (what was measured); level design; intern work on mechanics, animations and a graphics pass; intern start date and the date the role changed to junior.

Claims to check for Steady Light (Immersiveorama): solo-developed 2D physics platformer; Unity physics and DOTween; component-based architecture; Addressables for level management to reduce memory use; code through animation; number of levels; whether the game was renamed (the Play Store link uses `LightForce`).

## Open questions

Answer these after all four summaries are in. When one is answered, change `(open)` to `(answered DATE)` and move the answer into the Decisions table or the task it feeds.

**FAUG**
- **Q01** (answered 2026-10-07) For each FAUG bullet on the CV, where does the work live? All located. The 15 to 30 FPS optimization is not claimed. You rewrote the multi-reward grant logic and built the reward UI, led and built the battle-streak feature with one junior developer, designed and built the announcement system (the git summary missed it), built the client side of remote config and A/B testing (the team ran the experiments), and built the FBL client. · feeds EXP-02, EXP-08
- **Q02** (answered 2026-10-07) What exactly is the "FBL League", and how does it relate to the ranked league and to the tournament and finals tooling? FBL is the FAU-G Bharat League, a weekly league that led to two offline e-sports season finals. You built the client flow, league transitions and failure-handling UI. The ranked league in the git history is treated as the same system. · feeds EXP-02
- **Q03** (answered 2026-10-07) Which networking pieces did you write? You did not write gameplay sync (movement, shooting). Your Photon work was the connection and matchmaking layer. · feeds MP-01, MP-02
- **Q04** (answered 2026-10-07) Load time: before and after figures from the load-time instrumentation. A measured improvement exists for both the first-time-user flow and every match, but you cannot share the figures, so they are kept off the CV, the site and this tracker. · feeds EXP-02
- **Q05** (answered 2026-10-07) FPS work: devices, how it was measured, and the top three changes. Not claimed. The real work was a rendering overdraw fix found with the Frame Debugger. · feeds EXP-02
- **Q06** (answered 2026-10-07) Retention or engagement: which metric, before and after, and from which change or experiment. You cannot share retention figures for any game, so none will go on the CV, the site or this tracker. · feeds EXP-02
- **Q07** (dropped 2026-10-07) Exact provider names for voice chat and ad mediation, and whether hack detection is custom or an SDK. You cannot share internal details of Dot9's games, so these are not needed. · feeds EXP-02, SK-01
- **Q08** (answered 2026-10-07) Which details are cleared to publish? Nothing internal to Dot9's games: no numbers, mechanics, architecture, tool-to-system mappings or partner names. Features a player can see, and general skills, are fine. · feeds EXP-02, EXP-03

**Chapter 26**
- **Q09** (answered 2026-10-07) Which minigames did you build, and which did you fix or integrate? You built none of them; you fixed bugs in Carrom, Blink, Ludo and football penalty. The git history also showed Baloot exit bugs, which are not on the CV. · feeds EXP-03
- **Q10** (answered 2026-10-07) Tournaments and leaderboards: client only, or any backend work too? Client side only. The CV says "against the backend API", and the site no longer claims a GCP backend or lists GCP as a skill. · feeds EXP-03
- **Q11** (answered 2026-10-08) Team size, and the month the hub shipped. The team was 9 developers, 3 2D artists and 2 3D artists. Released 29 July 2026. The CV and the site card now say "released in Jul 2026 by a team of 9 developers and 5 artists". · feeds EXP-03, TL-01
- **Q12** (dropped 2026-10-07) Confirm the tools named on the CV for Chapter 26. The CV no longer names tools for Dot9's games. · feeds EXP-03, SK-01

**BoredLeaders and Mahabharat** (summary pending)
- **Q13** (answered 2026-10-06) Which game had the AI-driven NPCs, and what technique? The Mahabharat board game bots, using a weighted-RNG dice engine and weighted power selection. · feeds EXP-04
- **Q14** (dropped 2026-10-07) What did the "40% performance" gain measure? Performance numbers are not shared, so the claim is removed from the CV and the site. · feeds EXP-04
- **Q15** (answered 2026-10-06) Mahabharat: levels per game, the designer tooling around the CSV pipeline, and how Firebase is used. 375+ story pages, 126 image puzzles and 50 jigsaws, with CSV readers for content; Firebase Auth, Realtime Database, Analytics and Remote Config. · feeds EXP-04
- **Q16** (answered 2026-10-07) Intern start, junior start, and last month at the company. Intern from February 2023 for about six months, then junior, last month December 2024. Commit dates in the Puzzles of Mahabharat repo run later because the repo was changed once, so they do not show the real timeline. · feeds TL-01

**Immersiveorama and Steady Light** (summary pending)
- **Q17** (open) Steady Light store numbers: installs and rating only. No retention figures for any game. The level count is answered: about 45 across 6 worlds. · feeds EXP-06
- **Q18** (answered 2026-10-08) Was the game renamed? Yes. The original name was LightForce, and the Play Store now shows Steady Light. The Android package id still says `LightForce`, which fits. The CV and the site card say "originally released as LightForce". The rename date was not asked and is not stated. · feeds EXP-06, TL-02
- **Q27** (answered 2026-10-08) Steady Light timeline and genre. Built while learning after the first game, first released October 2022, about six months of active updates, rare updates after that, last update February 2026. The repo history was changed once, so its dates differ from the CV's. Genre: it is a 2D physics platformer, so the CV was corrected from "puzzle game" to "platformer" and now matches the site. · feeds EXP-06, TL-02
- **Q28** (answered 2026-10-07, by default) The site said "400+ level narrative puzzle game" and a "meta loop that connects the three games". The CV and site now use the repo counts (375+ story pages, 126 image puzzles, 50 jigsaws, 10 puzzle types) and no cross-game meta loop is claimed. Say so if the loop is real. · feeds EXP-04, TL-02, WEB-02
- **Q29** (dropped 2026-10-07) Which of the packaged tools in the board game repo did you write? The CV no longer mentions them, and internal details are not shared. · feeds EXP-04, SK-01
- **Q30** (answered 2026-10-08) The draft CV left out the intern graphics pass, the level-design claims and the 40% figure. At BoredLeaders you worked on lighting, particle systems and animations, and did not create art assets; there was no level design work there. The CV has one job-level bullet on lighting, particle systems and animations, and the site timeline mentions it. Level design is not claimed for BoredLeaders. The 40% figure stays out (see Q14). · feeds EXP-04, EXP-08
- **Q31** (answered 2026-10-07) Cinegence VFX job: exact start and end month. Started August 2019, left in March 2020, rejoined for about two months after the lockdown, then left the industry for game development. The CV's 2021 end date was wrong and now reads 2020. · feeds TL-01, EXP-07
- **Q32** (dropped 2026-10-07) Announcement module details. You cannot share internal details of Dot9's games, so no further detail is needed. · feeds EXP-02

**Across roles**
- **Q19** (answered 2026-10-07) Exact start and end month for every job, what you did in 2021 to 2022, and any gap in 2024 to 2025. BoredLeaders (February 2023 to December 2024) and Dot9 (April 2025) are confirmed, leaving a gap of about three months. In 2020 to 2022 you taught yourself Unity after a VFX job ended in the lockdown, published a first game in October 2020 (since removed from the Play Store), then built Steady Light. The VFX job dates are tracked in Q31. · feeds TL-01
- **Q20** (open) Installs bracket and rating for each store listing: FAUG, Chapter 26, the two Mahabharat apps, Steady Light. · feeds MISS-02
- **Q21** (answered 2026-10-08) Team size per project. FAUG: 12 developers, 7 3D artists, 3 2D artists and 4 testers. Chapter 26: 9 developers, 3 2D artists and 2 3D artists. Mahabharat board game: 3 developers, 1 2D artist and 1 3D artist. Puzzles of Mahabharat: you as the only developer, with 1 2D artist. Steady Light: solo. The CV shows these next to each project heading, and the site cards say them in a bullet. On FAUG you led the battle-streak feature with one junior developer and built most of it. · feeds EXP-08
- **Q22** (answered 2026-10-08) Summary headline: live-ops first, with gameplay as supporting evidence. The summary now opens "Unity live-ops and gameplay engineer", and the "bot-vs-bot balancing simulator" phrase is gone. · feeds POS-02
- **Q23** (open) GitHub profile review: pinned repos, profile README, repo descriptions, anything to fix or hide. · feeds PUB-03
- **Q24** (partly answered 2026-10-08: LinkedIn is linkedin.com/in/divesh-dogra-2a689a191, added to the CV and the site). Notice period (30 days) and remote and relocation (yes) answered the same day and added to the CV. Still open: any App Store links, and work authorization for non-India applications. · feeds MISS-01, MISS-02, MISS-03, TL-02
- **Q25** (answered 2026-10-08) Cinegence: you worked first as a clean-up artist, then as a compositor, on feature films including Toofan, 83 (you wrote "World Cup 83") and Baaghi 3, and others you do not remember. TV shows were not confirmed, so they are off the CV and the site. The Nuke line was reworded to "compositing in Nuke"; say so if you used it for anything else. · feeds EXP-07
- **Q26** (answered 2026-10-08) Unity 2022 LTS, Git and Mantis (bug tracker). No CI pipeline or QA and backend process was given, so none is claimed. Steady Light uses Unity 6, which the CV already says. · feeds MISS-04

Already answered: target lane (POS-01), public CV contact details (CV-05), and the netcode stack (Photon PUN, from the FAUG summary). See Decisions.

## Decisions

| Decision | Answer | Date |
|---|---|---|
| Target lane (POS-01) | Unity live-ops and gameplay engineer, live-ops first (VFX angle left out) | 2026-10-08 |
| Netcode work in one line (MP-01) | Photon connection and matchmaking layer on FAUG; no gameplay state sync | 2026-10-07 |
| Public CV: phone, postal code, photo (CV-05) | Photo, phone number and postal code removed; location shows "Mumbai, India". | 2026-10-06 |
| Availability line (MISS-03) | CV header: "Mumbai, India · open to remote and relocation" and "Notice period: 30 days". Site contact section: open to remote work and relocation (no notice period). Work authorization not stated. | 2026-10-08 |

## GitHub tracking

- Parent issue: [#1 CV and portfolio improvement](https://github.com/Divesh567/divesh567.github.io/issues/1). Every open task has a sub-issue under it, labelled `batch:N`, priority (`P1`, `P2`), `owner:you`, `owner:claude` or `owner:both`, and `area:*`.
- The open questions (Q01 to Q32) stay in this file. Each task issue lists the questions it needs.
- Tasks finished before the issues were created (CV-01 to CV-05, EXP-05, POS-01, WEB-00) have no issue.
- Project board: the tooling used for this repo can create issues and labels but not GitHub Projects. To get a board, open the repository's Projects tab, create a new Board project, then use "Add item" to pick the open issues. Filter or group by the `batch:N` labels.
