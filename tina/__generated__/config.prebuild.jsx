// src/theme/template.jsx
import React from "react";
var ClassyImageTemplate = {
  name: "img",
  label: "Classy Image",
  fields: [
    {
      name: "className",
      label: "Class",
      type: "string"
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
      return { label: item ? item.name : null };
    }
  },
  fields: [
    {
      name: "name",
      label: "Name",
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
var MDXTemplates = [
  TabsTemplate,
  AdmonitionTemplate,
  ClassyImageTemplate,
  TinaTableTemplate,
  TinaSpacerTemplate,
  DetailsTemplate
];

// tina/config.ts
import { defineConfig } from "tinacms";
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
      // default
      {
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
      },
      {
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
      }
    ]
  }
});
export {
  config_default as default
};
