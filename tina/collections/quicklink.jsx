

const QuickLinkTemplate = {
    name: "quickLink",
    label: "Quick Link",
    ui: {
        itemProps: (item) => {
            return { label: item ? item.label : null };
        },
    },
    fields: [
        {
            name: "label",
            label: "Label",
            type: "string",
            required: true,
            isTitle: true,
        },
        {
            name: "brand",
            label: "Brand",
            type: "string",
            options: [
                {
                    value: "betmgm",
                    label: "BetMGM"
                },
                {
                    value: "borgata",
                    label: "Borgata"
                },
                {
                    value: "partycasino",
                    label: "PartyCasino"
                },
                {
                    value: "partypoker",
                    label: "partypoker"
                },
                {
                    value: "wof",
                    label: "Wheel Of Fortune"
                }
            ]
        },
        {
            name: "url",
            label: "URL",
            type: "string",
            required: true,
        },
    ]
}

const LabelField = {
    name: "label",
    label: "Label",
    type: "string",
    required: true,
    isTitle: true,
}

const LinksField = {
    name: "links",
    label: "Links",
    type: "object",
    list: true,

}

const SubGroupTemplate = {
    name: "subGroup",
    label: "Sub Group",
    type: "object",
    ui: {
        itemProps: (item) => {
            return { label: item ? item.label : null };
        },
    }
}

const QuickLinkGroupField = {
    name: "quickLinksGroup",
    label: "Quick Links Group",
    type: "object",
    list: true,
    itemProps: (item) => {
        return { label: item ? item.label : null };
    },
    fields: [
        LabelField,
        {
            ...LinksField,
            templates: [
                QuickLinkTemplate,
                // Reference the QuickLinkGroupField to allow nesting
                {
                    ...SubGroupTemplate,
                    fields: [
                        LabelField,
                        {
                            ...LinksField,
                            templates: [
                                QuickLinkTemplate,
                                // You can continue nesting here if needed
                                {
                                    ...SubGroupTemplate,
                                    fields: [
                                        LabelField,
                                        {
                                            ...LinksField,
                                            templates: [
                                                QuickLinkTemplate,
                                                // You can continue nesting here if needed
                                                {
                                                    ...SubGroupTemplate,
                                                    fields: [
                                                        LabelField,
                                                        {
                                                            ...LinksField,
                                                            templates: [
                                                                QuickLinkTemplate,
                                                                // You can continue nesting here if needed
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

export const QuickLinkCollection = {
    name: "quicklink",
    label: "Quick Links",
    path: "config/quicklink",
    format: "json",
    ui: {
        global: true,
        allowedActions: {
            create: false,
            delete: false,
        },
    },
    fields: [
        QuickLinkGroupField
    ]
}

/* export const QuickLinkCollection = {
    name: 'posts',
    label: 'Blog Posts',
    path: 'content/posts',
    format: 'mdx',
    defaultItem: () => {
      return {
        title: 'New Post',
        date: new Date().toISOString(),
      }
    },
    fields: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'date',
        type: 'datetime',
      },
    ],
  } */