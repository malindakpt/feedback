import React from 'react';
import { Chart as ChartJS, LineElement, BarElement, ArcElement, Tooltip, Legend, LinearScale, CategoryScale, PointElement } from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

ChartJS.register(LineElement, BarElement, ArcElement, Tooltip, Legend, LinearScale, CategoryScale, PointElement);

interface ChartjsProps {
  chartType: 'line' | 'bar' | 'pie';
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor?: string | string[];
      borderColor?: string | string[];
      borderWidth?: number;
    }[];
  };
  title: string;
}

const Chartjs: React.FC<ChartjsProps> = ({ chartType, data, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {chartType === 'line' && <Line data={data} />}
      {chartType === 'bar' && <Bar data={data} />}
      {chartType === 'pie' && <Pie data={data} />}
    </div>
  );
};

export default Chartjs;
