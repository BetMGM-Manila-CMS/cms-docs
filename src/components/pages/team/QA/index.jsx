// import { LineChart } from '@mui/x-charts/LineChart';
import { Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import team from "@site/config/team/index.json"
import {displayMonthDate} from "@site/utils/date.js"
import {useState} from "react"

const { qa } = team

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

export default function QA() {
    const [qaMonth, setQaMonth] = useState(qa[0].month)
    const qaScore = qa.find(qaItem => qaItem.month === qaMonth).score
    const qaScores = qa.map(({score}) => score).slice(0, 5).reverse()

    return (
        <section className="container relative mt-40 mb-8 lg:mb-16 relative">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:pb-16 lg:px-6 flex flex-col items-center relative z-10">
                <h2 className="text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-primary ">Our QA Score</h2>
                <details className="daisy-dropdown dropdown-start tracking-normal mr-2 md:mr-4">
                    <summary className="daisy-btn daisy-btn-sm md:daisy-btn-md bg-primary text-white hover:bg-gray-600">
                        {displayMonthDate(qaMonth)}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </summary>
                    <ul className="p-2 daisy-shadow daisy-menu daisy-dropdown-content z-[1] bg-base-100 rounded-box w-52 mt-2 shadow">
                        {
                            qa && (qa.map((qaItem, index) => <li className="font-normal text-white" key={index}><div onClick={() => setQaMonth(qaItem.month)}>{displayMonthDate(qaItem.month)}</div></li>))
                        }
                    </ul>
                </details>
            </div>
            <div className="md:columns-2">
                <div className="flex justify-center p-4">
                    <Line height={300} options={{
                        responsive: true,
                        scales: {
                            y: {
                                min: 100,
                                max: Math.min(...qaScores)
                            }
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: 'Last 5 Months QA Score'
                            }
                        }
                    }} 
                    data={{
                        labels: qa.map(({month}) => displayMonthDate(month)).slice(0, 5).reverse(),
                        datasets: [
                            {
                            label: 'QA Score',
                            data: qaScores,
                            borderColor: 'rgb(183, 162, 109)',
                            backgroundColor: 'rgba(183, 162, 109, 0.5)',
                            },
                        ],
                    }} />
                </div>
                <div className="flex justify-center p-4">
                    <Doughnut 
                        options={{
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Current Month\'s QA'
                                }
                            }
                        }} 
                        data={{
                            labels: ['QA Score'],
                            datasets: [
                            {
                                label: 'QA Score',
                                data: [qaScore, 100 - qaScore],
                                backgroundColor: [
                                'rgba(183, 162, 109, 0.2)', 
                                'rgba(183, 162, 109, 0)',
                                ],
                                borderColor: [
                                'rgba(183, 162, 109, 1)', 
                                'rgba(183, 162, 109, 0)',
                                ],
                                borderWidth: 1,
                            },
                            ],
                        }} 
                    />
                </div>
            </div>
        </section>
    )
}