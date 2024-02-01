/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  /* buildsSidebar: [{ type: "autogenerated", dirName: "." }],
  ticketsSidebar: [{ type: "autogenerated", dirName: "." }], */
  // But you can create a sidebar manually

  buildsSidebar: [
    {
      type: "html",
      value:
        "<div class='divider'><span class='divider__inner'>Prerequisites</div>",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "Assets",
      items: ["builds/assets-request", "builds/assets-uploading"],
      link: { type: "doc", id: "builds/assets-introduction" },
    },
    {
      type: "doc",
      id: "builds/documents",
    },
    {
      type: "html",
      value:
        "<div class='divider'><span class='divider__inner'>Product Categories</div>",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "Casino",
      items: [
        "builds/casino-carousel",
        "builds/casino-odr-banner",
        "builds/casino-mpp",
        "builds/casino-video-banners",
        "builds/casino-stories"
      ],
      link: {
        type: "generated-index",
      },
    },
    {
      type: "category",
      label: "Poker",
      items: [
        "builds/poker-carousel",
        "builds/poker-tournaments-page",
        "builds/poker-client-overlay",
        "builds/poker-banners",
      ],
      link: {
        type: "generated-index",
      },
    },
    {
      type: "category",
      label: "Sports",
      items: ["builds/sports-core"],
      link: {
        type: "generated-index",
      },
    },
    {
      type: "html",
      value:
        "<div class='divider'><span class='divider__inner'>Common Components</div>",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "Layout",
      items: [],
      link: {
        type: "generated-index",
      },
    },
    {
      type: "doc",
      id: "builds/restId",
    },
    {
      type: "doc",
      id: "builds/static-tile",
    },
    {
      type: "doc",
      id: "builds/landing-page",
    },
    {
      type: "category",
      label: "PAT and EDS",
      items: [
        "builds/pat-eds-stw",
        "builds/pat-eds-pab",
        "builds/pat-eds-coin",
        "builds/pat-eds-cc",
      ],
      link: {
        type: "doc",
        id: "builds/pat-eds",
      },
    },
    {
      type: "category",
      label: "Engagements",
      link: {
        type: "generated-index",
      },
      items: [
        "builds/engagements-stw",
        "builds/engagements-pab",
        "builds/engagements-coin",
      ],
    },

    {
      type: "html",
      value: "<div class='divider'><span class='divider__inner'>Guides</div>",
      defaultStyle: true,
    },
    {
      type: "doc",
      id: "builds/cta",
    },
    {
      type: "doc",
      id: "builds/colors",
    },
    {
      type: "doc",
      id: "builds/tables",
    },
    {
      type: "doc",
      id: "builds/smartlinks",
    },
  ],
  ticketsSidebar: [
    "tickets/monday",
    "tickets/workfront",
    {
      type: "category",
      label: "Ticket Details",
      items: ["tickets/details-brand", "tickets/details-state"],
      link: {
        type: "generated-index",
      },
    },
  ],
  toolsSidebar: ["tools/htmlTidy", "tools/textCompare", "tools/restIdQaTool"],
  /* teamSidebar: [],
  toolsSidebar: [], */
};

export default sidebars;
