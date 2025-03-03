// data import
import { useEffect, useState } from "react";
import { fetchData, TreeNodeType } from "../data"
import TreeView from "../components/TreeView";
import { useTreeState } from "../contexts/TreeContext";

export default function TreeViewPage () {

  // const [data, setData] = useState<TreeNodeType[]>([]);
  const { state, dispatch } = useTreeState();
  
  useEffect(() => {
    
    async function fetchDataAndSet() {
      const result = await fetchData();

      // setData(result);
      dispatch({ type: "INIT_DATA", data: result })
    }

    fetchDataAndSet();
    
  }, []);
  
  return (
    <div className="App">
      <input type="text" placeholder="Search..." onChange={(e) => {
        dispatch({ type: "SEARCH", query: e.target.value })
      }} />
      <button onClick={() => {
        dispatch({
          type: "EXPAND_ALL"
        })
      }}>Expand</button>
      <button onClick={() => {
        dispatch({
          type: "COLLAPSE_ALL"
        })
      }}>Collapse</button>
      <TreeView data={state || []} />

    </div>
  )
}