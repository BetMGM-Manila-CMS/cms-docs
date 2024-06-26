// tina/config.tsx
import { defineConfig as defineConfig3 } from "tinacms";

// tina/collections/doc.jsx
import React2 from "react";

// src/theme/template.jsx
import React from "react";
import { wrapFieldsWithMeta } from "tinacms";
var ClassyImageTemplate = {
  name: "img",
  label: "Classy Image",
  fields: [
    {
      name: "className",
      label: "Class",
      type: "string",
      required: true
    },
    {
      name: "src",
      label: "Image",
      type: "image"
    },
    {
      name: "alt",
      label: "Alt Name",
      type: "string"
    }
  ]
};
var TinaTableCell = {
  name: "TinaTableCell",
  label: "Cell",
  type: "object",
  ui: {
    defaultItem: {
      rowSpan: 0,
      colSpan: 0
    }
  },
  fields: [
    {
      name: "children",
      label: "Content",
      type: "rich-text"
    },
    {
      name: "rowSpan",
      label: "Row Span",
      type: "number",
      ui: {
        validate: (value) => {
          return value < 0 ? "Value cannot go below 0" : null;
        }
      }
    },
    {
      name: "colSpan",
      label: "Column Span",
      type: "number"
    }
  ]
};
var TinaTableRowTemplate = {
  name: "TinaTableRow",
  label: "Row",
  type: "object",
  fields: [
    {
      name: "children",
      label: "Items",
      type: "rich-text",
      templates: [
        TinaTableCell
      ]
    }
  ]
};
var TinaTableTemplate = {
  name: "TinaTable",
  label: "Table",
  ui: {
    itemProps: (item) => {
      return { label: item ? item.title : null };
    }
  },
  fields: [
    {
      name: "topHeader",
      label: "Top Header",
      type: "boolean"
    },
    {
      name: "leftHeader",
      label: "left Header",
      type: "boolean"
    },
    {
      name: "columnWidth",
      label: "Column Width",
      type: "string"
    },
    {
      name: "className",
      label: "Class",
      type: "string"
    },
    {
      name: "children",
      label: "Rows",
      type: "rich-text",
      templates: [
        TinaTableRowTemplate
      ]
    }
  ]
};
var AdmonitionTemplate = {
  name: "Admonition",
  ui: {
    defaultItem: {
      type: "note",
      title: "Note"
    },
    itemProps: (item) => {
      return { label: item ? item.title : null };
    }
  },
  fields: [
    {
      name: "type",
      label: "Type",
      type: "string",
      options: [
        {
          label: "Note",
          value: "note"
        },
        {
          label: "Tip",
          value: "tip"
        },
        {
          label: "Info",
          value: "info"
        },
        {
          label: "Caution",
          value: "caution"
        },
        {
          label: "Danger",
          value: "danger"
        }
      ]
    },
    {
      name: "title",
      label: "Title",
      type: "string",
      isTitle: true,
      required: true
    },
    {
      name: "children",
      label: "Content",
      type: "rich-text",
      templates: [
        ClassyImageTemplate,
        TinaTableTemplate
      ]
    }
  ]
};
var DetailsTemplate = {
  name: "Details",
  ui: {
    defaultItem: {
      summary: "Detail"
    },
    itemProps: (item) => {
      return { label: item ? item.summary : null };
    }
  },
  fields: [
    {
      name: "summary",
      label: "Label",
      type: "string",
      isTitle: true,
      required: true
    },
    {
      name: "children",
      label: "Content",
      type: "rich-text"
    }
  ]
};
var TabItemTemplate = {
  name: "TabItem",
  label: "Tab Item",
  ui: {
    defaultItem: {
      label: "New Tab",
      value: "tab"
    }
  },
  itemProps: (item) => {
    return { label: item ? item.label : null };
  },
  fields: [
    {
      name: "label",
      label: "Label",
      type: "string"
    },
    {
      name: "value",
      label: "Value",
      type: "string"
    },
    {
      name: "children",
      label: "Content",
      type: "rich-text",
      templates: [
        ClassyImageTemplate,
        TinaTableTemplate
      ]
    }
  ]
};
var TabsTemplate = {
  name: "Tabs",
  label: "Tabs",
  fields: [
    {
      name: "children",
      label: "Tab Items",
      type: "rich-text",
      templates: [
        TabItemTemplate
      ]
    }
  ]
};
var ColTemplate = {
  name: "Col",
  label: "Col",
  ui: {
    defaultItem: {
      ratio: 1,
      sticky: false
    }
  },
  itemProps: (item) => {
    return { label: item ? item.label : null };
  },
  fields: [
    {
      name: "ratio",
      label: "Ratio",
      type: "number"
    },
    {
      name: "sticky",
      label: "Sticky",
      type: "boolean"
    },
    {
      name: "children",
      label: "Content",
      type: "rich-text",
      templates: [
        AdmonitionTemplate,
        ClassyImageTemplate,
        TinaTableTemplate
      ]
    }
  ]
};
var RowTemplate = {
  name: "Row",
  label: "Row",
  fields: [
    {
      name: "children",
      label: "Col",
      type: "rich-text",
      templates: [
        ColTemplate
      ]
    }
  ]
};
var MDXTemplates = [
  ClassyImageTemplate,
  TabsTemplate,
  AdmonitionTemplate,
  TinaTableTemplate,
  DetailsTemplate,
  RowTemplate
];

