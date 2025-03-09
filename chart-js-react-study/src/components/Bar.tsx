// Bar Chart Component

import { Bar } from 'react-chartjs-2';   // 사용하고 싶은 그래프를 react-chartjs-2에서 가져옴
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  
} from 'chart.js';   // 그래프에 필요한 모든 individual parts들을 chart.js에서 가져옴

/*
Chart ~ BarElement까지는 필수로 사용해야 하는 것
Title ~ Legend는 차트에 표시할 요소들에 대한 선택사항들임
걍 이거 다 import해서 사용하는거 추천
*/

import { barChartData, lineChartData } from '../fakeData';



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,  // Tooltip은 마우스 차트에 올렸을 때 해당 데이터 정보 보여주는것임
  Legend,   // Legend는 차트 위에 어떤 색 라인이 어떤 데이터인지 표시해주는 것임
);  // Chart.js의 Chart에 요소들을 register함

export default function BarChart () {

    
  // ### 원하는 옵션대로 찾아서 사용하면 됨
  // option은 걍 빈 객체여도 ㄱㅊ긴함
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "요일", // X축 라벨
        },
      },
      y: {
        title: {
          display: true,
          text: "걸음 수", // Y축 라벨
        },
      },
    },
  };

  const lineChartOptions = {
    scales: {
      x: {
        title: {
          display: true,  // display를 true로 해야함
          text: "요일", // X축 라벨
        },
      },
      y: {
        title: {
          display: true,
          text: "걸음 수", // Y축 라벨
        },
      },
    },
  };

  return (
    <div>
      <Bar options={options} data={barChartData} />
    </div>
  )
}