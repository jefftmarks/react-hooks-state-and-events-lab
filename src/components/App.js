import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  const appClass = isLightMode ? "App light" : "App dark"

  const handleToggleIsLightMode = () => {
    setIsLightMode(!isLightMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleIsLightMode} className={appClass}>{isLightMode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
