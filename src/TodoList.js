import React from "react";

function TodoList({ todos, handleDeleteTodo, handleEditTodo }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} <button onClick={() => handleEditTodo(todo)}>Edit</button>{" "}
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}

export default TodoList;
