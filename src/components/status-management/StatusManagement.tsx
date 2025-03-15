// src/App.tsx
import React from "react";
import KanbanBoard from "./KanbanBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ padding: "20px" }}>
        <h1>Jira-like Task Status Change</h1>
        <h3>react-dnd-html5-backend</h3>
        <KanbanBoard />
      </div>
    </DndProvider>
  );
};

export default App;
