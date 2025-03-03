import { useState } from "react";
import { TreeNodeProps, TreeViewProps } from "./types";
import { useTreeState } from "../contexts/TreeContext";


/**
 * Tree의 각각의 node를 보여주는 component
 * @param param0 
 * @returns 
 */
const TreeNode = ({ treeNode }: TreeNodeProps) => {
  // const [ isOpen, setIsOpen ] = useState(false);
  const { dispatch } = useTreeState();
  
  // const toggle = () => setIsOpen(!isOpen);
  const toggle = () => {
    dispatch({
      type: "TOGGLE_NODE",
      id: treeNode.id,
      isExpanded: !treeNode.isExpanded
    });
  }
  
  return (
    <div className="tree-node" style={{ color: `${treeNode.isHighlight ? 'red' : 'black'}` }}>
      {
        // children이 있다면 tree 재귀로 정의
        treeNode?.children?.length && (
          <>
            <button className="toggle-icon" onClick={toggle}>
              {/* { isOpen ? "↓" : "↑" } */}
              { treeNode.isExpanded ? "↓" : "↑" }

            </button>
            <span>{treeNode.name}</span>
            {/* TreeNode로 재귀할 수도 있고 그냥 단순히 TreeView에 children넣어도 된다!! */}
            {/* 왜 이 생각을 못했을까? */}
            {/* { isOpen && treeNode.children.map(child => (
              <TreeNode key={child.id} treeNode={child} />
            ))} */}

            {
              // TreeNode를 재귀해도 되지만 그냥 TreeView하나에 넣어도 논리가 성립됨
              // isOpen &&
              // <TreeView data={treeNode.children} />

              treeNode.isExpanded &&
              <TreeView data={treeNode.children} />
            }
          </>
        )
      }

    </div>
  )
}


/**
 * Tree전체를 보여주는 컴포넌트트
 * @param param0 
 * @returns 
 */
export default function TreeView({ data }: TreeViewProps) {
  console.log(`TreeView = ${JSON.stringify(data)}`);
  return (
    <div className="tree-view">
      {
        data.map(treeNode => {
          return (
            <TreeNode key={treeNode.id} treeNode={treeNode} />
          )
        })
      }

    </div>
  )

}