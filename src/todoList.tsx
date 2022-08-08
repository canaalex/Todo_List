import React from 'react'
import Todo from './todo'

export default function todolist({todos,toggleTodo}) {
  return (
    todos.map(todo =>{
      return<Todo key ={todo.id} toggleTodo={toggleTodo} todo={todo}/>
  })
  );
}
