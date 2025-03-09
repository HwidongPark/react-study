// Pie Chart Component

import { Pie } from 'react-chartjs-2';   // 사용하고 싶은 그래프를 react-chartjs-2에서 가져옴
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  
  Title,
  Tooltip,
  Legend,
  TooltipItem,
  
} from 'chart.js';   // 그래프에 필요한 모든 individual parts들을 chart.js에서 가져옴

/*
Chart ~ BarElement까지는 필수로 사용해야 하는 것
Title ~ Legend는 차트에 표시할 요소들에 대한 선택사항들임
걍 이거 다 import해서 사용하는거 추천
*/

import { pieChartData } from '../fakeData';



ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,  // Tooltip은 마우스 차트에 올렸을 때 해당 데이터 정보 보여주는것임
  Legend,   // Legend는 차트 위에 어떤 색 라인이 어떤 데이터인지 표시해주는 것임
);  // Chart.js의 Chart에 요소들을 register함

export default function PieChart() {
  
  const options = {};

  // 만약 몇% 이런식으로 보여주고 싶으면 아래와 같이 options에서 label어떻게 보여줄지 설정할 수 있음
  // const options = {
  //   plugins: {
  //     tooltip: {
  //       callbacks: {
  //         label: function (tooltipItem: TooltipItem<"pie">) {
  //           const total = tooltipItem.dataset.data.reduce((acc, val) => acc + val, 0);
  //           const value = tooltipItem.raw as number;
  //           const percentage = ((value / total) * 100).toFixed(2); // 소수점 2자리까지 표시
  //           return `${percentage}%`;
  //         },
  //       },
  //     },
  //     legend: {
  //       display: true,
  //     },
  //   },
  // };
  
  return (
    <Pie options={options} data={pieChartData} />
  )
}