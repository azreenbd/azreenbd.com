// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Custom domain (public/CNAME -> azreenbd.com). No `base` needed for a user site.
  site: "https://azreenbd.com",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
