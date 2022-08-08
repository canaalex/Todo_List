import "./App.css";
import TodoList from "./todoList";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./components/button/button";
import InputField from "./components/inputfield/inputField";

interface Itask {
  id: string;
  name: string;
  complete: boolean;
}

const LOCAL_STORAGE_KEY = "todoApp.todos";
function App() {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState<Itask[]>([]);
  // const todoNameRef = useRef(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id: string) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if (todo) todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    // const name = todoNameRef.current?todoNameRef.current.value: "";
    // console.log(todoNameRef.current);
    // debugger;
    // if (name === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    setName("");
    console.log("click");

    // todoNameRef.current= null;
  }
  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <div className="w-full h-screen bg-white">
        <div className="w-full h-20 bg-blue-800 "></div>
        <div className="bg-white shadow-xl max-w-lg mt-10 mx-auto">
          <h1 className=" w-full p-2 text-3xl text-white font-bold bg-blue-800 text-center">
            Todo List
          </h1>
          <div className="text-center p-10 bg-white">
            <div className="mt-4 flex">
              <InputField
                title="check"
                value={name}
                type="text"
                label="Add a new task"
                style="w-72 border-b-2 border-gray-500 text-black p-2"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {/* <input
                title="check"
                value={name}
                type="text"
                placeholder="Add a new task"
                className="w-72 border-b-2 border-gray-500 text-black"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              /> */}
              <Button
                style="bg-blue-800 hover:bg-blue-900 text-white ml-9 font-bold py-2 px-4 rounded"
                label="Add Todo"
                handleClick={handleAddTodo}
              />
            </div>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <div className="flex justify-between mt-10 items-center">
              <Button
                style="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                label="Clear complete"
                handleClick={handleClearTodos}
              />
              <div>
                {todos.filter((todo) => !todo.complete).length} left to do
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
