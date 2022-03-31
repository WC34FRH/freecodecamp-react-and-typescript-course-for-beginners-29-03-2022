import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ToDoList from "./components/ToDoList";
import { ToDo } from "./model";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    setToDos([...toDos, { id: Date.now(), toDo: toDo, isDone: false }]);
    setToDo("");
  };

  console.log(toDos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
      {/* {toDos.map((t) => (
        <li>{t.toDo}</li>
      ))} */}
    </div>
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
