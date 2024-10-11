import React from 'react';
import { Line } from 'react-chartjs-2';
import { commonOptions } from './chartOptions';

interface LineChartProps {
  title: string;
  data: any;
  showTitle?: boolean;
}

const LineChart: React.FC<LineChartProps> = ({ title, data, showTitle = true }) => {
  return <Line data={data} options={commonOptions(showTitle, title)} />;
};

export default LineChart;
