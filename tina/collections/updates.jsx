import React from "react";
import members from "../../config/members/index.json";

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
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      name: "image",
      label: "Image",
      type: "image",
    },
    {
      type: "object",
      list: true,
      label: "Authors",
      name: "authors",
      itemProps: (item) => {
        return { label: item ? item.name : null };
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
          options: members.member.map((member) => member.name),
        },
      ],
    },
    /* {
      type: "object",
      list: true,
      label: "Instructed By",
      name: "instructedBy",
      itemProps: (item) => {
        return { label: item ? item.member : null };
      },
      fields: [
        {
          type: "string",
          name: "member",
          label: "Member",
          options: members.member.map((member) => member.name),
        },
      ],
    },
    {
      type: "object",
      list: true,
      label: "Relayed By",
      name: "relayedBy",
      itemProps: (item) => {
        return { label: item ? item.member : null };
      },
      fields: [
        {
          type: "string",
          name: "member",
          label: "Member",
          options: members.member.map((member) => member.name),
        },
      ],
    }, */
    {
      type: "string",
      label: "Slug",
      name: "slug",
      required: true,
    },
    {
      name: "source",
      label: "Source",
      type: "object",
      required: true,
      fields: [
        {
          name: "platform",
          label: "Platform",
          type: "string",
          required: true,
          options: [
            { label: "Skype", value: "skype" },
            { label: "Outlook", value: "outlook" },
            { label: "Teams", value: "teams" },
            { label: "Sharepoint", value: "sharepoint" },
          ],
        },
      ],
    },
    {
      name: "brands",
      label: "Brands",
      type: "object",
      list: true,
      required: true,
      itemProps: (item) => {
        return { label: item ? item.brand : null };
      },
      fields: [
        {
          name: "brand",
          label: "Brand",
          type: "string",
          required: true,
          options: [
            { label: "BetMGM", value: "betmgm" },
            { label: "Borgata", value: "borgata" },
            { label: "PartyCasino", value: "partycasino" },
          ],
        },
      ],
    },
    {
      type: "rich-text",
      label: "Post Body",
      name: "body",
      isBody: true,
      templates: [...MDXTemplates],
    },
  ],
};
