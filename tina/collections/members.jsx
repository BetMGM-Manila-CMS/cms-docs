

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