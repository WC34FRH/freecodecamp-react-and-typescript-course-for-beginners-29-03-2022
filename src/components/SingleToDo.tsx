import React, { useState, useRef, useEffect } from "react";
import { ToDo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

type Props = {
  toDo: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const SingleToDo = ({ toDo, toDos, setToDos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(toDo.toDo);

  const handleDone = (id: number) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : toDo
      )
    );
  };

  const handleDelete = (id: number) => {
    console.log("Hi");
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setToDos(
      toDos.map((toDo) => (toDo.id === id ? { ...toDo, toDo: editToDo } : toDo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, toDo.id)}>
      {edit ? (
        <input
          value={editToDo}
          onChange={(e) => setEditToDo(e.target.value)}
          className="todos__single--text"
        />
      ) : toDo.isDone ? (
        <s className="todos__single--text">{toDo.toDo}</s>
      ) : (
        <span className="todos__single--text">{toDo.toDo}</span>
      )}

      <span className="todos__single--text">{toDo.toDo}</span>
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !toDo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(toDo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(toDo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleToDo;