// tina/collections/doc.jsx
var DocCollection = {
  name: "doc",
  label: "Docs",
  path: "docs/builds",
  format: "mdx",
  /* ui: {
    router: ({ document }) => {
      return `/docs/builds/${document._sys.filename}`
    }
  }, */
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true
    },
    {
      type: "rich-text",
      label: "Post Body",
      name: "body",
      isBody: true,
      templates: [
        ...MDXTemplates
      ]
    }
  ]
};

// tina/collections/sidebar.jsx
import React3 from "react";
import { ReferenceField } from "tinacms";
var titleFromSlug = (slug) => {
  const titleString = slug.split("/").slice(1).join(" \u2013 ").replace(/-/g, " ").replace(/\.[^/.]+$/, "");
  return title(titleString);
};
var WarningIcon = (props) => {
  return React3.createElement(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 24 24",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...props
    },
    React3.createElement("path", { d: "M11.001 10h2v5h-2zM11 16h2v2h-2z" }),
    React3.createElement("path", { d: "M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z" })
  );
};
var RestartWarning = () => {
  return React3.createElement("p", { className: "rounded-lg border shadow px-4 py-2.5 bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200 mb-4" }, React3.createElement("div", { className: "flex items-center gap-2" }, React3.createElement(WarningIcon, { className: `w-6 h-auto flex-shrink-0 text-yellow-400` }), React3.createElement("div", { className: `flex-1 text-sm text-yellow-700 whitespace-normal	` }, "To see settings changes reflected on your site, restart the Tina CLI after saving ", React3.createElement("em", null, "(local development only)"), ".")));
};
var ItemsField = {
  name: "items",
  label: "Items",
  type: "object",
  list: true
};
var DocLinkTemplate = {
  name: "doc",
  label: "Doc Link",
  ui: {
    itemProps: (item) => {
      return {
        label: item && item.label ? item.label : item && item.document ? titleFromSlug(item.document) : item && item.name
      };
    }
  },
  fields: [
    {
      label: "Document",
      name: "document",
      type: "reference",
      collections: ["doc"],
      isTitle: true,
      required: true
    },
    {
      name: "label",
      label: "Label",
      description: "By default this is the document title",
      type: "string",
      required: true
    }
  ]
};
var ExternalLinkTemplate = {
  name: "link",
  label: "External Link",
  ui: {
    itemProps: (item) => {
      return {
        label: item && item.title ? item.title : item.name
      };
    }
  },
  fields: [
    {
      name: "title",
      label: "Label",
      type: "string",
      isTitle: true,
      required: true
    },
    {
      name: "href",
      label: "URL",
      type: "string",
      required: true
    }
  ]
};
var DividerTemplate = {
  name: "divider",
  label: "Divider",
  fields: [
    {
      name: "title",
      label: "Label",
      type: "string",
      isTitle: true,
      required: true
    }
  ]
};
var CategoryTemplateProps = {
  name: "category",
  label: "Category",
  ui: {
    itemProps: (item) => {
      return {
        label: item && item.title ? item.title : item.name
      };
    },
    defaultItem: {
      link: "none"
    }
  }
};
var CategoryFields = [
  {
    name: "title",
    label: "Title",
    type: "string",
    isTitle: true,
    required: true
  },
  {
    name: "link",
    label: "Link",
    type: "string",
    options: [
      {
        label: "None",
        value: "none"
      },
      {
        label: "Document",
        value: "doc"
      },
      {
        label: "Generated Index",
        value: "generated"
      }
    ]
  },
  {
    name: "docLink",
    label: "Document",
    type: "reference",
    collections: ["doc"],
    ui: {
      component: (props) => {
        const link = React3.useMemo(() => {
          let fieldName = props.field.name;
          fieldName = fieldName.substring(0, fieldName.lastIndexOf(".")) || fieldName;
          return fieldName.split(".").reduce((o, i) => o[i], props.tinaForm.values).link;
        }, [props.tinaForm.values]);
        if (link !== "doc") {
          return null;
        }
        return ReferenceField(props);
      }
    }
  }
];
var CategoryTemplate = {
  ...CategoryTemplateProps,
  fields: [
    ...CategoryFields,
    {
      ...ItemsField,
      templates: [
        {
          ...CategoryTemplateProps,
          fields: [
            ...CategoryFields,
            {
              ...ItemsField,
              templates: [
                {
                  ...CategoryTemplateProps,
                  fields: [
                    ...CategoryFields,
                    {
                      ...ItemsField,
                      templates: [DocLinkTemplate, ExternalLinkTemplate]
                    }
                  ]
                },
                DocLinkTemplate,
                ExternalLinkTemplate
              ]
            }
          ]
        },
        DocLinkTemplate,
        ExternalLinkTemplate
      ]
    }
  ]
};
var SidebarItemsField = {
  ...ItemsField,
  templates: [CategoryTemplate, DocLinkTemplate, ExternalLinkTemplate, DividerTemplate]
};
var SidebarsField = {
  name: "items",
  label: "Page Sidebars",
  type: "object",
  list: true,
  itemProps: (item) => {
    return { label: item ? item.label : null };
  },
  fields: [
    {
      type: "string",
      label: "Label",
      name: "label",
      required: true,
      isTitle: true
    },
    SidebarItemsField
  ]
};
var SidebarCollection = {
  name: "sidebar",
  label: "Sidebars",
  path: "config/sidebar",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "string",
      name: "_warning",
      ui: {
        component: () => {
          return React3.createElement(RestartWarning, null);
        }
      }
    },
    {
      type: "string",
      label: "Label",
      name: "label",
      required: true,
      isTitle: true,
      ui: {
        component: "hidden"
      }
    },
    SidebarsField
  ]
};

