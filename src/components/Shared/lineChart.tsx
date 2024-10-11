// lineChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartData } from 'chart.js';
import { commonOptions } from './chartOptions';

interface LineChartProps {
  title: string;
  data: ChartData<'line'>;
  showTitle?: boolean;
}

const LineChart: React.FC<LineChartProps> = ({ title, data, showTitle = true }) => {
  return <Line data={data} options={commonOptions(showTitle, title)} />;
};

export default LineChart;
