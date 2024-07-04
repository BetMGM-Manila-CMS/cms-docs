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
      options: [
        "Web Content Specialist",
        "Jr. CMS Developer",
        "CMS Developer",
        "Sr. CMS Developer",
        "CMS Team Lead",
        "Digital Content Manager - Gaming",
        "Senior Content Management Specialist - Gaming",
      ],
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
  ],
};

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
  fields: [MemberField],
};

/* export const MembersCollection = {
    name: "members",
    label: "Members",
    path: "members",
    format: "md",
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