// tina/collections/quicklink.jsx
var QuickLinkTemplate = {
  name: "quickLink",
  label: "Quick Link",
  ui: {
    itemProps: (item) => {
      return { label: item ? item.label : null };
    }
  },
  fields: [
    {
      name: "label",
      label: "Label",
      type: "string",
      required: true,
      isTitle: true
    },
    {
      name: "brand",
      label: "Brand",
      type: "string",
      options: [
        {
          value: "betmgm",
          label: "BetMGM"
        },
        {
          value: "borgata",
          label: "Borgata"
        },
        {
          value: "partycasino",
          label: "PartyCasino"
        },
        {
          value: "partypoker",
          label: "partypoker"
        },
        {
          value: "wof",
          label: "Wheel Of Fortune"
        }
      ]
    },
    {
      name: "url",
      label: "URL",
      type: "string",
      required: true
    }
  ]
};
var LabelField = {
  name: "label",
  label: "Label",
  type: "string",
  required: true,
  isTitle: true
};
var LinksField = {
  name: "links",
  label: "Links",
  type: "object",
  list: true
};
var SubGroupTemplate = {
  name: "subGroup",
  label: "Sub Group",
  type: "object",
  ui: {
    itemProps: (item) => {
      return { label: item ? item.label : null };
    }
  }
};
var QuickLinkGroupField = {
  name: "quickLinksGroup",
  label: "Quick Links Group",
  type: "object",
  list: true,
  itemProps: (item) => {
    return { label: item ? item.label : null };
  },
  fields: [
    LabelField,
    {
      ...LinksField,
      templates: [
        QuickLinkTemplate,
        // Reference the QuickLinkGroupField to allow nesting
        {
          ...SubGroupTemplate,
          fields: [
            LabelField,
            {
              ...LinksField,
              templates: [
                QuickLinkTemplate,
                // You can continue nesting here if needed
                {
                  ...SubGroupTemplate,
                  fields: [
                    LabelField,
                    {
                      ...LinksField,
                      templates: [
                        QuickLinkTemplate,
                        // You can continue nesting here if needed
                        {
                          ...SubGroupTemplate,
                          fields: [
                            LabelField,
                            {
                              ...LinksField,
                              templates: [
                                QuickLinkTemplate
                                // You can continue nesting here if needed
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
var QuickLinkCollection = {
  name: "quicklink",
  label: "Quick Links",
  path: "config/quicklink",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    QuickLinkGroupField
  ]
};

// tina/collections/members.jsx
var MembersCollection = {
  name: "members",
  label: "Members",
  path: "members",
  format: "mdx",
  fields: [
    {
      name: "image",
      label: "Image",
      type: "image"
    },
    {
      type: "string",
      label: "Name",
      name: "name",
      isTitle: true,
      required: true
    },
    {
      name: "position",
      label: "Position",
      type: "string",
      required: true,
      options: [
        "Web Content Specialist",
        "Jr. CMS Developer",
        "CMS Developer",
        "Sr. CMS Developer"
      ]
    },
    {
      name: "birthday",
      label: "Birthday",
      type: "datetime"
    },
    {
      name: "hiredDate",
      label: "Hired Date",
      type: "datetime"
    }
  ]
};

// tina/collections/work-schedules.jsx
import { defineConfig, wrapFieldsWithMeta as wrapFieldsWithMeta2 } from "tinacms";
import React4 from "react";
import Papa from "papaparse";

// utils/date.js
var displayRangeDate = (start, end) => {
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const startDate = new Intl.DateTimeFormat("en-US", options).format(new Date(start)).replace(",", "");
  const endDate = new Intl.DateTimeFormat("en-US", options).format(new Date(end)).replace(",", "");
  return `${startDate} - ${endDate}`;
};
var displayMonthDate = (dateString) => {
  const date = new Date(dateString);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `${month} ${year}`;
};

// tina/collections/work-schedules.jsx
var WorkScheduleField = {
  name: "workSchedule",
  label: "Work Schedule",
  type: "object",
  list: true,
  itemProps: (item) => {
    return { label: item && item.startDay && item.endDay ? displayRangeDate(item.startDay, item.endDay) : null };
  },
  fields: [
    {
      name: "startDay",
      label: "Start Day",
      type: "datetime",
      required: true
    },
    {
      name: "endDay",
      label: "End Day",
      type: "datetime",
      required: true
    },
    {
      name: "schedule",
      label: "Schedule",
      type: "string",
      ui: {
        validate: (value, data) => {
          if (!value || value.trim() === "") {
            return "CSV string is empty.";
          }
          const lines = value.split("\n");
          const trimmedLines = lines.map((line) => line.trim()).filter((line) => line !== "");
          if (trimmedLines.length === 0) {
            return "CSV string has no valid lines.";
          }
          const columnCount = trimmedLines[0].split(",").length;
          for (let i = 0; i < trimmedLines.length; i++) {
            const line = trimmedLines[i];
            const fields = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
            if (fields.length !== columnCount) {
              return `Line ${i + 1} does not have the correct number of columns. Expected ${columnCount}, but got ${fields.length}.`;
            }
          }
        },
        component: wrapFieldsWithMeta2(({ field, input, meta }) => {
          const data = meta.valid ? Papa.parse(input.value, { header: true, skipEmptyLines: true }).data : null;
          const columns = data ? Object.keys(data[0]) : null;
          console.log(data, columns);
          return React4.createElement("div", null, React4.createElement(
            "textarea",
            {
              name: "workSchedule.0.schedule",
              className: "shadow-inner text-base px-3 py-2 text-gray-600 resize-y focus:shadow-outline focus:border-blue-500 block w-full border border-gray-200 focus:text-gray-900 rounded-md",
              ...input,
              style: { minHeight: "160px" }
            }
          ), data && React4.createElement("div", { className: "mt-4 shadow-inner text-base p-2 text-gray-600 resize-y focus:shadow-outline focus:border-blue-500 block w-full border border-gray-200 focus:text-gray-900 rounded-md bg-white" }, React4.createElement("table", { className: "table w-full" }, React4.createElement("thead", null, React4.createElement("tr", null, columns && columns.map((col) => React4.createElement("th", { className: "p-1 border border-gray-200 text-start", key: col }, col)))), React4.createElement("tbody", null, data && data.map((row, rowIndex) => React4.createElement("tr", { key: rowIndex }, columns && columns.map((col) => React4.createElement("td", { className: "p-1 border border-gray-200", key: col }, row[col]))))))));
        })
      }
    }
  ]
};
var WorkSchedulesCollection = {
  name: "workSchedules",
  label: "Work Schedules",
  path: "config/work-schedules",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    WorkScheduleField
  ]
};

// tina/collections/checklists.jsx
var LabelField2 = {
  name: "label",
  label: "Label",
  type: "string",
  required: true
};
var ChecklistField = {
  name: "checklist",
  label: "Checklist",
  type: "object",
  list: true,
  itemProps: (item) => {
    return { label: item ? item.label : null };
  },
  fields: [
    LabelField2
  ]
};
var ChecklistsField = {
  name: "checklists",
  label: "Checklists",
  type: "object",
  list: true,
  itemProps: (item) => {
    return { label: item ? item.label : null };
  },
  fields: [
    LabelField2,
    ChecklistField
  ]
};
var ChecklistGroup = {
  name: "checklistGroup",
  label: "Checklist Group",
  type: "object",
  list: true,
  itemProps: (item) => {
    return { label: item ? item.label : null };
  },
  fields: [
    LabelField2,
    ChecklistsField
  ]
};
var ChecklistsCollection = {
  name: "checklists",
  label: "Check Lists",
  path: "config/checklists",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    ChecklistGroup
  ]
};

// tina/collections/carousel-assignments.jsx
var CarouselAssignmentField = {
  name: "carouselAssignment",
  label: "Carousel Assignment",
  type: "object",
  list: true,
  itemProps: (item) => {
    return { label: item && item.startDay && item.endDay ? displayRangeDate(item.startDay, item.endDay) : null };
  },
  fields: [
    {
      name: "startDay",
      label: "Start Day",
      type: "datetime",
      required: true
    },
    {
      name: "endDay",
      label: "End Day",
      type: "datetime",
      required: true
    },
    {
      name: "casinoPoker",
      label: "Casino and Poker",
      type: "object",
      fields: [
        {
          name: "betNJ",
          label: "BetMGM NJ",
          type: "reference",
          collections: ["members"]
        }
      ]
    }
  ]
};
var CarouselAssignmentsCollection = {
  name: "carouselAssignments",
  label: "Carousel Assignments",
  path: "config/carousel-assignments",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    CarouselAssignmentField
  ]
};

// tina/collections/updates.jsx
import React5 from "react";
var UpdatesCollection = {
  name: "updates",
  label: "Updates",
  path: "updates",
  format: "mdx",
  /* ui: {
    router: ({ document }) => {
      return `/docs/builds/${document._sys.filename}`
    }
  }, */
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "rich-text",
      label: "Post Body",
      name: "body",
      isBody: true,
      templates: [
        ...MDXTemplates
      ]
    }
  ]
};

// tina/collections/team.jsx
import { defineConfig as defineConfig2, wrapFieldsWithMeta as wrapFieldsWithMeta3 } from "tinacms";
import React6 from "react";
var QAField = {
  name: "qa",
  label: "QA",
  type: "object",
  list: true,
  itemProps: (item) => {
    return { label: item && item.month ? displayMonthDate(item.month) : null };
  },
  fields: [
    {
      name: "month",
      label: "Month",
      type: "datetime",
      required: true,
      ui: {
        component: wrapFieldsWithMeta3(({ field, input, meta }) => {
          return React6.createElement("div", { class: "tina-date-field" }, React6.createElement("div", { class: "rdt" }, React6.createElement(
            "input",
            {
              type: "month",
              class: "shadow-inner focus:shadow-outline focus:border-blue-500 focus:outline-none block text-base placeholder:text-gray-300 px-3 py-2 text-gray-600 w-full bg-white border border-gray-200 transition-all ease-out duration-150 focus:text-gray-900 rounded-md",
              ...input
            }
          )));
        })
      }
    },
    {
      name: "score",
      label: "Score",
      type: "number",
      required: true
    }
  ]
};
var TeamCollection = {
  name: "team",
  label: "Team",
  path: "config/team",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    QAField
  ]
};

// tina/config.tsx
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig3({
  // branch,
  // Get this from tina.io
  // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  // token: process.env.TINA_TOKEN,
  branch: process.env.TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    /* tina: {
      mediaRoot: "img",
      publicFolder: "static",
    }, */
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      DocCollection,
      SidebarCollection,
      QuickLinkCollection,
      MembersCollection,
      WorkSchedulesCollection,
      ChecklistsCollection,
      CarouselAssignmentsCollection,
      UpdatesCollection,
      TeamCollection
    ]
  }
});
export {
  config_default as default
};
