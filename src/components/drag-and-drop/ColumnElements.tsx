import React from 'react';
import './drag-drop.css';
import { Task } from './taskTypes';
import DragElement from './DragElement';

interface ColumnProps {
    columnId: string;
    columnName: string;
    columnColor: string;
    tasks: Task[];
    moveTask: (taskId: string, newColumnId: string) => void;
}

const ColumnElements: React.FC<ColumnProps> = ({
    columnId,
    columnName,
    columnColor,
    tasks,
    moveTask,
}) => {
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault(); // Allow dragging over column
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const taskId = e.dataTransfer.getData("taskId"); // Retrieve task ID
        moveTask(taskId, columnId); // Move task to the color column
    };

    return (
        <div
            className="column"
            style={{ backgroundColor: columnColor }}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <h3>{columnName}</h3>
            <div className="item-boxes">
                {tasks.map((task) => (
                    <DragElement key={task.id} task={task} color={task.color}/>
                ))}
            </div>
        </div>
    );
};

export default ColumnElements;
