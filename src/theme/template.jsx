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
                },
                {
                    name: "url",
                    label: "Link",
                    type: "string"
                },
                {
                    name: "rowSpan",
                    label: "Row Span",
                    type: 'number'
                },
                {
                    name: "colSpan",
                    label: "Column Span",
                    type: 'number'
                }
            ]
        }
    ]

}

const TinaTableTemplate = {
    name: "TinaTable",
    label: "Table",
    ui: {
        itemProps: (item) => {
            return { label: item ? item.name : null };
        },
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
                TinaSpacerTemplate,
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



export const MDXTemplates = [
    TabsTemplate,
    AdmonitionTemplate,
    ClassyImageTemplate,
    TinaTableTemplate,
    TinaSpacerTemplate,
    DetailsTemplate,
]