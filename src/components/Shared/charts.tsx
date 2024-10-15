import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  data: any;
  options?: {
    responsive?: boolean,
    plugins?: {
      legend?: {
        display?: boolean,
      },
      title?: {
        display?: boolean,
        text?: string,
      },
    },
  };
}

const defaultOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'title',
    },
  },
};

const ChartComponent: React.FC<ChartProps> = ({ data, options }) => {
  const { chartType } = data;

  const chartOptions = options ? {...options , ...defaultOptions } : defaultOptions;

  return <Chart type={chartType} data={data} options={chartOptions} />;
};

export default ChartComponent;