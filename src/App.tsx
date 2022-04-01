import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ToDoList from "./components/ToDoList";
import { ToDo } from "./model";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [completedToDos, setCompletedToDos] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    setToDos([...toDos, { id: Date.now(), toDo: toDo, isDone: false }]);
    setToDo("");
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    console.log(result);

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = toDos,
      complete = completedToDos;

    if (source.droppableId === "ToDosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index);
    }

    if (destination.droppableId === "ToDosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedToDos(complete);
    setToDos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
        <ToDoList
          toDos={toDos}
          setToDos={setToDos}
          completedToDos={completedToDos}
          setCompletedToDos={setCompletedToDos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;

// let name: string;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];

// let printName: (name: string) => never;

// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: "Piyush",
// };

// let lotsOfPeople: Person[];

// let personName: unknown;

// interface Person {
//   name: string,
//   age?: number,
// }

// interface Guy extends Person {
//   profession: string;
// }

// type X = {
//   a: string;
//   b: number;
// }

// type Y = X & {
//   c: string;
//   d: number;
// }

// let y: Y = {
//   c: "efdas",
//   d: 42,
// }
