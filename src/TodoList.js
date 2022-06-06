import React from "react";

function TodoList({ todos, handleDeleteTodo, handleEditTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <p>{todo.text}</p>{" "}
          <button onClick={() => handleEditTodo(todo)}>Edit</button>{" "}
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}

export default TodoList;
