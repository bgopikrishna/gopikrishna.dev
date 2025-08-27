---
draft: false
date: 2025-08-27T10:30:00+05:30
title: How I Use AI in My Day-to-Day Work
tags:
    - AI
    - Cursor
    - GPT
description: I’ve been using AI tools daily in my workflow, and over time I figured out a pattern that works for me. It’s not about letting AI do everything, but about using it to save time and stay focused on the important parts.

---

I’ve been using AI tools daily in my workflow, and over time I figured out a pattern that works for me. It’s not about letting AI do everything, but about using it to save time and stay focused on the important parts.

### General Research with ChatGPT

For research, I mostly use ChatGPT. Things like:

* Finding the right docs or examples
* Summarizing long documentation
* Comparing different approaches before picking one

It saves me from digging through multiple tabs and StackOverflow threads.

### Implementing Changes with Cursor

When it comes to building features or making any major changes, I rely on Cursor. My flow usually looks like this:

1. **Understand the codebase** – If I’m new to a flow, I first use Cursor’s research mode to go through the code and figure out what’s happening.
2. **Write it down** – I’ll create some notes, update docs, and usually make flow diagrams so I (and others) understand what’s going on.
3. **Technical Decision Doc** – Before coding, I prepare a short doc about what I’m going to build, options considered, and why I picked one approach.
4. **Review with peers** – Share the doc, get feedback, tweak it.
5. **Agent mode** – Once the doc is final, I use Cursor’s agent mode to start implementing. But this part needs hand holding, you can’t just let AI write the whole thing. I keep checking, correcting, and adjusting the code. AI helps, but you still need to get your hands dirty. 

### PR Review with CodeRabbit

After raising a PR, I usually run an **L1 review with CodeRabbit**. Since it has Jira context, it actually knows what feature I was working on, which makes the feedback more relevant. After that, it goes to peers for final review.

### Lessons Learned so far

* AI speeds things up, but only if you drive the process.
* You can’t trust AI blindly, it *will* hallucinate sometimes.
* Writing down technical decisions upfront makes everything smoother.
* AI + peer reviews together work better than just one of them.
* At the end of the day, you’re still responsible for correctness and code quality.

---

This is the way I use AI day to day. It’s not “AI building stuff for me”, it’s more like having an assistant who helps me think faster, write docs quicker, and code with fewer blockers.

> 💡 Even this blog post started as rough notes, and I used AI to make it more readable while keeping my original thoughts intact.


