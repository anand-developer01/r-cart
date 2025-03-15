import React, { useMemo, useState } from 'react';
import './drag-drop.css';
import { Task } from './taskTypes';
import DragElement from './DragElement';
import ColumnElements from './ColumnElements';

// Initial tasks
const initialTasks: Task[] = [
    { id: "1", title: "box-1", description: "Match color 1", status: "", isOnBox: false, color: "" },
    { id: "2", title: "box-2", description: "Match color 2", status: "", isOnBox: false, color: "" },
    { id: "3", title: "box-3", description: "Match color 3", status: "", isOnBox: false, color: "" },
    { id: "4", title: "box-4", description: "Match color 4", status: "", isOnBox: false, color: "" },
    { id: "5", title: "box-5", description: "Match color 5", status: "", isOnBox: false, color: "" },
    { id: "6", title: "box-6", description: "Match color 6", status: "", isOnBox: false, color: "" },
];

// Color columns
const columns = [
    { id: "Red color", name: "Red color", color: "red" },
    { id: "Blue color", name: "Blue color", color: "blue" },
    { id: "Green color", name: "Green color", color: "green" },
];

// Function to generate a random color for each task
const getRandomColor = () => {
    const colors = ['red', 'green', 'blue']; // Colors for the boxes
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

const AppDragDrop: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    // Handle task movement between columns
    const moveTask = (taskId: string, newColumnId: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, status: newColumnId, isOnBox: newColumnId === "" } // Reset status when moved back
                    : task
            )
        );
    };

    // console.log(tasks)

    // Assign random colors to tasks in columns-a
    const assignRandomColors = () => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                const tempColor = getRandomColor()
                return task.status === "" && !task.isOnBox
                    ? { ...task, description: `Box Color : ${tempColor}`, color: tempColor } // Assign random color to task if it is in columns-a and not already moved
                    : task
            }

            )
        );
    };

    // Trigger random color assignment when the component mounts
    React.useEffect(() => {
        assignRandomColors();
    }, []);

    const totalMovedBox = useMemo(() => {
        return tasks.filter(e => e.status === "").length
    },[tasks])

    

    React.useEffect(() => {
        if(totalMovedBox === 0){
            console.log(totalMovedBox)
        }
    }, [totalMovedBox]);


    return (
        <div className="column-box">
            {/* Tasks that are not on a box */}
            <div
                className="columns-a"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                    e.preventDefault();
                    const taskId = e.dataTransfer.getData("taskId");
                    moveTask(taskId, ""); // Move task back to its original box (empty status)
                }}
            >
                {tasks
                    .filter((task) => task.status === "") // Only show tasks with an empty status here
                    .map((task) => (
                        <DragElement key={task.id} task={task} color={task.color} />
                    ))}
            </div>

            {/* Color Columns */}
            <div className="columns-b">
                {columns.map((column) => {
                    const columnTasks = tasks.filter((task) => task.status === column.id);
                    return (
                        <ColumnElements
                            key={column.id}
                            columnId={column.id}
                            columnName={column.name}
                            columnColor={column.color}
                            tasks={columnTasks}
                            moveTask={moveTask}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default AppDragDrop;
