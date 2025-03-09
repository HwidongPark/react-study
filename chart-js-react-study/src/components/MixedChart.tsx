import { Chart } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions, // type위해 import
  
} from 'chart.js';   // 그래프에 필요한 모든 individual parts들을 chart.js에서 가져옴
import { mixedChartData } from '../fakeData';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,  // Tooltip은 마우스 차트에 올렸을 때 해당 데이터 정보 보여주는것임
  Legend,   // Legend는 차트 위에 어떤 색 라인이 어떤 데이터인지 표시해주는 것임
);  // Chart.js의 Chart에 요소들을 register함


export default function MixedChart() {
  const options: ChartOptions = {
    scales : {
      y: {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Hwidong's Steps",
        }
        
      },
      y1: {
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "Jenna's Steps",
        },
        grid: {
          drawOnChartArea: false, // 오른쪽 y축 격자를 제거하여 시각적으로 구분
        },
      }
    },
  }

  return (
    <Chart type="bar" options={options} data={mixedChartData} />
  )
}