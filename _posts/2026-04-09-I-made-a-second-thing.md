---
title: "I made a second thing"
date: 2026-04-09
---


## Building "Eating for Energy": A Gamified Nutrition Quiz with AI-Assisted Development

Earlier this year, I had worked with Andrea Langan (RNutr, MSc, BSc)--founder of Health Embrace--to update and redesign one of her nutrition webinars for youth sports teams. I thought it would be an excellent project to use in the development of my ed-tech skills. My goal was simply to take the webinar content--which focused on blood sugar regulation using 8 practical eating tips--and turn it into a fun, mobile-friendly quiz app that kids could try out in order to help them retain all the information they had learned. No logins, no backend, no app store, just a link they could tap and start playing.

## Step 1: Planning Before Code

Before writing a single line of code, I created two foundational documents:

- **`PROJECT_PLAN.md`** -- the product spec: user flow, activity types, gamification rules, tech stack decisions
- **`AGENTS.md`** -- an AI guidelines file with strict rules around body positivity, ethnic diversity, inclusive language, and visual style

The `AGENTS.md` file meant that every time I worked with Cursor AI, it automatically understood the project's values: no labelling foods as "good" or "bad", no diet/weight framing, and encouraging feedback for wrong answers ("Not quite -- here's a hint!" instead of "Wrong!").

## Step 2: Content Extraction

The raw material was a set of webinar slide images and a teacher's booklet (`.docx`). I needed to:

1. Extract all text from the slides into structured markdown (`CONTENT_EXTRACTION.md`)
2. Identify the 8 energy tips, key nutritional facts, and processes (like blood sugar regulation)
3. Pull questions from the teacher's booklet into review documents
4. Organise everything into two tracks: **Quiz** (knowledge questions) and **Games** (interactive activities)

This went through several iterations -- `QUESTIONS_REVIEW.md`, `BOOKLET_QUESTIONS_REVIEW.md`, and finally `QUESTIONS_ORGANISED.md` -- as I refined what content worked best as quiz questions versus interactive games.

The next steps are rather tedious, so I'll just list them here:

- **Step 3: Scaffolding the App** -- Let's be honest. I have no idea what this is or means but my agent did it through several magical steps.
- **Step 4: Building 10 Activity Types** -- Each activity type got its own component such as drag-and-drop, multiple choice, select all that apply etc.
- **Step 5: Gamification Layer** -- How the points are scaled by difficulty, stars awarded etc. 
- **Step 6: Deployment to GitHub Pages** -- The final step was getting the app live, fixing last minute glitches.
  
## What We Built: By the Numbers

- **27 total activities** (18 quiz questions + 9 interactive games)
- **10 activity types** implemented as React components
- **47 extracted food images** from webinar slides
- **4 app screens** (Landing, Topic Select, Game Engine, Results)
- **5 UI components** (ProgressBar, ScoreDisplay, StreakCounter, StarRating, Feedback)
- **0 backend services** -- entirely static, deployable anywhere
- **2 game modes** -- Quiz (knowledge check) and Games (interactive activities)

## Key Takeaways
*(So my agent wrote up these key takeaways, which make it sound like I really grasped all these things at the time. It is only when reading this list that I myself have learned these things and now know to remember them for next time. :P)*

1. **Plan documents are your best AI prompt.** `AGENTS.md` and `PROJECT_PLAN.md` turned every AI session into a productive one because the context was already there.

2. **Content extraction is real work.** Don't underestimate the time needed to turn raw educational material into structured, quiz-ready data.

3. **Mobile-first means touch-first.** Every interaction decision (44px tap targets, no hover states, emoji grids) had to account for small screens and clumsy fingers.

4. **State management decisions echo everywhere.** Getting `GameContext` right early made every feature addition smoother. Getting it wrong (like the OrderIt board state) caused cascading bugs.

5. **Ship early, fix on prod.** The GitHub Pages deployment revealed issues (paths, base URLs) that localhost never would. Better to find them live than to polish forever locally.

6. **AI-assisted development is iterative, not magic.** Cursor didn't write the app autonomously. It was more like a very fast junior developer--great at executing specific tasks, but needing clear direction and occasional course corrections.

## Check It Out

Without further ado, here is the link to my latest creation: `https://kekkle.github.io/eating-for-energy/`. 


## What's Next?

During my 3rd year of Uni, I had done my work placement with Health Embrace and had helped to digitize a webinar for schools on the topic of hydration. So that'll be my next canvas for creating the next interactive quiz. Stay tuned! Or not. :)
