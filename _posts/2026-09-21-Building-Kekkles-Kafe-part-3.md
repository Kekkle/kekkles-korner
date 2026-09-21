---
title: "Building Kekkle's Kafe: A Remote Coffee Ritual for Far-Away Friends–Part 3"
date: 2026-09-21
---

## Trying it out, fixing, and testing

So then began the real two-device testing. First, I tried it out with each of my kids. Best compliment was from my 16-year-old, who said “it was more fun than I thought it would be”. :P Next, I texted my mom in South Africa to see if she had time to try it out. And that’s when I began to find the bugs.

### Bugs and how we fixed’em

**1. Last-write-wins broke sync**

We began the ritual and then … it froze right around the “select your coffee” screen. We restarted, tried again, still froze. Apparently, whichever device saved last overwrote the other.

Symptoms:

- Order screen stuck (“still choosing drink”) when both had ordered
- Iced coffee “refilling” on sip — partner’s taps overwritten locally
- Clink not firing when one user tapped

**Fix:** `sessionMerge.ts` — merge per-user fields (`ready`, `orders`, `tapsRemaining`, `clinkSlide`) instead of blind overwrite.

**2. Intro screens stuck or out of sync**

Host frozen on “friend has joined you for coffee” while guest reached the menu. Clink intro stuck forever on “Now we clink the mugs.”

**Fix:** Shared timestamps for intro beats; stable timer dependencies (don’t reset countdown on every session poll); remote **polling** every 2s alongside Realtime for long-distance latency.

**3. Guest invite flow regressions**

- Guest not seeing the name-entry screen after “I'm in!”
- Host name persisting as “kekkle” instead of placeholder text on restart
- Guest landing on **manual join-code screen** instead of invite image

**Fixes:** Proper join-phase state machine; guest fetches session from Supabase (not just localStorage); removed code-entry screen from guest path; invite links always use production URL when developing on localhost.

**4. “Loading invite…” forever**

Turned out **Supabase had paused the project due to inactivity.** No database → no session → spinner never resolves. Also added fetch timeouts so slow networks fail gracefully with “Try again” instead of hanging.

**5. Bye button bounced to welcome screen**

Clearing the session while still on a guarded route triggered a redirect to `/` during the page transition. **Fix:** navigate to logo home first; clear session on mount there.

**6. Hidden dev tools visible to friends**

Preview buttons, solo walkthrough, and `/preview` route were showing on the live app. **Fix:** `Ctrl+Shift+K` unlock for developer-only tools.

### Testing checklist (what we actually run)

- Host copies link → guest on **different network** opens it
- Guest sees invite image → I'm in! → username → order welcome
- Both reach menu within ~1–2 seconds
- Both order → reveal → cards (or skip) → sip → clink intro → clink → thanks
- Bye → logo home stays put until tap
- Friend decline (“Maybe later”) notifies host

**What worked:** Testing with someone in another country (exposed Realtime + polling gaps). Documenting everything in `web/MULTIUSER.md` so future-me (and AI assistants) don’t re-learn the same lessons.

**What didn’t:** Assuming household Wi‑Fi testing equals production. Assuming Realtime alone is enough. Forgetting Supabase free tier pauses when you leave it idle.

After fixing these bugs, I then tested it out with a few more friends–one in France, one in Canada, one in Germany.  Overall everything worked well at this point, but each session led to the realisation of some small tweak that I wanted to make–either in the application itself, or in how I introduce this app to someone. For example, one friend whom I invited to use the chat (and whom I had texted explaining the ritual/experience), commented after the ritual came to a close: “It would be more fun if I was doing this with another human.” Apparently, she hadn’t realized that I was the other user she was interacting with and she thought it was just a bot. That showed me that my initial explanation of the app hadn’t been clear–something to watch for when pitching the app to others.

### Where the project is now (and what’s next)

As of July, **Kekkle's Kafe** is a live, deployable web app:

- **URL:** [kekkles-kafe.vercel.app](https://kekkles-kafe.vercel.app)
- **Repo:** React app in `web/`, docs at project root
- **Backend:** Supabase (sessions table + Realtime + migrations 001–004)
- **Cost so far:** $0 hosting tier (Vercel + Supabase free)

You can complete a full ritual with a friend anywhere in the world: invite → drinks → optional question cards → sip → clink → goodbye.

<figure class="figure-screen">
  <img src="/kekkles-korner/assets/images/posts/kafe-welcome-phone.png" alt="Kekkle's Kafe welcome screen on a phone">
  <figcaption>Welcome screen — choose a username and come on in.</figcaption>
</figure>

Kekkle's Kafe is open for business! Check it and invite a friend for a remote coffee app ritual if you have a chance! ☕
