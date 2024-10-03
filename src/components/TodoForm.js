import React, { useState, useEffect, useRef } from "react";

function TodoForm({ addTodo, tasks }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  console.log(tasks);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const validate = () => {
    if (!value) {
      setError("Task is required");
      return false;
    } else if (tasks.some((task) => task.task === value)) {
      setError("Task alrady exist");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="What is the task today?"
        ref={inputRef}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
