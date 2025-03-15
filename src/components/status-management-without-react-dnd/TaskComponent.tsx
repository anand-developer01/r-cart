import React from "react";
import { Task } from "./taskTypes";

interface TaskProps {
  task: Task;
}

const TaskComponent: React.FC<TaskProps> = ({ task }) => {
  // Handle the dragstart event and store the task's ID in the dataTransfer object
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("taskId", task.id); // Store the task ID to move it
  };

  return (
    <div
      draggable={true} // Make the task draggable
      onDragStart={handleDragStart} // Handle drag start event
      style={{
        padding: "8px",
        border: "1px solid #ddd",
        marginBottom: "8px",
        backgroundColor: "#fff",
        cursor: "move",
      }}
    >
      <h4>{task.title}</h4>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskComponent;
