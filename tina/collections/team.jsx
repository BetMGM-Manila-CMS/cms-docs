import { defineConfig, wrapFieldsWithMeta } from 'tinacms'
import React from "react"

function QAScoreLabel(dateString) {
    // Create a Date object from the input date string
    const date = new Date(dateString + '-01');

    // Array of month names
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Get the month and year
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    // Return the formatted date
    return `${month} ${year}`;
}

const QAField = {
    name: "qa",
    label: "QA",
    type: "object",
    list: true,
    itemProps: (item) => {
        return { label: item && item.month ? QAScoreLabel(item.month) : null };        
    },
    fields: [
        {
            name: 'month',
            label: 'Month',
            type: 'datetime',
            required: true,
            ui: {
                component: wrapFieldsWithMeta(({field, input, meta}) => {
                    return (
                        <div class="tina-date-field">
                            <div class="rdt">
                                <input type="month" class="shadow-inner focus:shadow-outline focus:border-blue-500 focus:outline-none block text-base placeholder:text-gray-300 px-3 py-2 text-gray-600 w-full bg-white border border-gray-200 transition-all ease-out duration-150 focus:text-gray-900 rounded-md"
                                {...input} />
                            </div>
                        </div>
                    )
                })
            }
        },
        {
            name: 'score',
            label: 'Score',
            type: 'number',
            required: true,
        }
    ]
}

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
    fields: [
        QAField
    ]
}