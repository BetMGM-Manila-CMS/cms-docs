import React from "react";

import { MDXTemplates } from "../../src/theme/template";

export const UpdatesCollection = {
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
            type: 'string',
            label: 'Title',
            name: 'title',
            isTitle: true,
            required: true,
        },
        {
            type: 'string',
            label: 'Description',
            name: 'description',
            ui: {
                component: "textarea"
            }
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