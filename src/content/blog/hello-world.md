---
title: "Hello, World — the new site"
description: "Why I rebuilt my portfolio with Astro, Radix UI and Tailwind, and how the new setup works."
pubDate: 2026-07-22
tags: ["Meta", "Astro"]
---

I finally rebuilt this site. The old version was a single hand-written HTML page
driven by Vue from a CDN — fine for a while, but adding anything new meant
editing a big blob of markup. This rewrite fixes that.

## What changed

The site is now built with [Astro](https://astro.build), which ships zero
JavaScript by default and only hydrates the interactive pieces (the theme
toggle and the mobile menu) as small React islands using
[Radix UI](https://www.radix-ui.com/) primitives. Everything is styled with
Tailwind CSS.

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
