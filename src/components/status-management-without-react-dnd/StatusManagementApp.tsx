import React, { useState } from "react";
import ColumnComponent from "./ColumnComponent";
import { Task } from "./taskTypes";

const initialTasks: Task[] = [
  { id: "1", title: "1", description: "Description of task 1", status: "To Do" },
  { id: "2", title: "2", description: "Description of task 2", status: "To Do" },
  { id: "3", title: "3", description: "Description of task 3", status: "In Progress" },
];

const columns = [
  { id: "To Do", name: "To Do" },
  { id: "In Progress", name: "In Progress" },
  { id: "Done", name: "Done" },
];

const StatusManagementApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // Handle task movement between columns
  const moveTask = (taskId: string, newColumnId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newColumnId } : task
      )
    );
  };

  return (
    <div style={{ display: "flex" }}>
      {columns.map((column) => {
        const columnTasks = tasks.filter((task) => task.status === column.id);
        // console.log(columnTasks)
        return (
            <ColumnComponent
              key={column.id}
              columnId={column.id}
              columnName={column.name}
              tasks={columnTasks}
              moveTask={moveTask}
            />
        );
      })}
    </div>
  );
};

export default StatusManagementApp;
