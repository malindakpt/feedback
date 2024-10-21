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

export interface chartData {
  chartType: 'bar' | 'line' | 'pie' | 'doughnut' | 'radar' | 'polarArea';
  labels: string[];
  datasets: Array<{
    label?: string;
    data: number[];
    backgroundColor?: string|string[];
    borderColor?: string|string[];
    borderWidth?: number;
    fill?: boolean
  }>;
}

export interface ChartProps {
  data: chartData;
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
      text: '',
    },
  },
};

const Charts: React.FC<ChartProps> = ({ data, options }) => {
  const { chartType } = data;

  const chartOptions =  {...defaultOptions, ...options};

  return <Chart type={chartType} data={data} options={chartOptions} />;
};

export default Charts;