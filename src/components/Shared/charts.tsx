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
interface ChartComponentProps {
  title: string;
  data: any;
  showTitle?: boolean;
}

const commonOptions = (showTitle: boolean, title: string) => ({
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: showTitle,
      text: title,
    },
  },
});

const ChartComponent: React.FC<ChartComponentProps> = ({ title, data, showTitle = true }) => {
  const { chartType } = data;

  return <Chart type={chartType} data={data} options={commonOptions(showTitle, title)} />;
};

export default ChartComponent;
