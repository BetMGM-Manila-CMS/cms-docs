import React from "react";
import { wrapFieldsWithMeta } from "tinacms";

const ClassyImageTemplate = {
    name: "img",
    label: "Classy Image",
    fields: [
        {
            name: "className",
            label: "Class",
            type: "string",
            required: true,
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
        },
    ],
}

const TinaSpacerTemplate = {
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
}

const TinaTableCell = {
    name: "TinaTableCell",
    label: "Cell",
    type: 'object',
    ui: {
        defaultItem: {
            rowSpan: 0,
            colSpan: 0,
        },
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
            type: 'number',
            ui: {
                validate: (value) => {
                    return value < 0 ? 'Value cannot go below 0' : null
                }
            }
        },
        {
            name: "colSpan",
            label: "Column Span",
            type: 'number'
        },
    ]
}

const TinaTableRowTemplate = {
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
        },
    ]

}

const TinaTableTemplate = {
    name: "TinaTable",
    label: "Table",
    ui: {
        itemProps: (item) => {
            return { label: item ? item.title : null };
        },
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
        },
    ]
}

const AdmonitionTemplate = {
    name: "Admonition",
    ui: {
        defaultItem: {
            type: "note",
            title: "Note",
        },
        itemProps: (item) => {
            return { label: item ? item.title : null };
        },
    },
    fields: [
        {
            name: "type",
            label: "Type",
            type: "string",
            options: [
                {
                    label: "Note",
                    value: "note",
                },
                {
                    label: "Tip",
                    value: "tip",
                },
                {
                    label: "Info",
                    value: "info",
                },
                {
                    label: "Caution",
                    value: "caution",
                },
                {
                    label: "Danger",
                    value: "danger",
                },
            ],
        },
        {
            name: "title",
            label: "Title",
            type: "string",
            isTitle: true,
            required: true,
        },
        {
            name: "children",
            label: "Content",
            type: "rich-text",
            templates: [
                ClassyImageTemplate,
                TinaTableTemplate,
            ]
        },
    ],
};

const DetailsTemplate = {
    name: "Details",
    ui: {
        defaultItem: {
            summary: "Detail",
        },
        itemProps: (item) => {
            return { label: item ? item.summary : null };
        },
    },
    fields: [
        {
            name: "summary",
            label: "Label",
            type: "string",
            isTitle: true,
            required: true,
        },
        {
            name: "children",
            label: "Content",
            type: "rich-text",
        },
    ]
}

const CodeBlockTemplate = {
    name: "CodeBlock",
    label: "Code Block",
    ui: {
        defaultItem: {
            title: "Code",
        },
        itemProps: (item) => {
            return { label: item ? item.title : null };
        },
    },
    fields: [
        {
            name: "title",
            label: "Title",
            type: "string",
            isTitle: true,
            required: true,
        },
        {
            name: "language",
            label: "Language",
            type: "string",
        },
        {
            name: "showLineNumbers",
            label: "Show Line Numbers",
            type: "boolean",
        },
        {
            name: "children",
            label: "Code",
            type: "rich-text",
        },
    ],
};

const TabItemTemplate = {
    name: "TabItem",
    label: "Tab Item",
    ui: {
        defaultItem: {
            label: "New Tab",
            value: "tab",
        },
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
        },
    ]
}

const TinaTabsTemplate = {
    name: "TinaTabs",
    label: "Tina Tabs",
    fields: [
        {
            name: "items",
            label: "Tabs",
            type: "object",
            list: true,
            ui: {
                defaultItem: {
                    label: "New Tab",
                    value: "tab",
                },
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
                    name: "image",
                    label: "Image",
                    type: "image"
                },
                {
                    name: "content",
                    label: "Content",
                    type: "string",
                    component: "textarea",
                },
            ]
        }
    ],
};

const TabsTemplate = {
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
    ],
};

const ColTemplate = {
    name: "Col",
    label: "Col",
    ui: {
        defaultItem: {
            ratio: 1,
            sticky: false,
        },
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
        },
    ]
}

const RowTemplate = {
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
}


export const MDXTemplates = [
    ClassyImageTemplate,
    TabsTemplate,
    AdmonitionTemplate,
    TinaTableTemplate,
    DetailsTemplate,
    RowTemplate
]