import React from "react";

export const TaskList = ({ tasks, onDelete }) => {
  if (tasks.length === 0) {
      return <p className="empty-message">No hay tareas, añadir tareas</p>;
      }
  return (
    <>
      {tasks.map((task, index) => (
        <div className="content-list" key={index}>
          <p className="content-list-p"><i className="fa-solid fa-arrow-right"></i> {task}</p>
          <button className="content-list-btn" onClick={() => onDelete(index)}>x</button>
        </div>
      ))}
    </>
  );
};