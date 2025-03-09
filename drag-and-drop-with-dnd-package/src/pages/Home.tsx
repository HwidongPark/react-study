import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link to={"/dndSort"}>DND 라이브러리를 사용한 sort</Link>
        </li>
      </ul>
      <h1>Home Page</h1>
    </main>
  )
}