import React from "react";

function EditForm({
  currentTodo,
  setIsEdit,
  setCurrentTodo,
  handleEditFormSubmit,
}) {
  return (
    <form className="form" onSubmit={handleEditFormSubmit}>
      <h1 style={{ textAlign: "center" }}>Edit Todo List</h1>
      <input
        type="text"
        placeholder="Edit your todo"
        name="editTodo"
        value={currentTodo.text}
        onChange={(e) =>
          setCurrentTodo({ ...currentTodo, text: e.target.value })
        }
      />{" "}
      <button type="submit">update</button>
      <button onClick={() => setIsEdit(false)}>cancle</button>
    </form>
  );
}

export default EditForm;
