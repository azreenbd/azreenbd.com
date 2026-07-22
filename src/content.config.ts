import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/*
  Content lives as markdown files in src/content/.
  Add a project  -> src/content/projects/<slug>.md
  Add a blog post -> src/content/blog/<slug>.md
  The frontmatter fields below are what each file supports.
*/

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // tech stack / keywords shown as tags
    tags: z.array(z.string()).default([]),
    // external live demo or repo (optional) — shown as a button
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
    // thumbnail path relative to /public (e.g. /img/portfolio/scroll.jpg)
    cover: z.string().optional(),
    year: z.number().optional(),
    // controls ordering (higher = shown first) and homepage highlight
    order: z.number().default(0),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
