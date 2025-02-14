import React from 'react';
import { LineChart, BarChart, PieChart, ScatterChart } from '@mui/x-charts';

export type ChartType = 'line' | 'bar' | 'pie' | 'scatter';

export interface ScatterDataPoint {
  x: number;
  y: number;
}

export interface ChartDataset {
  label?: string;
  data: number[] | ScatterDataPoint[];  
  color?: string;
}

export interface ChartData {
  chartType: ChartType;
  xLabels: string[] | number[];
  datasets: ChartDataset[];
}

export interface ChartProps {
  data: ChartData;
  options?: {
    height?: number;
    width?: string | number;
    showLegend?: boolean;
    showGrid?: boolean;
    title?: string;
  };
}

const defaultOptions = {
  height: 300,
  width: '80%',
  showLegend: true,
  showGrid: true,
  title: '',
};

const Chart2: React.FC<ChartProps> = ({ data, options }) => {
  const {
    chartType,
    xLabels,
    datasets,
  } = data;

  const {
    height,
    width,
    showLegend,
    showGrid,
    title,
  } = { ...defaultOptions, ...options };

  const chartSettings = {
    grid: { vertical: showGrid, horizontal: showGrid },
    legend: { hidden: !showLegend },
  };

  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return (
          <LineChart
            height={height}
            series={datasets.map((dataset) => ({
              data: dataset.data as number[],
              label: dataset.label,
              color: dataset.color,
            }))}
            xAxis={[{
              data: xLabels,
              scaleType: 'point',
            }]}
            {...chartSettings}
          />
        );

      case 'bar':
        return (
          <BarChart
            height={height}
            series={datasets.map((dataset) => ({
              data: dataset.data as number[],
              label: dataset.label,
              color: dataset.color,
            }))}
            xAxis={[{
              data: xLabels,
              scaleType: 'band',
            }]}
            {...chartSettings}
          />
        );

      case 'pie':
        return (
          <PieChart
            height={height}
            series={[{
              data: xLabels.map((label, index) => ({
                id: label,
                value: (datasets[0].data as number[])[index],
                label: label.toString(),
              })),
              highlightScope: { faded: 'global', highlighted: 'item' },
            }]}
            legend={{ hidden: !showLegend }}
          />
        );

      case 'scatter':
        return (
          <ScatterChart
            height={height}
            series={datasets.map((dataset, datasetIndex) => ({
              data: (dataset.data as ScatterDataPoint[]).map((point, index) => ({
                x: point.x,
                y: point.y,
                id: `dataset-${datasetIndex}-point-${index}`,
              })),
              label: dataset.label,
              color: dataset.color,
            }))}
            xAxis={[{ min: 0 }]}
            yAxis={[{ min: 0 }]}
            {...chartSettings}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ width, height }}>
      {title && <h3 style={{ textAlign: 'center', margin: '10px 0' }}>{title}</h3>}
      {renderChart()}
    </div>
  );
};

export default Chart2;