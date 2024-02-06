import React from "react";

const ClassyImageTemplate = {
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
        },
    ],
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
            ]
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
            ]
        },
    ]
}

const TabsTemplate = {
    name: "Tabs",
    fields: [
        {
            name: "children",
            label: "Tabs",
            type: "rich-text",
            templates: [
                TabItemTemplate
            ],
        },
    ],
};

const TinaTableRowTemplate = {
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

}

const TinaTableTemplate = {
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
        },
    ]
}


export const MDXTemplates = [
    TabsTemplate,
    AdmonitionTemplate,
    ClassyImageTemplate,
    TinaTableTemplate,
]