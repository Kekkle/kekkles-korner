---
title: "Building Kekkle's Kafe: A Remote Coffee Ritual for Far-Away Friends–Part 2"
date: 2026-09-14
---

## The Creating

Once I had the app name and logo settled, I looked through various "Cafe" designs to identify my colour and font style preferences. Next I sketched out, on a paper, each app slide/screen before having Cursor create anything. I wanted to be very clear on my vision.

After that, I used Canva to design the loading screens, welcome flows, invite cards, and question-card layouts. I built static HTML mockups in folders like `mockups/home/` and `mockups/question-cards/`—no JavaScript, just layout, colour, and typography. Those mockups were uploaded to Cursor with clear instructions: *this is what it should look like; now implement it.* …Which didn't always mean Cursor got it right. It still took further clarifications, redesigning and reuploading of images before each slide looked as I envisioned it.

### Colour, type, and cozy-minimal tone

Product decisions locked in early:

- **Hot pink** (`#FF3D8A`) as the accent—because it's a Kekkle creation; pink had to show up somewhere
- **Warm creams and browns** for the café feel—borrowed from a "Tone Style Color" reference folder
- **Tone:** playful, sometimes comical, but **cozy and minimal**—not loud, not corporate

### Mascot, logo, and the potato bean

I had a very clear picture in my head of the coffee bean character I wanted to use. Being a bit of an artist, I did a few rough sketches of the bean in various scenarios, then fed those sketches to Claude to make it into a finalized (inked, coloured) sketch. Boy, did that go poorly. Regardless of the text I typed or the image I uploaded, the exact same generic AI bean was churned out–by both Claude and Chatgpt. So I canceled that approach.

<div class="figure-row">
  <figure>
    <img src="/kekkles-korner/assets/images/posts/kafe-generic-mascot-1.png" alt="Generic AI-generated coffee bean mascot">
    <figcaption>One of the generic AI bean mascots — not quite what I had in mind.</figcaption>
  </figure>
  <figure>
    <img src="/kekkles-korner/assets/images/posts/kafe-generic-mascot-2-v2.png" alt="Another generic AI-generated coffee bean mascot">
    <figcaption>Another AI attempt — same energy, still not it.</figcaption>
  </figure>
</div>

**What worked:** Canva. I found cartoon assets with the right energy (it was actually a potato), then edited them by hand, removing notches, changing colours, repositioning eyes and mouths, adding hands where I needed them, etc. Until the little beanie looked closer to my own sketches.

<figure>
  <img src="/kekkles-korner/assets/images/posts/kafe-redesigned-beans.png" alt="Redesigned Canva coffee bean characters">
  <figcaption>Redesigned Canva beans — different poses and expressions for different moments.</figcaption>
</figure>

Question cards got their own mockup set ("Idea 1 — unified card") with different mascots per card type: waving bean for yes/no cards, grinning bean for would-you-rather, mug-holding bean for pick-favorite, and so on.

<div class="figure-row">
  <figure>
    <img src="/kekkles-korner/assets/images/posts/kafe-card-mockup-1.png" alt="Question card design mockup — would you rather">
    <figcaption>Card design mockup — would-you-rather style.</figcaption>
  </figure>
  <figure>
    <img src="/kekkles-korner/assets/images/posts/kafe-card-mockup-2.png" alt="Question card design mockup — pick favorite">
    <figcaption>Card design mockup — pick-your-favorite style.</figcaption>
  </figure>
</div>

### Invite screens and emotional beats

Beyond the menu and clink, I cared about **how it feels to receive an invite**. Mockups explored "I miss you" vs "Meet up?" invite styles (illustrated cards with music notes, pink accents, and the bean-in-a-cup mascot). The host picks an invite style; the guest sees that image before they even order.

<div class="figure-row figure-row--invite">
  <figure>
    <img src="/kekkles-korner/assets/images/posts/kafe-invite-meetup.png" alt="Meet up invite screen mockup">
    <figcaption>"Meet up?" invite style — your friend sees this before they order.</figcaption>
  </figure>
  <figure>
    <img src="/kekkles-korner/assets/images/posts/kafe-invite-miss-you.png" alt="I miss you invite screen mockup">
    <figcaption>"I miss you" invite style — a warmer, more emotional beat.</figcaption>
  </figure>
</div>

### Pulling it all together

As the app came together, I would test it out between my computer and my phone to see how the experience played out. Some things worked well right away, like sending the invite, choosing ones coffee, selecting a card. But going through the whole ritual several times showed me where some improvements could be made.

- A "waiting" screen for the inviter to see while they wait for their friend to join.
- A "loading screen" after coffee selection to give the feel of coffee being brewed.
- A slide in and out affect for the question cards.
- Adjustments to the "scale of one to ten" cards to improve user experience.
- The visual of the coffee cups being emptied as they are sipped (which then required manual edits in canva of each coffee cup to reduce the drink from full to 0.5 to 0.3 to empty)

<figure>
  <img src="/kekkles-korner/assets/images/posts/kafe-drained-cups-v3.png" alt="Manually drained coffee cup levels created in Canva">
  <figcaption>Manually drained coffee cups in Canva — full, half, low, and empty.</figcaption>
</figure>

All of these took time and tedious back-and-forth with Cursor. But finally, the app worked and was ready to be tested with real friends!

<figure class="figure-screen">
  <img src="/kekkles-korner/assets/images/posts/kafe-ready-to-test-v2.png" alt="Kekkle's Kafe app ready to test on mobile">
  <figcaption>Ready to be tested — the live app on mobile.</figcaption>
</figure>
