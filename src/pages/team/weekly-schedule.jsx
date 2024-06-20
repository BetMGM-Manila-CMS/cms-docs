import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import { workSchedule } from "@site/config/work-schedules/index.json"
import { displayRangeDate } from "@site/utils/date.js"
import Papa from 'papaparse';

export default function () {
    const { siteConfig } = useDocusaurusContext();

    const params = location.search ? location.search.replace('?', '').split('&').reduce((params, param) => {
        const [key, value] = param.split("=")
        params[key] = value
        return params
    }, {}) : {}
    const { start, end } = params    

    const sortedWorkSchedule = workSchedule.sort((a, b) => new Date(a.startDay) - new Date(b.startDay));
    const schedule = end && start ? sortedWorkSchedule.find(schedule => schedule.startDay === start && schedule.endDay === end) : sortedWorkSchedule[0]
    const tableData = schedule.schedule ? Papa.parse(schedule.schedule, { header: true, skipEmptyLines: true }).data : null
    const tableColumns = tableData ? Object.keys(tableData[0]) : null

    const cellColorClass = (value) => {
        if (value === 'Vacation') {
            return 'dark:bg-green-700 bg-green-400'
        } else if (value === 'WFH') {
            return 'dark:bg-cyan-700 bg-cyan-400'
        } else if (value === 'WFO') {
            return 'dark:bg-amber-700 bg-amber-400'            
        }

        return ''
    }

    return (
        <Layout title="Team" description="All things about the team, weekly schedules, monthly assignments and learn more about every one in the team.">
            <section
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/dlfu36fiw/image/upload/v1718701454/team-hero-bg_kbpnoz.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed"
                }}
                className="bg-white dark:bg-[#333333] bg-cover bg-blend-multiply bg-fixed"
            >
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-primary text-white inline-flex">
                        Weekly Schedule
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
                        Explore everything there is to know about the team: from weekly schedules and monthly assignments to gaining insights into each team member's role and background.
          </p>

                    <details className="daisy-dropdown dropdown-start tracking-normal self-end mr-2 md:mr-4">
                            <summary className="daisy-btn daisy-btn-sm md:daisy-btn-md bg-primary text-white hover:bg-gray-600">
                                {displayRangeDate(schedule.startDay, schedule.endDay)}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                            </summary>
                            <ul className="p-2 daisy-shadow daisy-menu daisy-dropdown-content z-[1] bg-base-100 rounded-box w-52 mt-2 shadow">
                                {
                                    sortedWorkSchedule && (sortedWorkSchedule.map((schedule, index) => <li className="font-normal text-white" key={index}><Link to={`/team/weekly-schedule?start=${schedule.startDay}&end=${schedule.endDay}`}>{displayRangeDate(schedule.startDay, schedule.endDay)}</Link></li>))
                                }
                            </ul>
                        </details>
                </div>
            </section>
            <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="overflow-x-auto">
                <table className="daisy-table daisy-table-zebra table">
                    <thead>
                    <tr>
                        {tableColumns && (tableColumns.map((col) => <th>{col}</th>))}
                    </tr>
                    </thead>
                    <tbody>
                    {tableData && (tableData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {tableColumns && (tableColumns.map((col) => (
                                <td key={col} className={cellColorClass(row[col])}>
                                    {row[col]}
                                </td>
                            )))}
                        </tr>
                    )))}
                    </tbody>
                </table>
                </div>
            </section>

        </Layout>
    );
}
