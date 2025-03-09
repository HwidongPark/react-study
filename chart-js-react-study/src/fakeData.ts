import { ChartData } from "chart.js"

export const lineChartData = {
  labels: [ // lineData에서 labels은 x축
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [ // datasets은 y축
    {
      label: "Steps by Hwidong",
      data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
      
      borderColor: "blue",  // border만 있어도 라인 차트에 색 표시 됨. 다만 Legend에서 테두리만 색이 있고 속이 비어보임
      backgroundColor: "blue",  // legend에서 색깔
      
      borderWidth: 5,
    },
    {
      label: "Steps by Jenna",
      data: [3000, 5000, 5500, 8800, 12100, 6000, 3400],
      borderColor: "red",
      backgroundColor: "red",
      borderWidth: 2,
    }
  ]
}


export const barChartData = {
  labels:[
    "Rent",
    "Groceries",
    "Utilities",
    "Entertainment",
    "Transportation"
  ],
  datasets: [
    {
      label: "Expenses",
      data: [1200, 300, 150, 180, 100],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
      ],
      // background color에 하나만 넣으면 전체 막대 그래프가 하나의 색으로 됨
      //-> 데이터마다 색 넣으면 막대마다 색 다름
      //-> 예를 들어 막대가 5개인데 색 2개만 넣으면, 해당 색깔들 번갈아 가면서 나옴.. 빨, 파, 빨, 파 이런식으로

      borderColor: [
        "rgba(255, 99, 132, 0.2)",
      ],
      borderWidth: 1,
    }
  ]
}



export const pieChartData = {
  labels: ["Facebook", "Instagram", "Twitter", "YouTube", "LinkedIn"],
  datasets: [
    {
      label: "Time Spent",
      data: [120, 60, 30, 90, 45],      
      backgroundColor: [
        "rgba(255, 99, 132, 0.9)",
        "rgba(54, 162, 235, 0.9)",
        "rgba(255, 206, 86, 0.9)",
        "rgba(75, 192, 192, 0.9)",
        "rgba(153, 102, 255, 0.9)",
      ],
      hoverOffset: 15,
    }
  ]
}


export const mixedChartData: ChartData<"bar" | "line"> = {
  labels: [ // lineData에서 labels은 x축
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [ // datasets은 y축
    {
      type: "line",
      label: "Steps by Hwidong",
      data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
      
      borderColor: "blue",  // border만 있어도 라인 차트에 색 표시 됨. 다만 Legend에서 테두리만 색이 있고 속이 비어보임
      backgroundColor: "blue",  // legend에서 색깔
      
      borderWidth: 1,
      fill: false,
      yAxisID: "y",
    },
    {
      type: "bar",
      label: "Steps by Jenna",
      data: [3000, 5000, 5500, 8800, 12100, 6000, 3400],
      borderColor: "red",
      backgroundColor: "red",
      borderWidth: 2,
      yAxisID: "y1"
    }
  ]
}