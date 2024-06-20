import { defineConfig, wrapFieldsWithMeta } from 'tinacms'
import React from "react"
import Papa from 'papaparse';
import { displayRangeDate } from "../../utils/date.js"

const WorkScheduleField = {
    name: "workSchedule",
    label: "Work Schedule",
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
        },
        {
            name: 'schedule',
            label: 'Schedule',
            type: 'string',
            ui: {
                validate: (value, data) => {
                    // Check if the string is empty
                    if (!value || value.trim() === '') {
                        return "CSV string is empty.";
                    }

                    // Split the string into lines
                    const lines = value.split('\n');

                    // Trim lines to handle possible leading/trailing spaces and remove empty lines
                    const trimmedLines = lines.map(line => line.trim()).filter(line => line !== '');

                    if (trimmedLines.length === 0) {
                        return "CSV string has no valid lines.";
                    }

                    // Get the number of columns in the first line
                    const columnCount = trimmedLines[0].split(',').length;

                    // Validate each line has the same number of columns
                    for (let i = 0; i < trimmedLines.length; i++) {
                        const line = trimmedLines[i];
                        // Split line by comma, but considering quoted fields
                        const fields = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);

                        if (fields.length !== columnCount) {
                            return `Line ${i + 1} does not have the correct number of columns. Expected ${columnCount}, but got ${fields.length}.`;
                        }
                    }
                },
                component: wrapFieldsWithMeta(({ field, input, meta }) => {

                    const data = meta.valid ? Papa.parse(input.value, { header: true, skipEmptyLines: true }).data : null
                    const columns = data ? Object.keys(data[0]) : null

                    console.log(data, columns)

                    return (
                        <div>
                            <textarea name="workSchedule.0.schedule" className="shadow-inner text-base px-3 py-2 text-gray-600 resize-y focus:shadow-outline focus:border-blue-500 block w-full border border-gray-200 focus:text-gray-900 rounded-md"
                                {...input}
                                style={{ minHeight: "160px" }}></textarea>

                            {
                                data && (<div className="mt-4 shadow-inner text-base p-2 text-gray-600 resize-y focus:shadow-outline focus:border-blue-500 block w-full border border-gray-200 focus:text-gray-900 rounded-md bg-white"><table className="table w-full">
                                    <thead>
                                        <tr>
                                            {columns && (columns.map((col) => (
                                                <th className="p-1 border border-gray-200 text-start" key={col} >
                                                    {col}
                                                </th>
                                            )))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && (data.map((row, rowIndex) => (
                                            <tr key={rowIndex}>
                                                {columns && (columns.map((col) => (
                                                    <td className="p-1 border border-gray-200" key={col}>
                                                        {row[col]}
                                                    </td>
                                                )))}
                                            </tr>
                                        )))}
                                    </tbody>
                                </table></div>)
                            }
                        </div>
                    )
                })
            }
        },
    ]
}

export const WorkSchedulesCollection = {
    name: "workSchedules",
    label: "Work Schedules",
    path: "config/work-schedules",
    format: "json",
    ui: {
        global: true,
        allowedActions: {
            create: false,
            delete: false,
        },
    },
    fields: [
        WorkScheduleField
    ]
}