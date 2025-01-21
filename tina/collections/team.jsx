import { defineConfig, wrapFieldsWithMeta } from "tinacms";
import { displayMonthDate } from "../../utils/date.js";
import React from "react";

const QAField = {
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
        component: wrapFieldsWithMeta(({ field, input, meta }) => {
          return (
            <div class="tina-date-field">
              <div class="rdt">
                <input
                  type="month"
                  class="shadow-inner focus:shadow-outline focus:border-blue-500 focus:outline-none block text-base placeholder:text-gray-300 px-3 py-2 text-gray-600 w-full bg-white border border-gray-200 transition-all ease-out duration-150 focus:text-gray-900 rounded-md"
                  {...input}
                />
              </div>
            </div>
          );
        }),
      },
    },
    {
      name: "score",
      label: "Score",
      type: "number",
      required: true,
    },
    {
      name: "images",
      label: "Images",
      type: "object",
      list: true,
      required: true,
      fields: [
        {
          name: "image",
          label: "Image",
          type: "image",
        },
      ],
    },
  ],
};

const MemberField = {
  name: "members",
  label: "Members",
  type: "object",
  list: true,
  itemProps: (item) => {
    return { label: item ? item.name : null };
  },
  fields: [
    {
      name: "image",
      label: "Image",
      type: "image",
    },
    {
      name: "name",
      label: "Name",
      type: "string",
      required: true,
      isTitle: true,
    },
    {
      name: "title",
      label: "Ttile",
      type: "string",
      required: true,
    },
    {
      name: "isProbation",
      label: "Ongoing Probation",
      type: "boolean",
      required: true,
    },
    {
      name: "officeLocation",
      label: "Office",
      type: "string",
      required: true,
      options: ["Manila", "USA"],
    },
    {
      name: "active",
      label: "Active",
      type: "boolean",
      required: true,
    },
  ],
};

export const TeamCollection = {
  name: "team",
  label: "Team",
  path: "config/team",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [QAField, MemberField],
};
