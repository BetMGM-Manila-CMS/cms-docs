import React from "react";

import { MDXTemplates } from "../../src/theme/template";

export const DocCollection = {
  name: "doc",
  label: "Docs",
  path: "docs/builds",
  format: "mdx",
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      isTitle: true,
      required: true,
    },
    {
      type: 'rich-text',
      label: 'Post Body',
      name: 'body',
      isBody: true,
      templates: [
        ...MDXTemplates,
      ],
    },
  ],
}