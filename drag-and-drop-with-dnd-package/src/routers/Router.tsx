import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import DndSort from '../pages/DndSort'

export default function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dndSort' element={<DndSort />} />
      </Routes>
    </BrowserRouter>
  )
}