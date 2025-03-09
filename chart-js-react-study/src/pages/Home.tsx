import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <ul>
        <li><Link to="/lineGraph">Line Graph</Link></li>
        <li><Link to="/barGraph">Bar Graph</Link></li>
        <li><Link to="/pieGraph">Pie Graph</Link></li>
        <li><Link to="/mixedGraph">Mixexd Graph</Link></li>
      </ul>
      <h1>Home Page</h1>
    </div>
  )
}