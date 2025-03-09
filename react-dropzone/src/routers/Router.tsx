import { Route, Routes } from "react-router-dom";
import DropZonePage from "../pages/DropZonePage/DropZonePage";

export default function Router() {
  return (
    <Routes>
      <Route path="/dropzone" element={<DropZonePage />} />
    </Routes>
  )
}