import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { ToDo } from "../model";
import SingleToDo from "./SingleToDo";
import "./styles.css";

interface Props {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  completedToDos: ToDo[];
  setCompletedToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({
  toDos,
  setToDos,
  completedToDos,
  setCompletedToDos,
}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="ToDosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {toDos.map((todo, index) => (
              <SingleToDo
                index={index}
                toDo={todo}
                toDos={toDos}
                key={todo.id}
                setToDos={setToDos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="ToDosRemove">
        {(provided, snapshot) => (
          <div
            className={`todos remove ${
              snapshot.isDraggingOver ? "dragcomplete" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Tasks</span>
            {completedToDos.map((todo, index) => (
              <SingleToDo
                index={index}
                toDo={todo}
                toDos={completedToDos}
                key={todo.id}
                setToDos={setCompletedToDos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ToDoList;
