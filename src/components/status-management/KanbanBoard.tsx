// src/components/KanbanBoard.tsx
import React, { useState } from "react";
import { Task, Column } from "./taskTypes";
import ColumnComponent from "./Column";

const initialTasks: Task[] = [
  { id: 1, title: "Task 1", description: "Description of task 1", status: "To Do" },
  { id: 2, title: "Task 2", description: "Description of task 2", status: "In Progress" },
  { id: 3, title: "Task 3", description: "Description of task 3", status: "Done" },
];

const columns: Column[] = [
  { id: "To Do", name: "To Do" },
  { id: "In Progress", name: "In Progress" },
  { id: "Done", name: "Done" },
];

const KanbanBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const moveTask = (task: Task, newStatus: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === task.id ? { ...t, status: newStatus } : t
      )
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {columns.map((column) => (
        <ColumnComponent
          key={column.id}
          column={column}
          tasks={tasks.filter((task) => task.status === column.id)}
          moveTask={moveTask}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
