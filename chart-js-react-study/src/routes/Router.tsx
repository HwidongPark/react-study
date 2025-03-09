import { BrowserRouter, Route, Routes } from "react-router-dom";
import LineGraph from "../components/Line";
import Home from "../pages/Home";
import BarChart from "../components/Bar";
import PieChart from "../components/Pie";
import MixedChart from "../components/MixedChart";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/lineGraph" element= {<LineGraph />}  />
        <Route path="/barGraph" element= {<BarChart />}  />
        <Route path="/pieGraph" element={<PieChart />} />
        <Route path="/mixedGraph" element={<MixedChart />} />
      </Routes>
    </BrowserRouter>
  )
}