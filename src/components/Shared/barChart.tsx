
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { commonOptions } from './chartOptions';

interface BarChartProps {
  title: string;
  data: any;
  showTitle?: boolean;
}

const BarChart: React.FC<BarChartProps> = ({ title, data, showTitle = true }) => {
  return <Bar data={data} options={commonOptions(showTitle, title)} />;
};

export default BarChart;
