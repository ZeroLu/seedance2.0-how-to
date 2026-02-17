import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Seedance 2.0 How To",
  description: "Community-written guide for accessing and using Seedance 2.0.",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Home", link: "/" },
          { text: "How to Access", link: "/" },
          { text: "How to Prompt", link: "/how-to-prompt" },
        ],
      },
    ],
    outline: {
      level: [2, 3],
      label: "On this page",
    },
  },
});
