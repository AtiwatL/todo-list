import React from "react";

function Form({ todo, setTodo, handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your todo"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />{" "}
      <button>Submit</button>
    </form>
  );
}

export default Form;
