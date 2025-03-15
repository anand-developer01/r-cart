import React from 'react';
import { Task } from './taskTypes';

interface DragElementProps {
    task: Task;
    color: string;
}

const DragElement: React.FC<DragElementProps> = ({ task, color }) => {
    const dragHandler = (e: React.DragEvent) => {
        e.dataTransfer.setData("taskId", task.id); // Set the task ID to be transferred
    };

    return (
        <div
            draggable={true}
            className="task"
            style={{
                backgroundColor: color || "gray", // Use the random color passed as prop
            }}
            onDragStart={dragHandler}
        >
            <h4>{task.title}</h4>
            <p>{task.description}</p>
        </div>
    );
};

export default DragElement;
