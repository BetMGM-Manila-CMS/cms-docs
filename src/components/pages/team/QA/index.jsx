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
import { faker } from '@faker-js/faker';

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
  
export const lineOptions = {
    responsive: true,
    scales: {
        y: {
            min: 100,
            max: 90
        }
    }
};

export const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
        label: 'QA Score',
        data: [99.77, 99.80, 99.88, 99.90, 100],
        borderColor: 'rgb(183, 162, 109)',
        backgroundColor: 'rgba(183, 162, 109, 0.5)',
        },
    ],
};

const doughnutData = {
    labels: ['QA Score'],
    datasets: [
      {
        label: 'QA Score',
        data: [99.77, 0.2300000000],
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
  };

export default function QA() {
    return (
        <section className="container relative mt-40 mb-8 lg:mb-16 relative">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:pb-16 lg:px-6 flex flex-col items-center relative z-10">
                <h2 className="text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-primary ">Our QA For This Month</h2>
                <div className="inline-flex items-center justify-between px-4 py-1 text-sm text-gray-700 bg-gray-100 rounded-full mb-3 dark:bg-gray-800 dark:text-white whitespace-nowrap self-start mx-auto">
                    June
                </div>
            </div>
            <div className="md:columns-2">
                <div className="flex justify-center p-4">
                    <Line height={300} options={lineOptions} data={lineData} />
                </div>
                <div className="flex justify-center p-4">
                    <Doughnut data={doughnutData} />
                </div>
            </div>
        </section>
    )
}