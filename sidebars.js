/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const sidebarData = require("./config/sidebar/index.json");

function toCamelCase(inputString) {
  return inputString
    .toLowerCase()
    .replace(/\s(.)/g, (_, char) => char.toUpperCase());
}

const getDocId = (doc) => {
  return doc
    .replace(/\.mdx?$/, "")
    .split("/")
    .slice(1)
    .join("/");
};

const getItem = (item) => {
  const type = item["_template"];

  let itemProps = {
    type: type,
  };

  if (type === "doc") {
    if (!item.document) {
      return [];
    }

    itemProps.id = getDocId(item.document);

    if (item.label) {
      itemProps.label = item.label;
    }
  }

  if (type === "category") {
    if (item.title) {
      itemProps.label = item.title;
    }

    if (item.link && item.link !== "none") {
      if (item.link === "doc" && item.docLink) {
        itemProps.link = {
          type: "doc",
          id: getDocId(item.docLink),
        };
      } else if (item.link === "generated") {
        itemProps.link = {
          type: "generated-index",
        };
      } else {
        return [];
      }
    }

    itemProps.items = item.items.flatMap((item) => {
      return getItem(item);
    });
  }

  if (type === "link") {
    if (item.href && item.title) {
      itemProps.label = item.title;
      itemProps.href = item.href;
    } else {
      return [];
    }
  }

  if (type === "divider") {
    itemProps.type = 'html'
    itemProps.value = `<div class='divider'><span class='divider__inner'>${item.title}</div>`
    itemProps.defaultStyle = true
  }

  return [itemProps];
};

const mapPageSidebars = (sidebarData) => {
  const sidebars = sidebarData.items.map(pageSidebar => {
    const name = `${toCamelCase(pageSidebar.label)}Sidebar`
    return {
      [name]: pageSidebar.items.flatMap((item) => {
        return getItem(item);
      })
    }
  }).reduce((result, item) => {
    const key = Object.keys(item)[0];
    result[key] = item[key];
    return result;
  }, {});

  return sidebars
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
/* const sidebars = {

  buildsSidebar: [
    {
      type: "html",
      value:
        "<div className='divider'><span className='divider__inner'>Prerequisites</div>",
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
        "<div className='divider'><span className='divider__inner'>Product Categories</div>",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "Casino",
      items: [
        "builds/casino-carousel",
        "builds/casino-odr-banner",
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
      items: ["builds/sports-core", "builds/mai",  "builds/sports-horse-racing", "builds/sports-mission-page"],
      link: {
        type: "generated-index",
      },
    },
    {
      type: "html",
      value:
        "<div className='divider'><span className='divider__inner'>Common Components</div>",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "MPP",
      link: {
        type: "doc",
        id: "builds/mpp"
      },
      items: ["builds/mpp-v2"],
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
      value: "<div className='divider'><span className='divider__inner'>Guides</div>",
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
}; */

const generatedSidebar = mapPageSidebars(sidebarData)

export default generatedSidebar;
