import "./App.css";
import TodoList from "./TodoList";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";


interface Itask{
  id: string;
  name:string;
  complete:boolean;

}

const LOCAL_STORAGE_KEY = "todoApp.todos";
function App() {
  const [name,setName] =useState("")
  const [todos, setTodos] = useState<Itask[]>([]);
  // const todoNameRef = useRef(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id : string) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if(todo)
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    // const name = todoNameRef.current?todoNameRef.current.value: "";
    // console.log(todoNameRef.current);
    // debugger;
    // if (name === "") return;

    setTodos((prevTodos) => {
      
      return [...prevTodos,{ id: uuidv4(), name: name, complete: false }];
    });
    setName("");
    
    // todoNameRef.current= null;
  }
  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input  value={name} type="text"  onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear complete</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
