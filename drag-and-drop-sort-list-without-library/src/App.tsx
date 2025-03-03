import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListSort from './pages/ListSort'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListSort />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
