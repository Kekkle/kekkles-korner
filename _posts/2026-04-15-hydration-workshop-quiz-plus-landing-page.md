---
title: "Hydration Workshop Quiz + Landing Page"
date: 2026-04-15
---

## Where We Left Off

The "Eating for Energy" quiz was live, deployed, and working, now time to work on the Hydration webinar. This webinar was also intended for school age children by the same educator, and my goal was to turn a one-off session into something kids could revisit. The natural question was: do we build a second standalone app, or extend the first one?

The hydration content had a completely different visual identity -- a purple-to-magenta gradient with cyan accents, "Luckiest Guy" headings instead of "Baloo 2", and a cooler, more vibrant feel compared to the warm orange-and-green of Eating for Energy. Forcing it into the same app would have meant either a bland shared theme or a tangled mess of conditional styling.

So hydration-quiz became its own Vite + React project inside the same workspace, sharing the same component architecture and activity type patterns but with its own styles, fonts, and content. This kept each quiz self-contained and independently deployable.

The trade-off was duplication -- many components were copy-adapted rather than shared from a common library. 

## Content Extraction: Slides to Structured Data

The raw material was a Hydration PowerPoint (exported as PDF and slide PNGs) plus a student summary handout. The extraction process followed the same workflow as Eating for Energy:

1. Pull all visible text from each slide
2. Identify the five content topics (what is hydration, how much we need, hydrating foods, sugar in drinks, practical tips)
3. Draft quiz questions and game concepts
4. Structure everything into `questions.js` as two tracks: **Quiz** (14 knowledge questions) and **Games** (6 interactive activities)

## Building the Activities

Most activity components were adapted from Eating for Energy, which made scaffolding fast. The hydration quiz shipped with:

| Activity Type | Count | Example |
|---------------|-------|---------|
| Multiple Choice | 6 | "What is hydration?" |
| True or False | 4 | "A banana has more water than a cucumber" |
| Fill in the Blank | 3 | "Many fluids are hydrating, but some have more __ than others" |
| Multi Select | 1 | "Select the 4 good reasons to hydrate" |
| Drag Sort | 1 | Sugar Sorter -- estimate teaspoons of sugar in drinks |
| Matching Pairs | 1 | Match reasons to hydrate with their explanations |
| Create Drink | 1 | Build a flavoured water (drag ingredients into a glass) |
| Emoji Select | 2 | Hydrating foods grid + urine colour check |
| Water Fill | 1 | Guess the percentage of water in bodies |


**20 total activities** across 9 activity types, with one new activity ("Water Fill") requiring a bit more iteration to look acceptable. 

## The Landing Page Evolution

This is where the project scope quietly expanded. With two quizzes now built, we needed a front door -- a shared landing page that let users choose between "Eating for Energy" and "Hydration Matters". This was a relatively easy process, with some misunderstandings between me and my agent on the title position. But in the end, it got done and done well, if I may say so myself. 

![Landing page for Nutrition Quizzes & Games](/assets/images/posts/landing-page.png)


## What Went Well

**The component architecture held up.** The biggest validation of the first project's design was how smoothly it transferred to the second. Activity components, the GameEngine, GameContext, UI elements -- the patterns were solid enough to copy-adapt without major rework.

**Having AGENTS.md already written.** The inclusivity rules, visual style conventions, and activity type specs from the first project carried straight over. Every AI session started with the right context because the guidelines were already in place.

**The visual identity.** The purple gradient with cyan accents and the "Luckiest Guy" font gave the hydration quiz a distinct, playful personality. It feels like a sibling to Eating for Energy rather than a clone.

**Speed of development.** I anticipated this project to take at least one week, but within two days, it was pretty much ready to be shipped. 


## What Didn't Go Well

**The Sugar Sorter game.** My initial idea was something more along the lines of dragging and dropping teaspoons of sugar to each drink to guess the amount. But that proved tricky to adequately explain, so I just went with the agent's interpretation of sorting the drinks into two boxes. Maybe next time I'll give a little more thought to how to make sure the game idea is closer to what I envision. 

**The Water Fill component.** Again, I had a different idea in mind for this activity. I wanted the figures themselves to fill up with water, but the agent created a graph bar instead, which I think was simpler yet still got the point across. Sometimes "done is better than perfect." :)

**Content accuracy.** Some of the sugar content in drinks data or hydration facts needed double-checking against the original webinar material or updated nutritional data. Additionally, the webinar itself referred to popular soda drinks by name, which for copyright reasons I needed to avoid using in these quizzes. 


## Lessons Learned (or lessons my agent wants me to learn)
*(The agent wrote these out, which I'm using as its instructions for me to grasp for next time.)*

1. **A second project reveals your architecture's strengths and weaknesses.** If adapting components to a new theme is easy, your abstractions are good. If it's painful, you know what to refactor. [EDIT: Ah, that's a good rule of thumb!]

2. **Separate apps vs shared codebase is a real tension.** Independence is clean while duplication is costly. [EDIT: Hmm, from this I learned that if I were to do it again, I would have shared the codebase from the start.]

3. **A landing page changes the project's identity.** What started as a single quiz became "Health Embrace" -- a platform for multiple nutrition topics. [EDIT: That shift happened organically but could have been planned from the start, had I thoroughly planned this out from the get go! But this is a trial by error process...].

4. **Content extraction gets faster with practice.**

5. **AI-assisted development compounds over time.** The AGENTS.md and PROJECT_PLAN.md files written for the first project became even more valuable for the second, because the AI already had a template to follow.


## The Links

Here is the final Hydration game: [Hydration Quiz](https://kekkle.github.io/eating-for-energy/hydration-quiz/)

Here is the landing page: [Nutrition Quizzes & Games](https://kekkle.github.io/eating-for-energy)

*(All projects are also stored under "Projects" for easy reference.)*


## What's Next

We'll just have to see, won't we?!
