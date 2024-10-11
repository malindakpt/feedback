import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Register the necessary components
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );
  
export const commonOptions = (showTitle: boolean, title: string) => ({
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: showTitle,
        text: title,
      },
    },
  });
  