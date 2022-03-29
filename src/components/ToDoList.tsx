import React from "react";
import { ToDo } from "../model";
import "./styles.css";

interface Props {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({ toDos, setToDos }: Props) => {
  return (
    <div className="todos">
      {toDos.map((toDo) => (
        <li>{toDo.toDo}</li>
      ))}
    </div>
  );
};

export default ToDoList;
