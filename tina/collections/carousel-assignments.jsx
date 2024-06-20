import { displayRangeDate } from "../../utils/date.js"

const CarouselAssignmentField = {
    name: "carouselAssignment",
    label: "Carousel Assignment",
    type: "object",
    list: true,
    itemProps: (item) => {
        return { label: item && item.startDay && item.endDay ? displayRangeDate(item.startDay, item.endDay) : null };        
    },
    fields: [
        {
            name: 'startDay',
            label: 'Start Day',
            type: 'datetime',
            required: true,
        },
        {
            name: 'endDay',
            label: 'End Day',
            type: 'datetime',
            required: true,
        }
    ]
}

export const CarouselAssignmentsCollection = {
    name: "carouselAssignments",
    label: "Carousel Assignments",
    path: "config/carousel-assignments",
    format: "json",
    ui: {
        global: true,
        allowedActions: {
            create: false,
            delete: false,
        },
    },
    fields: [
        CarouselAssignmentField
    ]
}