import React from 'react';
import { Chart } from 'react-chartjs-2';
import { commonOptions } from './chartOptions';

interface ChartComponentProps {
  title: string;
  data: any;
  showTitle?: boolean;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ title, data, showTitle = true }) => {
  const { chartType } = data;

  return <Chart type={chartType} data={data} options={commonOptions(showTitle, title)} />;
};

export default ChartComponent;
