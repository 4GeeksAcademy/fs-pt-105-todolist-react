import React from "react";

export const TaskInput = ({ value, onChange, onAdd }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onAdd();
    }
  };

  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="Add task"
      />
      <button className="input-btn" onClick={onAdd}>Add</button>
    </div>
  );
};