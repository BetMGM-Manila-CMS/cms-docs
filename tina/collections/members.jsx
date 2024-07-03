

const MemberField = {
    name: "member",
    label: "Member",
    type: "object",
    list: true,
    itemProps: (item) => {
        return { label: item ? item.name : null };
    },
    fields: [
        {
            name: "name",
            label: "Name",
            type: "string",
            required: true,
            isTitle: true,
        },
        {
            name: "position",
            label: "Position",
            type: "string",
            required: true,
            options: [
                "Web Content Specialist",
                "Jr. CMS Developer",
                "CMS Developer",
                "Sr. CMS Developer"
            ]
        },
        {
            name: 'birthday',
            label: 'Birthday',
            type: 'datetime'
        },
        {
            name: 'hiredDate',
            label: 'Hired Date',
            type: 'datetime'
        }
    ]
}

export const MembersCollection = {
    name: "members",
    label: "Members",
    path: "config/members",
    format: "json",
    ui: {
        global: true,
        allowedActions: {
            create: false,
            delete: false,
        },
    },
    fields: [
        MemberField
    ]
}

/* export const MembersCollection = {
    name: "members",
    label: "Members",
    path: "members",
    format: "mdx",
    fields: [
        {
            name: "image",
            label: "Image",
            type: "image",
        },
        {
            type: 'string',
            label: 'Name',
            name: 'name',
            isTitle: true,
            required: true,
        },
        {
            name: "position",
            label: "Position",
            type: "string",
            required: true,
            options: [
                "Web Content Specialist",
                "Jr. CMS Developer",
                "CMS Developer",
                "Sr. CMS Developer"
            ]
        },
        {
            name: 'birthday',
            label: 'Birthday',
            type: 'datetime'
        },
        {
            name: 'hiredDate',
            label: 'Hired Date',
            type: 'datetime'
        }
    ]
} */