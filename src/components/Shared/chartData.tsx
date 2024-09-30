import React, { useState } from 'react';
import ChartComponent from '../ChartComponent/chartComponent';

interface ParentProps {
  title?: string; // Optional prop for the title
  data?: { x: number; y: number }[]; // Optional prop for the initial data
}

const ParentComponent: React.FC<ParentProps> = ({ title = '', data: initialData = [] }) => {
    const [xValues, setXValues] = useState('');
    const [yValues, setYValues] = useState('');
    const [data, setData] = useState<{ x: number; y: number }[]>(initialData);
  
    const handleSubmit = () => {
      const xArray = xValues.split(',').map((value) => parseFloat(value.trim()));
      const yArray = yValues.split(',').map((value) => parseFloat(value.trim()));
  
      if (xArray.length !== yArray.length) {
        alert('The number of X and Y values must be the same!');
        return;
      }
  
      const chartData = xArray.map((x, index) => ({ x, y: yArray[index] }));
      const sortedData = chartData.sort((a, b) => a.x - b.x); // Sorting by X values
  
      setData(sortedData);
    };
  
    return (
      <div>
        <h1>Chart Data Entry</h1>

        {/* Render the title prop */}
        {title && <h2>{title}</h2>}
  
        <input
          type="text"
          placeholder="Enter X values (comma separated)"
          value={xValues}
          onChange={(e) => setXValues(e.target.value)}
        />
  
        <input
          type="text"
          placeholder="Enter Y values (comma separated)"
          value={yValues}
          onChange={(e) => setYValues(e.target.value)}
        />
  
        <button onClick={handleSubmit}>Submit</button>
  
        {data.length > 0 && <ChartComponent title={title} data={data} />}
      </div>
    );
};

export default ParentComponent;
