import React, { useEffect, useState } from "react";
import "./App.css";

import TodoList from "./TodoList";
import Form from "./Form";
import EditForm from "./EditForm";

function App() {
  const [todo, setTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [todos, setTodos] = useState(() =>
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
        },
      ]);
    } else {
      alert("Please enter Todo");
      return;
    }
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(() => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  const handleEditTodo = (todo) => {
    setIsEdit(true);
    setCurrentTodo({ ...todo });
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });

    setIsEdit(false);
    setTodos(updatedItem);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Todo List</h1>

      {!isEdit ? (
        <Form handleSubmit={handleSubmit} setTodo={setTodo} todo={todo} />
      ) : (
        <EditForm
          setIsEdit={setIsEdit}
          handleEditFormSubmit={handleEditFormSubmit}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
        />
      )}

      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </div>
  );
}

export default App;
