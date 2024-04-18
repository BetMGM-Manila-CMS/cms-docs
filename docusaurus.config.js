// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title:
    "The Official Website of BetMGM Creatives Manila CMS Team",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "http://localhost:3000",
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
          showLastUpdateAuthor: false,
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
  // themes: ['@docusaurus/theme-search-algolia'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "BetMGM CMS Manila Hub",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "dropdown",
            label: "Documentation",
            position: "left",
            items: [
              {
                type: "docSidebar",
                sidebarId: "buildsSidebar",
                label: "Builds",
              },
            ]
          },
          /* {
            type: "docSidebar",
            sidebarId: "ticketsSidebar",
            position: "left",
            label: "Tickets",
          }, */
          { to: "/team", label: "Team", position: "left" }, // temporary
          /* {
            type: "docSidebar",
            sidebarId: "toolsSidebar",
            position: "left",
            label: "Tools",
          }, */
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        /* links: [
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
        ], */
        copyright: `Copyright © ${new Date().getFullYear()} CMS Knowledge Hub. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'PTF14DVY99',

        // Public API key: it is safe to commit it
        apiKey: 'ee0bb4a8dbe35d8e5c1b660dd7467434',

        indexName: 'betmgm-cms-vercel',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com', 

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        /* replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        }, */

        // Optional: Algolia search parameters
        // searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: 'search',

        //... other Algolia params
      }
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
