// import { LineChart } from '@mui/x-charts/LineChart';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    /* plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      },
    }, */
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
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
            <div className="columns-2">
                <div className="*:!text-primary">
                    {/* <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        width={500}
                        height={300}
                    /> */}
                    <Line options={options} data={data} />;
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="daisy-radial-progress text-primary" style={{ "--value": 100, "--size": "12rem" }} role="progressbar">
                        100%
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col justify-center items-center">
                    <div className="daisy-radial-progress text-primary" style={{ "--value": 100, "--size": "12rem" }} role="progressbar">
                        100%
                    </div>
                </div> */}
        </section>
    )
}