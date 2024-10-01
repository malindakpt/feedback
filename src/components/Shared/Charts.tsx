import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar,
  PieChart, Pie, Cell
} from 'recharts';
import { ChartType } from '../../Enums/chartTypes.enum'; // Enum import

type ChartData = {
  x: string;
  y: number;
};

export interface ChartProps {
  title: string;
  data: ChartData[];
  chartType: ChartType; // ChartType comes from the enum
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ChartComponent: React.FC<ChartProps> = ({ title, data, chartType }) => {
  return (
    <div>
      <h2>{title}</h2> {/* Title passed as a prop */}
      
      {chartType === ChartType.LINE && (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      )}

      {chartType === ChartType.BAR && (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="y" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      )}

      {chartType === ChartType.PIE && (
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie data={data} dataKey="y" nameKey="x" cx="50%" cy="50%" outerRadius={100}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ChartComponent;
