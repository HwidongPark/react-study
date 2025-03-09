import { useState } from "react"
import styles from "./List.module.css"
import Item from "./ListItem/ListItem";
import { User as UserType } from "./UserTypes";

// react dnd
import { DndContext, closestCenter, DragEndEvent, DragOverlay, DragStartEvent,
  PointerSensor, TouchSensor, useSensor, useSensors,
  DragOverEvent,
} from '@dnd-kit/core';

import { SortableContext, verticalListSortingStrategy, horizontalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';

const data: UserType[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', sequence: 1 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', sequence: 2 },
  { id: 3, name: 'Alice Johnsom', email: 'alice@example.com', sequence: 3 },
]

export default function UserList() {

  // ========================================================================= Hook
  const [items, setItems] = useState<UserType[]>(data);  
  const [activeItem, setActiveItem] = useState<UserType | undefined>(undefined);

  // --------------------------------------- React DND 관련 Hook 정의 -----------------------------------------
  // ### sensor정의
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));


  // ========================================================================== 함수정의
  
  /**
   * List에서 item제거 함수
   * @param id 
   */
  const removeItem = (id: number) => {
    const updated = items
      .filter(item => item.id !== id)
      .map((item, index) => ({...item, sequence: index + 1}));
    
    setItems(updated);
  }

  /**
   * Drag 시작하면 발동하는 메서드
   * @param event 
   */
  const handleDragStart = (event: DragStartEvent) => {
    // event는 active, 를 갖고 있음
    const { active } = event;
    // console.log('drag start event = ', event);

    // active item 업데이트
    setActiveItem(items.find(item => item.id == active.id));
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { active, collisions } = event;
    const over = collisions?.[0];
    console.log('drag over event = ', event);

    // ### 만일 아무 요소 위에 있지 않은 상태로 drag가 끝났으면 return
    if (!over) {
      return
    }
    console.log('over = ', over);
    // const activeItem =items.find(item => item.sequence === active.id);
    const overItem = items.find(item => item.id === over.id);

    // ### drag 시작한 element와 drag가 끝났을 때 마우스가 위치해 있는 element가 동일한 경우 return
    if (!overItem) {
      return;
    }

    const activeIndex = items.findIndex(item => item.id === active.id);
    const overIndex = items.findIndex(item => item.id === over.id);

    if (activeItem?.id !== overItem.id) {
      
      setItems(prevItems => {
        console.log('prevItems = ', prevItems);
        // ### 새로운 배열 복사본 만들기
        let newItems = [...prevItems];

        // ### 두 요소 위치 바꾸기
        [newItems[activeIndex], newItems[overIndex]] = [newItems[overIndex], newItems[activeIndex]];

        // 순서 업데이트
        newItems = newItems.map((item, index) => ({ ...item, sequence: index + 1 }));
        console.log('newItems = ', newItems);

        // const newItems = arrayMove(prevItems, activeIndex, overIndex);
        return newItems;
      })
      // setActiveItem(undefined);
    }

  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    // console.log('drag end event = ', event);

    // ### 만일 아무 요소 위에 있지 않은 상태로 drag가 끝났으면 return
    if (!over) {
      return
    }

    // const activeItem =items.find(item => item.sequence === active.id);
    const overItem = items.find(item => item.id === over.id);

    // ### drag 시작한 element와 drag가 끝났을 때 마우스가 위치해 있는 element가 동일한 경우 return
    if (!overItem) {
      return;
    }

    const activeIndex = items.findIndex(item => item.id === active.id);
    const overIndex = items.findIndex(item => item.id === over.id);

    if (activeItem?.id !== overItem.id) {
      
      setItems(prevItems => {
        console.log('prevItems = ', prevItems);
        // ### 새로운 배열 복사본 만들기
        let newItems = [...prevItems];

        // ### 두 요소 위치 바꾸기
        [newItems[activeIndex], newItems[overIndex]] = [newItems[overIndex], newItems[activeIndex]];

        // 순서 업데이트
        newItems = newItems.map((item, index) => ({ ...item, sequence: index + 1 }));
        console.log('newItems = ', newItems);

        // const newItems = arrayMove(prevItems, activeIndex, overIndex);
        return newItems;
      })
    }

    setActiveItem(undefined);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User List</h1>
      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items}
          strategy={verticalListSortingStrategy}
        >
          {
            items.map(user => {
              return (
                <Item item={user} forceDragging={true} key={user.id} />
              )
            })
          }

          {/* DragOverLay는 Dragged되는 item이 어디에 갈지 알려줌??? 확인 필요 */}
          <DragOverlay
            adjustScale style={{
              transformOrigin: "0 0 "
            }}
          >
            {
              activeItem ? 
              (
                <Item item={activeItem} />
              ) : 
              null
            }
          </DragOverlay>
          
        </SortableContext>
      </DndContext>
    </div>
  )
}