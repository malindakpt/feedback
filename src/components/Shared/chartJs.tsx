import React from 'react';
import { Chart as ChartJS, LineElement, BarElement, ArcElement, Tooltip, Legend, Title, LinearScale, CategoryScale, PointElement } from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

ChartJS.register(LineElement, BarElement, ArcElement, Tooltip, Legend, Title, LinearScale, CategoryScale, PointElement);

interface ChartjsProps {
  chartType: 'line' | 'bar' | 'pie';
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
    }[];
  };
  title: string;
  showTitle?: boolean; 
}

const defaultOptions = (showTitle: boolean, title: string) => ({
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: showTitle,
      text: title,
    },
  },
});

const Chartjs: React.FC<ChartjsProps> = ({ chartType, data, title, showTitle = true }) => {
  const chartOptions = defaultOptions(showTitle, title);

  return (
    <div>
      {chartType === 'line' && <Line data={data} options={chartOptions} />}
      {chartType === 'bar' && <Bar data={data} options={chartOptions} />}
      {chartType === 'pie' && <Pie data={data} options={chartOptions} />}
    </div>
  );
};

export default Chartjs;
