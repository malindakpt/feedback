import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Tooltip, Legend, CartesianGrid, XAxis, YAxis, ResponsiveContainer
} from 'recharts';

interface RechartsProps {
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

const defaultProps = {
  showTitle: true,
};

const ChartRecharts: React.FC<RechartsProps> = ({ chartType, data, title, showTitle }) => {
  const formattedData = data.labels.map((label, index) => {
    const result: any = { label };
    data.datasets.forEach((dataset, i) => {
      result[`data${i}`] = dataset.data[index];
    });
    return result;
  });

  const commonElements = (
    <>
      <Tooltip />
      <Legend />
    </>
  );

  // Rendering logic encapsulated in a single variable
  let chartComponent: React.ReactElement | null = null;

  if (chartType === 'line') {
    chartComponent = (
      <LineChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        {commonElements}
        {data.datasets.map((dataset, index) => (
          <Line key={index} type="monotone" dataKey={`data${index}`} name={dataset.label} stroke="#8884d8" />
        ))}
      </LineChart>
    );
  } else if (chartType === 'bar') {
    chartComponent = (
      <BarChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        {commonElements}
        {data.datasets.map((dataset, index) => (
          <Bar key={index} dataKey={`data${index}`} name={dataset.label} fill="#8884d8" />
        ))}
      </BarChart>
    );
  } else if (chartType === 'pie') {
    chartComponent = (
      <PieChart>
        {commonElements}
        <Pie
          data={formattedData}
          dataKey="data0"
          nameKey="label"
          outerRadius={80}
          fill="#8884d8"
          label
        />
      </PieChart>
    );
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      <ResponsiveContainer width="100%" height={400}>
        {chartComponent || <div>No chart data available</div>}
      </ResponsiveContainer>
    </div>
  );
};

ChartRecharts.defaultProps = defaultProps;

export default ChartRecharts;
