// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import 'dotenv/config';

import { themes as prismThemes } from "prism-react-renderer";
import quickLinksData from "./config/quicklink/index.json"

/** @type {import('@docusaurus/types').Config} */
const config = {
  title:
    "BetMGM Creatives Manila CMS Team Hub",
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

  customFields: {
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME
  },

  scripts: [{
    src: './node_modules/flowbite/dist/flowbite.min.js',
    async: true
  }],

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
        /* blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 10,
        }, */
        blog: false,
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
        title: "CMS Hub",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            position: 'left',
            type: "docSidebar",
            sidebarId: "casinoSidebar",
            label: 'Casino',
          },
          {
            position: 'left',
            type: "docSidebar",
            sidebarId: "pokerSidebar",
            label: 'Poker',
          },
          {
            position: 'left',
            type: "docSidebar",
            sidebarId: "sportsSidebar",
            label: 'Sports',
          },
          {
            position: 'left',
            type: "docSidebar",
            sidebarId: "guidesSidebar",
            label: 'Guides',
          },
          /* {
            position: 'left',
            type: "docSidebar",
            sidebarId: "buildsSidebar",
            label: 'Checklists',
          }, */
          /* {
            type: "dropdown",
            label: "Documentation",
            position: "left",
            items: [
              {
                type: "docSidebar",
                sidebarId: "buildsSidebar",
                label: "Builds",
              },
              {
                type: "docSidebar",
                sidebarId: "siteCheckingSidebar",
                label: "Site Checking 🚧",
              },
              {
                type: "docSidebar",
                sidebarId: "testingAndSchedulingSidebar",
                label: "Testing And Scheduling 🚧",
              },
            ]
          }, */
          { to: "/quick-links", label: "Quick Links", position: "left" },
          /* { 
            type: "dropdown", 
            label: "Quick Links", 
            position: "left",
            items: quickLinksData.quickLinksGroup.map(quickLinks => ({
              to: `/quick-links?group=${quickLinks.label.toLowerCase().replaceAll(' ', '-')}`,
              label: quickLinks.label
            }))
          }, */
          // { to: "/team", label: "Team 🚧", position: "left" },
          { to: "/updates", label: "Updates 📢", position: "left" },
          /* {
            position: 'left',
            type: "docSidebar",
            sidebarId: "buildsSidebar",
            label: 'Announcements 📢',
          }, */
          {
            href: 'https://coralracing-my.sharepoint.com/:x:/r/personal/emma_bulos_entaingroup_com/_layouts/15/Doc.aspx?sourcedoc=%7B287DEB61-B6DE-43C4-A5BC-620460666F3D%7D&file=Test%20Account%20Usernames.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1',
            position: 'left',
            label: 'Test Accounts',
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} CMS Knowledge Hub. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    require.resolve('docusaurus-lunr-search'),
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
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      // '@docusaurus/plugin-content-blog',
      './plugins/blog-plugin',
      {
        id: 'updates',
        routeBasePath: 'updates',
        path: './updates',
        blogSidebarCount: 10,
        blogSidebarTitle: 'Recent Updates',
      },
    ],
  ],
};

export default config;
