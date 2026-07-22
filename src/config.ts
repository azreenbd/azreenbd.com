/*
  Central site config — edit this one file to update your identity,
  navigation, skills and social links across the whole site.
*/

export const SITE = {
  name: "Naszrul Azreen Badarudin",
  shortName: "azreenbd",
  title: "Full Stack Web Developer",
  description: "Full Stack Web Developer with 4+ years of experience building web applications.",
  url: "https://azreenbd.com",
  email: "azreen.bd@gmail.com",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export const SKILLS = [
  "Vue.js",
  "Laravel",
  "Express.js",
  "Hono",
  "MySQL",
  "SQLite",
  "MongoDB",
  "Node.js",
  "Nginx",
  "DevOps",
  "AWS",
  "Cloudflare",
];

// `icon` maps to a react-icons key handled in SocialLinks.tsx
export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/azreenbd", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/azreenbd", icon: "linkedin" },
  { label: "E-mail", href: "mailto:azreen.bd@gmail.com", icon: "email" },
] as const;
