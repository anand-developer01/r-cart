import React from "react";
import { useDrag } from "react-dnd";
import { Task } from "./taskTypes";

interface TaskProps {
  task: Task;
  moveTask: (task: Task, newStatus: string) => void;
}

const TaskComponent: React.FC<TaskProps> = ({ task, moveTask }) => {
  // Using `useDrag` hook from `react-dnd` to make the task draggable
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK", // Define item type for the drag operation
    item: task,   // The task itself will be the draggable item
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), // Collect the drag state
    }),
  }));

  // Click handler to move task to the new status
  const handleClick = (newStatus: string) => {
    moveTask(task, newStatus);
  };

  return (
    <div
      ref={drag as any} // Cast `drag` to `any` to bypass TypeScript error
      style={{
        opacity: isDragging ? 0.5 : 1, // Change opacity when dragging
        padding: "8px",
        border: "1px solid #ddd",
        marginBottom: "8px",
        cursor: "move", // Cursor style to indicate draggability
        backgroundColor: "#fff",
      }}
      onClick={() => handleClick("Done")} // Update status when clicked
    >
      <h4>{task.title}</h4>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskComponent;
