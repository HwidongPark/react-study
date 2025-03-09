import { BrowserRouter, Link } from 'react-router-dom'
import './App.css'
import Router from './routers/Router'


function App() {


  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/dropzone">dropzone</Link></li>
      </ul>
      <Router />
    </BrowserRouter>
  )
}

export default App
