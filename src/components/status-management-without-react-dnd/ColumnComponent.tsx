import React from "react";
import { Task } from "./taskTypes";
import TaskComponent from "./TaskComponent";

interface ColumnProps {
  columnId: string;
  columnName: string;
  tasks: Task[];
  moveTask: (taskId: string, newColumnId: string) => void;
}

const ColumnComponent: React.FC<ColumnProps> = ({
  columnId,
  columnName,
  tasks,
  moveTask,
}) => {
  // Handle drag over event to allow drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Prevent default behavior to allow drop
  };

  // Handle drop event and move task to this column
  const handleDrop = (e: React.DragEvent) => {
    // console.log(e.dataTransfer.getData("title"))
    // console.log(tasks)
    const taskId = e.dataTransfer.getData("taskId"); // Retrieve task ID
    moveTask(taskId, columnId); // Move task to this column
  };

  return (
    <div
      style={{
        flex: 1,
        padding: "16px",
        margin: "8px",
        border: "2px solid #ddd",
        backgroundColor: "#f0f0f0",
      }}
      onDragOver={handleDragOver} // Allow dragging over column
      onDrop={handleDrop} // Handle drop event
    >
      <h3>{columnName}</h3>
      <div>
        {tasks.map((task) => (
          <TaskComponent key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ColumnComponent;
