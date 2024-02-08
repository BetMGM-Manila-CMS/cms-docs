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
        ClassyImageTemplate
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
        }
      ]
    }
  ]
};
var TinaTableTemplate = {
  name: "TinaTable",
  label: "TinaTable",
  fields: [
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
var MDXTemplates = [
  TabsTemplate,
  AdmonitionTemplate,
  ClassyImageTemplate,
  TinaTableTemplate
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
