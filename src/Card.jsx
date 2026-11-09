import React, { useState } from "react";

function Card(props) {
  const [text, setText] = useState("");

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleAddTask() {
    if (text.trim() === "") return;
    props.onAddTask(props.id, text);
    setText("");
  }

  return (
    <div className="card">
      <div className="card-top">
        <span className="card-header5">{props.platformTag}</span>
        <span className={props.isStatus ? "status done-badge" : "status"}>
          {props.isStatus ? "✔️ Done" : "⏳ Pending"}
        </span>
      </div>
      <h2 className="card-header2">{props.title}</h2>

      <div className="add-input">
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Add Task"
        />
        <button className="add-btn" onClick={handleAddTask}>Add</button>
      </div>

      <ul>
        {props.tasks.map((task, index) => (
          <li key={index}>
            <div className="task-row">
              <span>{task}</span>
              <button
                className="remove-task"
                onClick={() => props.onRemoveTask(props.id, index)}
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>

      <p>{props.date}</p>
      <div className="btn">
        <button
          className="done"
          disabled={props.isStatus}
          onClick={() => props.onDone(props.id)}
        >
          {props.isStatus ? "Done" : "Mark Done"}
        </button>
        <button className="delete" onClick={() => props.onDelete(props.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;