---
title: "How to write a post on this site"
description: "A quick reference for the frontmatter fields and formatting supported by blog posts here."
pubDate: 2026-07-20
tags: ["Reference"]
---

This post doubles as a template. Every blog entry is a markdown file in
`src/content/blog/` with a small block of frontmatter at the top.

## Frontmatter fields

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Shown as the heading and in the browser tab |
| `description` | yes | One-line summary used on cards and for SEO |
| `pubDate` | yes | `YYYY-MM-DD` |
| `updatedDate` | no | Shows an "updated" note |
| `tags` | no | Array of strings |
| `cover` | no | Path under `/public`, e.g. `/img/portfolio/scroll.jpg` |
| `draft` | no | `true` hides the post from the site |

## Formatting

Standard markdown works — **bold**, *italic*, [links](https://azreenbd.com),
lists, tables, blockquotes and code blocks:

> Keep it simple.

```js
console.log("code blocks are supported too");
```

To hide a work-in-progress post, set `draft: true` in the frontmatter and it
won't be built or listed.
