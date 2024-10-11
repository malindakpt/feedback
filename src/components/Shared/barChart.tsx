// barChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData } from 'chart.js';
import { commonOptions } from './chartOptions';

interface BarChartProps {
  title: string;
  data: ChartData<'bar'>;
  showTitle?: boolean;
}

const BarChart: React.FC<BarChartProps> = ({ title, data, showTitle = true }) => {
  return <Bar data={data} options={commonOptions(showTitle, title)} />;
};

export default BarChart;
