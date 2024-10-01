import React from 'react';
import ChartComponent from './chartComponent'; // Adjust the path based on your file structure
import { ChartType } from '../../Enums/chartTypes.enum'; // Adjust the path based on your file structure

const data = [
  { x: '1 Year', y: 5 },
  { x: '2 Year', y: 4 },
  { x: '3 Year', y: 7 },
  { x: '4 Year', y: 6 },
  { x: '5 Year', y: 9 },
];

const ChartDemo = () => {
  return (
    <div>
      <ChartComponent
        title="Rate of Kuliyapitiya Branch"
        data={data}
        chartType={ChartType.PIE}
      />
    </div>
  );
};

export default ChartDemo;
