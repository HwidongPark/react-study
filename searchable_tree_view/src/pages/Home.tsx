import { Link } from "react-router-dom"

export function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <div>
        Move to
        <ul>
          <li>
            <Link to="/treeView">Tree View</Link>
          </li>
        </ul>
        
      </div>
    </>
  )
}