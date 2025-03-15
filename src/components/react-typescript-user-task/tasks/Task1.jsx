// const MyComponent = import('./DynamicComponent'); // Returns a Promise

import React, { useState, useEffect } from "react";
const App = () => {
  const [DynamicComponent, setDynamicComponent] = useState(null);
  useEffect(() => {
    import("./DynamicComponent").then((module) => {
      setDynamicComponent(() => module.default); // Set the component in state
    });
  }, []);

  return (
    <div>
      <h1>Dynamic Import Example</h1>
      {DynamicComponent ? <DynamicComponent /> : <p>Loading component...</p>}
    </div>
  );
};
export default App;
