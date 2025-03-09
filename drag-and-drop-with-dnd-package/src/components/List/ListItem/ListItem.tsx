import { User as UserType } from "../UserTypes";
import styles from  "./ListItem.module.css";

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';;
import { faBars, faLineChart } from "@fortawesome/free-solid-svg-icons";

// react dnd
import { useSortable } from "@dnd-kit/sortable";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import {CSS} from '@dnd-kit/utilities';


type UserItemProps = {
  item: UserType;
  forceDragging?: boolean;
}

export default function Item({ item, forceDragging }: UserItemProps) {
  
  const { id, name, email, sequence } = item;
  
  // ================================================================================ Hook
  const {
    attributes,
    isDragging, //-> 문서에 없음
    listeners,
    setNodeRef,
    setActivatorNodeRef,  //-> 문서에 없음
    transform,
    transition,
  } = useSortable({id: item.id});

  const parentStyles = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
    opacity: isDragging ? "0.4" : "1",
    // lineHeight: "4",
  };

  const draggableStyles = {
    cursor: isDragging || forceDragging ? "grabbing" : "grab",
  }

  return (
    // useSortable의 setNodeRef로 element정의
    <div
      className={styles.container}
      ref={setNodeRef}
      style={parentStyles}
    >
      <div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.email}>{email}</p>
      </div>
      <div className={styles.sortIconContainer}>
        <div style={draggableStyles} {...attributes} {...listeners} >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  )
}