import React, { useState } from "react";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";

export const Home = () => {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const AddTask = () => {
    if (newTask.trim() === "") return;
    setTaskList([...taskList, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (index) => {
    const updatedList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedList);
  };

  return (
    <div className="container">
      <TaskInput
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onAdd={AddTask}
      />
      <TaskList tasks={taskList} onDelete={handleDeleteTask} />
    </div>
  );
};