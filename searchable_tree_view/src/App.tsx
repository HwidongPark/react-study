import { BrowserRouter, Route, Routes } from "react-router-dom"
import TreeViewPage from "./pages/TreeViewPage"
import { Home } from "./pages/Home"
import { TreeProvider } from "./contexts/TreeContext";
import "./styles.css";

function App() {

  return (
    <TreeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treeView" element={<TreeViewPage />} />
        </Routes>
      </BrowserRouter>
    </TreeProvider>
  )
}

export default App
