---
title: "Hello, World"
description: "Thus the new website was born. This time with Astro, Radix UI and Tailwind."
pubDate: 2026-07-22
tags: ["Astro"]
---

I finally revamp my portfolio website! The old version was raw, single page HTML driven by Vue from a CDN, fine for what it is, but adding anything new was a chore.

But honestly, I just wanted to try [Astro](https://astro.build).

## What changed

The site is now built with [Astro](https://astro.build), which ships zero JavaScript by default and only hydrates the interactive pieces as small React islands using [Radix UI](https://www.radix-ui.com/) primitives. Everything is styled with Tailwind CSS.

## How I add content now

Projects and posts are just markdown files:

- A new project → drop a file in `src/content/projects/`
- A new post → drop a file in `src/content/blog/`

Each one gets its own page automatically. That's the whole workflow.

```md
---
title: "My new post"
description: "A short summary."
pubDate: 2026-07-22
tags: ["Notes"]
---

Write your post here.
```

That's it. More soon.
