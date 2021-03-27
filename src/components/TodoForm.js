import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(()=>{inputRef.current.focus()})

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (<>
      <input
          type="text"
          placeholder="Update Task"
          value={input}
          name="text"
          className="todo-input edit"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo-button edit">Update Task</button> </>
        ) : (
            <><input
          type="text"
          placeholder="Enter Task"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo-button">Add Task</button></>)}
        
      </form>
    </div>
  );
}

export default TodoForm;
