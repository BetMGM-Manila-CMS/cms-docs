// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title:
    "Welcome to the Official Documentation of BetMGM Creatives Manila CMS Team",
  tagline: "What do you want to learn today",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: [
            "./src/css/tailwind/main.css",
            "./src/css/tailwind/preflight.css",
            "./src/css/custom.css",
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "CMS Knowledge Hub",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "buildsSidebar",
            position: "left",
            label: "Builds",
          },
          {
            type: "docSidebar",
            sidebarId: "ticketsSidebar",
            position: "left",
            label: "Tickets",
          },
          /* {
            type: "docSidebar",
            sidebarId: "teamSidebar",
            position: "left",
            label: "Team",
          },
           */
          { to: "/team", label: "Team", position: "left" }, // temporary
          {
            type: "docSidebar",
            sidebarId: "toolsSidebar",
            position: "left",
            label: "Tools",
          },
          // { to: "/blog", label: "Tools", position: "left" }, // temporary
          // { to: "/blog", label: "Blog", position: "left" },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Builds",
                to: "/docs/builds/assets-introduction",
              },
              {
                label: "Tickets",
                to: "/docs/tickets/monday",
              },
              {
                label: "Team",
                to: "/",
              },
              {
                label: "Tools",
                to: "/docs/tools/htmlTidy",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Teams",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Skype",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Facebook",
                href: "https://web.facebook.com/BetMGMcreativesPH",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@betmgmcreativesmanila256",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "BetMGM",
                href: "https://www.betmgminc.com/who-we-are",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CMS Knowledge Hub. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
