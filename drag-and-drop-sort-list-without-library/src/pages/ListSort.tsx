import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default  function ListSort() {

  const [ isDragging, setIsDragging ] = useState(false);
  const [ fruitItems, setFruitItems ] = useState(['Apple', 'Banana', 'Orange']);
  const [ newOrderFruitItems, setNewOrderFruitItems ] = useState(fruitItems);
  const [ newFruitItem, setNewFruitItem ] = useState('');

  // save reference for dragItem and dragOverItem
  const dragItem = useRef<number>(-1);
  const dragOverItem = useRef<number>(-1);

  // handle drag enter
  // drag enter는 drag된 요소가 특정 드롭 영역에 처음 들어왔을 때 발생하는 이벤트
  // ****** drag enter가 매우 중요한 요소임!!
  // const onDragEnter = (e: React.DragEvent<HTMLDivElement>, index: number) => {
  //   console.log("drag enter ", index);
  // }
  const onDragEnter = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setIsDragging(true);
    // ### drag enter시 화면상 정렬 새로 보이도록 수정
    dragOverItem.current = index;
    const copyFruitItems = [...fruitItems];
    const draggedItem = copyFruitItems.splice(dragItem.current, 1)[0];
    
    copyFruitItems.splice(dragOverItem.current, 0, draggedItem);
    console.log(`copyFruitItems = `, copyFruitItems);
    setNewOrderFruitItems(copyFruitItems);
  }

  /**
   * drag end되면 sort해주는 메서드드
   */
  const handleSort = () => {
    // duplicate items
    let copyFruitItems = [...fruitItems];
    console.log(`dragItem.current = `, dragItem.current);
    // 드래깅하는 요소 가져오기
    const draggedItemContent = copyFruitItems.splice(dragItem.current, 1)[0];
    
    // 위치 바꾸기
    copyFruitItems.splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = -1;
    dragOverItem.current = -1;

    // 순서 변경 업데이트하여 re-rendering
    setFruitItems(copyFruitItems);
    setNewOrderFruitItems(copyFruitItems);
  }
  

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFruitItem(e.target.value);
  }

  const handleAddItem = () => {
    const copyFruitItem = [...fruitItems];
    copyFruitItem.push(newFruitItem);
    setFruitItems(() => copyFruitItem);
    setNewFruitItem(() => '');
  }


  return (
    <div className="app">
      <h2>Fruit List</h2>
      <div className="input-group">
        <input type="text" name="fruitName" placeholder="e.g Banana" onChange={handleNameChange} />
        <button className="btn" onClick={handleAddItem}>Add item</button>
      </div>
      
      {/* List Contianer // TODO break into component */}
      <div className="list-container">
        { 
          !isDragging ?
          // ### Dragging 안하고 있는 경우우
          fruitItems.map((item, index: number) => {

            return (
              // draggable이라는 attribute추가하면 -> 드래그할 수 있도록 설정하는 속성
              // draggable="true", draggable="false" 와같이 설정 가능
              <div
                key={index}
                className="list-item"                
                draggable
                // onDragStart={(e) => { onDragStart(e, index) }}
                // onDragEnter={(e) => { onDragEnter(e, index)} }
                onDragStart={(e) => { dragItem.current = index }}
                onDragEnter={(e) => { onDragEnter(e, index) } }
                onDragEnd={handleSort}
                onDragOver={(e) => e.preventDefault()}
              >
                <FontAwesomeIcon icon={faBars} />
                <h3>{item}</h3>
              </div>
            )
          }) :
          // ### Dragging하고 있는 경우
          newOrderFruitItems.map((item, index) => {

            return (
              // draggable이라는 attribute추가하면 -> 드래그할 수 있도록 설정하는 속성
              // draggable="true", draggable="false" 와같이 설정 가능
              <div
                key={index}
                className="list-item"                
                draggable
                // onDragStart={(e) => { onDragStart(e, index) }}
                // onDragEnter={(e) => { onDragEnter(e, index)} }
                onDragStart={(e) => { dragItem.current = index }}
                onDragEnter={(e) => { onDragEnter(e, index) } }
                onDragEnd={handleSort}
                onDragOver={(e) => e.preventDefault()}
              >
                <FontAwesomeIcon icon={faBars} />
                <h3>{item}</h3>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}