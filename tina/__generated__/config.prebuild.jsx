// tina/config.tsx
import { defineConfig } from "tinacms";

// tina/collections/post.jsx
import React from "react";
var PostCollection = {
  name: "post",
  label: "Posts",
  path: "content/posts",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true
    }
  ]
};

// tina/collections/doc.jsx
import React3 from "react";

// src/theme/template.jsx
import React2 from "react";
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
var TinaSpacerTemplate = {
  name: "TinaSpacer",
  label: "Spacer",
  ui: {
    defaultItem: {
      space: "mt-4"
    }
  },
  fields: [
    {
      name: "space",
      label: "Space",
      type: "string",
      options: [
        {
          label: "Small",
          value: "mt-2"
        },
        {
          label: "Normal",
          value: "mt-4"
        },
        {
          label: "Medium",
          value: "mt-6"
        },
        {
          label: "Large",
          value: "mt-9"
        }
      ]
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
        ClassyImageTemplate
      ]
    }
  ]
};
var TabsTemplate = {
  name: "Tabs",
  fields: [
    {
      name: "children",
      label: "Tabs",
      type: "rich-text",
      templates: [
        TabItemTemplate
      ]
    }
  ]
};
var TinaTableRowTemplate = {
  name: "TinaTableRow",
  label: "Row",
  type: "object",
  fields: [
    {
      name: "items",
      label: "Items",
      type: "object",
      list: true,
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
          name: "header",
          label: "Header",
          type: "boolean"
        },
        {
          name: "style",
          label: "Style",
          component: "select",
          type: "string",
          options: [{
            value: "highlight",
            label: "Highlight"
          }, {
            value: "code",
            label: "Code"
          }]
        },
        {
          name: "url",
          label: "Link",
          type: "string"
        },
        {
          name: "rowSpan",
          label: "Row Span",
          type: "number"
        },
        {
          name: "colSpan",
          label: "Column Span",
          type: "number"
        }
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
      name: "title",
      label: "Title",
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
        TinaSpacerTemplate,
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
var CodeBlockTemplate = {
  name: "CodeBlock",
  label: "Code Block",
  ui: {
    defaultItem: {
      title: "Code"
    },
    itemProps: (item) => {
      return { label: item ? item.title : null };
    }
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      isTitle: true,
      required: true
    },
    {
      name: "language",
      label: "Language",
      type: "string"
    },
    {
      name: "showLineNumbers",
      label: "Show Line Numbers",
      type: "boolean"
    },
    {
      name: "children",
      label: "Code",
      type: "rich-text"
    }
  ]
};
var MDXTemplates = [
  TabsTemplate,
  AdmonitionTemplate,
  ClassyImageTemplate,
  TinaTableTemplate,
  TinaSpacerTemplate,
  DetailsTemplate,
  CodeBlockTemplate
];

// tina/collections/doc.jsx
var DocCollection = {
  name: "doc",
  label: "Docs",
  path: "docs/builds",
  format: "mdx",
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
import React4 from "react";
import { ReferenceField } from "tinacms";
var titleFromSlug = (slug) => {
  const titleString = slug.split("/").slice(1).join(" \u2013 ").replace(/-/g, " ").replace(/\.[^/.]+$/, "");
  return title(titleString);
};
var WarningIcon = (props) => {
  return React4.createElement(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      viewBox: "0 0 24 24",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...props
    },
    React4.createElement("path", { d: "M11.001 10h2v5h-2zM11 16h2v2h-2z" }),
    React4.createElement("path", { d: "M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z" })
  );
};
var RestartWarning = () => {
  return React4.createElement("p", { className: "rounded-lg border shadow px-4 py-2.5 bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200 mb-4" }, React4.createElement("div", { className: "flex items-center gap-2" }, React4.createElement(WarningIcon, { className: `w-6 h-auto flex-shrink-0 text-yellow-400` }), React4.createElement("div", { className: `flex-1 text-sm text-yellow-700 whitespace-normal	` }, "To see settings changes reflected on your site, restart the Tina CLI after saving ", React4.createElement("em", null, "(local development only)"), ".")));
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
        const link = React4.useMemo(() => {
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
          return React4.createElement(RestartWarning, null);
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

// tina/config.tsx
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      PostCollection,
      DocCollection,
      SidebarCollection
    ]
  }
});
export {
  config_default as default
};
