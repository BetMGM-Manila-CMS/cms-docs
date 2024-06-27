
const LabelField = {
    name: "label",
    label: "Label",
    type: "string",
    required: true,
}


const NoteField = {
    name: "note",
    label: "Note",
    type: "string",
    required: true,
}

const NotesField = {
    name: "notes",
    label: "Notes",
    type: "object",
    list: true,
    itemProps: (item) => {
        return { label: item ? item.label : null };
    },
    fields: [
        NoteField
    ]
}


const ChecklistField = {
    name: "checklist",
    label: "Checklist",
    type: "object",
    list: true,
    itemProps: (item) => {
        return { label: item ? item.label : null };
    },
    fields: [
        LabelField,
        NotesField   
    ]
}

const ChecklistsField = {
    name: "checklists",
    label: "Checklists",
    type: "object",
    list: true,
    itemProps: (item) => {
        return { label: item ? item.label : null };
    },
    fields: [
        LabelField,
        ChecklistField
    ]
}

const ChecklistGroup = {
    name: "checklistGroup",
    label: "Checklist Group",
    type: "object",
    list: true,
    itemProps: (item) => {
        return { label: item ? item.label : null };
    },
    fields: [
        LabelField,
        ChecklistsField
    ]
}

export const ChecklistsCollection = {
    name: "checklists",
    label: "Check Lists",
    path: "config/checklists",
    format: "json",
    ui: {
        global: true,
        allowedActions: {
            create: false,
            delete: false,
        },
    },
    fields: [
        ChecklistGroup
    ]
}