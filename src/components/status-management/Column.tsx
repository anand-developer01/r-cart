import React from "react";
import { useDrop } from "react-dnd";
import { Column, Task } from "./taskTypes";
import TaskComponent from "./Task";

interface ColumnProps {
  column: Column;
  tasks: Task[];
  moveTask: (task: Task, newStatus: string) => void;
}

const ColumnComponent: React.FC<ColumnProps> = ({ column, tasks, moveTask }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK", // Accept tasks (items of type 'TASK')
    drop: (item: Task) => {
      // Move the task when it is dropped
      moveTask(item, column.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(), // Collects whether the item is being dragged over the column
    }),
  }));

  return (
    <div
      ref={drop as any} // Set the drop target to this div
      style={{
        flex: 1,
        padding: "16px",
        margin: "8px",
        border: "2px solid #ddd",
        backgroundColor: isOver ? "#f0f0f0" : "#fff", // Change color on hover
      }}
    >
      <h3>{column.name}</h3>
      <div>
        {tasks.map((task) => (
          <TaskComponent key={task.id} task={task} moveTask={moveTask} />
        ))}
      </div>
    </div>
  );
};

export default ColumnComponent;
