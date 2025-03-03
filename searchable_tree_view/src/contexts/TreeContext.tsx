import { createContext, useContext, useReducer } from "react";
import { TreeNodeType } from "../data";

const TreeStateContext = createContext(undefined as any);

/**
 * 모든 tree node를 열고, 닫는 함수
 * @param treeNodes 
 * @param isExpanded 
 * @returns 
 */
function toggleAllNodes(treeNodes: TreeNodeType[], isExpanded: boolean): TreeNodeType[] {
  return treeNodes.map(treeNode => {
    if (treeNode.children) {
      return {
        ...treeNode,
        isExpanded,
        children: toggleAllNodes(treeNode.children, isExpanded)
      };
    }

    return { ...treeNode, isExpanded };
  })
}


/**
 * 한 tree node를 열고, 닫는 함수
 * @param nodes 
 * @param id 
 * @param isExpanded 
 * @returns 
 */
function toggleNode(nodes: TreeNodeType[], id: number, isExpanded: boolean): any {
  return nodes.map(node => {
    // console.log(`isExpanded = ${isExpanded}`)
    if (node.id === id) {
      return { ...node, isExpanded };
    }

    if (node.children) {
      return { ...node, children: toggleNode(node.children, id, isExpanded) };
    }

    return node;
  })
}


function searchNodes(treeNodes: TreeNodeType[], query: string) {
  treeNodes.forEach(treeNode => {
    const shouldHighlight = query.length ?  treeNode.name.toLowerCase().includes(query.toLowerCase()) : false;
    treeNode.isHighlight = shouldHighlight;

    if (treeNode.children) {
      searchNodes(treeNode.children, query);
      // 이게 stack으로 끝까지 내려간다음 차곡차곡 나와서 자신의 바로 자식이 isHighlight = true인지 검사하기 때문에 잘 작동함
      if (treeNode.children.some(child => child.isHighlight)) {
        treeNode.isHighlight = true;
      }
    }
  });

  return treeNodes;
}

const treeReducer = (state: any, action: any) => {
  switch(action.type) {
    case "INIT_DATA":
      console.log("Reducer INIT_DATA 발동");
      return action.data;
    case "TOGGLE_NODE":
      return toggleNode(state, action.id, action.isExpanded);
    case "EXPAND_ALL":
      return toggleAllNodes(state, true);
    case "COLLAPSE_ALL":
      return toggleAllNodes(state, false);
    case "SEARCH":
      searchNodes(state, action.query);
      return [...state]
    default:
      return state;
  }
};


/**
 * Provider와 reducer를 같이 씀으로,
 * 여러 pages, component에서 state를 공유하는것 같은 효과를 줄 수 있음
 * @param param0 
 * @returns 
 */
export const TreeProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(treeReducer, []);

  return (
    <TreeStateContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </TreeStateContext.Provider>
  )
}


export const useTreeState = () => {
  const context = useContext(TreeStateContext)
  return context
}
