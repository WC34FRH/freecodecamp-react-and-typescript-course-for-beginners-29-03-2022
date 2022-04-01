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
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {toDos.map((todo) => (
              <SingleToDo
                toDo={todo}
                toDos={toDos}
                key={todo.id}
                setToDos={setToDos}
              />
            ))}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="ToDosRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Tasks</span>
            {completedToDos.map((todo) => (
              <SingleToDo
                toDo={todo}
                toDos={completedToDos}
                key={todo.id}
                setToDos={setCompletedToDos}
              />
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ToDoList;
