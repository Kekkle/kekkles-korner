---
title: "Building Kekkle's Kafe: A Remote Coffee Ritual for Far-Away Friends–Part 1"
date: 2026-08-24
---

So this next project I worked on was for me personally. 

I had had a wonderful phone call with a friend who lives a couple of hours away in France, and at the end she said “I wish we could just go for a coffee together spontaneously…” and I replied “Yeah, we need to find a way to have a remote coffee together…” 

And that got me thinking.

### The Idea:

Almost all of my friends and family live abroad. It’s often hard to sync up time zones for a call, so most of my “staying in touch” is done via WhatsApp with voice notes and chats. But I thought, wouldn’t it be fun to have a simple app where I could set up a “Coffee date” with a friend where I could have a remote coffee with my loved ones? It could just be a 3-5 minutes max experience, but it would be a moment where we are both online, both taking a “sip” of digital coffee and feeling like, just for one moment, we’re in the same time and place having coffee together?

The ideas started flooding my brain.

This could be an app with an intro screen where we both choose our coffee order. Then a “tap to sip” coffee experience where we see each other’s cup getting emptier as we tap/sip. We should clink glasses at the end to complete the experience. There should be a way to schedule future coffee dates. There should be a reminder feature that lets you know someone is waiting to have coffee with you.

Then I thought of one of my friends who loves having question cards during times together, as a way to prompt discoveries of each other. What about having an element of that in the coffee date where we pick a card to ask each other? But I didn’t want to create a live chat app–like reinventing WhatsApp–so what if instead the cards are simple “answer with a click” type of quetsion, like “Would you rather” or “yes/no” questions, or “on a scale of one to 10”. No live chatting or typing, just click click click. 

### The Downsizing

I shared this idea with my kids, who added their ideas to this app–ways to customize one's cup, ways to win coffee beans and use them as currency for fancier drinks, etc. I was pretty excited to get started. 

Then I described my idea to my husband, who suggested that before I go full out creating the bells-and-whistles app, to first create the simplest version of the app with the most basic and must-have features. Then, test it, get feedback on it, and see if it’s worth pouring more into it. Brilliant advice, which I took. 

I fed Cursor my full plan and intention. Created a clear agents.md file. Based on this, I asked it to now create a template for what the most basic version of the app would be. In just one sentence, it looked like:

**Two people open the app, share a link, pick a drink each, see what the other ordered, tap to sip, hold to clink, done.**

Essentially: **link → order → reveal → 8 taps → hold to clink → thanks.**

But I really wanted the question cards feature. To me, that was the “connecting” feature of the app. So with that in mind, the adjusted basic version was: 

**Link → pick drinks → reveal → optional question cards (or “Just sip”) → sip → clink → done.**

The goal of this simple version 0 app would be to test the question: *Do people enjoy the coffee ritual together — order, reveal, sip, clink — enough to come back and do it again?* If yes, then I could consider moving forward with further features.

### To App or not to App

Once I was clear on what exactly the demo app should entail, I had to choose whether to create this as an app to be made available on app stores (some $ cost for me) or first as an HTML page (free for me). Cursor provided the details of what both options would entail and essentially stated: *For v0, a website is **totally fine**. You mainly give up the **perfect iPhone buzz** on clink and **App Store polish** — not the core fun.*

Seeing as this was a try-it-and-see app, I opted to have this be hosted on a website at this point in time, with the option to explore the app development in the future should it prove worthwhile.

### The App Name

First things first, I needed the right name for my app. Early names I floated around included things like  **Drip** (simple, straightforward)  or **Dripple** (quirky).

<figure>
  <img src="/kekkles-korner/assets/images/posts/kafe-early-logo-1.png" alt="Early Drip logo idea 1 — coffee bean character" style="width:245px;max-width:100%;height:264px;object-fit:contain;display:block;margin:0 auto;">
  <figcaption>Early logo idea 1 — Drip.</figcaption>
</figure>

<figure>
  <img src="/kekkles-korner/assets/images/posts/kafe-early-logo-2.png" alt="Early Drip logo idea 2 — pouring coffee" style="width:245px;max-width:100%;height:264px;object-fit:contain;display:block;margin:0 auto;">
  <figcaption>Early logo idea 2 — Drip.</figcaption>
</figure>

<figure>
  <img src="/kekkles-korner/assets/images/posts/kafe-early-logo-3.png" alt="Early Drip logo idea 3 — coffee cup top view" style="width:245px;max-width:100%;height:264px;object-fit:contain;display:block;margin:0 auto;">
  <figcaption>Early logo idea 3 — Drip.</figcaption>
</figure>

I created some mock-up logo designs before realising that I should ask Cursor to do a competitor analysis on both the app idea as well as on name ideas before getting too far ahead of myself. After it became clear that many names on my list were already in use, I settled on “KekklesKafe”. Which in the end, I liked better than all the other ideas because it is unique to me. 

AI generated several directions I liked, then I combined and refined them manually into the final wordmark.

<figure>
  <img src="/kekkles-korner/assets/images/posts/kafe-logo-concepts.png" alt="Kekkle's Kafe logo concept directions" style="width:245px;max-width:100%;height:264px;object-fit:contain;display:block;margin:0 auto;">
  <figcaption>Logo concept directions generated during naming.</figcaption>
</figure>

<figure>
  <img src="/kekkles-korner/assets/images/posts/kafe-logo-wordmark.png" alt="Final Kekkle's Kafe wordmark" style="width:245px;max-width:100%;height:264px;object-fit:contain;display:block;margin:0 auto;border:none !important;">
  <figcaption>Final wordmark — Kekkle's Kafe.</figcaption>
</figure>

Stay tuned for part 2–-where I get into how I implemented the creation of the app. 
