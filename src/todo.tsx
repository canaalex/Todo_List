import React from "react";

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }
  return (
    <div>
      <label>
        <div className="flex text-lg mt-5 items-center border-b-2 p-1 border-gray-200">
          <input
            type="checkbox"
            className="h-5 w-5 rounded-lg vertical-align-middle "
            checked={todo.complete}
            onChange={handleTodoClick}
          />
          <div className="ml-3">{todo.name}</div>
        </div>
      </label>
    </div>
  );
}
