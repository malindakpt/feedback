// pieChart.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartData } from 'chart.js';
import { commonOptions } from './chartOptions';

interface PieChartProps {
  title: string;
  data: ChartData<'pie'>;
  showTitle?: boolean;
}

const PieChart: React.FC<PieChartProps> = ({ title, data, showTitle = true }) => {
  return <Pie data={data} options={commonOptions(showTitle, title)} />;
};

export default PieChart;
