import { BrowserRouter } from "react-router-dom"
import LineGraph from "./components/Line"
import Router from "./routes/Router"

function App() {
  // react chart js를 이용하려면 2개의 패키지를 다운로드 받아야 함
  // 1) chart.js
  //-> npm install chart.js
  // 2) react-chartjs-2
  //-> npm install react-chartjs-2
  
  return (
    <div>
      <Router />
    </div>
  )
}

export default App
