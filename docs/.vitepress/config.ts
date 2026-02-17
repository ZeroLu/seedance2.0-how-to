import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Seedance 2.0 How To",
  description: "Community-written guide for accessing and using Seedance 2.0.",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    outline: {
      level: [2, 3],
      label: "On this page",
    },
  },
});
