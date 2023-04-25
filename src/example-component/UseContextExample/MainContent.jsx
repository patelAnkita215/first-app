import React, { useState } from "react"
import Button from "./Button";
import { ThemeContext } from "./Button";

const MainContent = () => {
    const [color, setColor] = useState("blue");

    return (
      <ThemeContext.Provider value={{ color, setColor }}>
        <h1>React Context Demo</h1>
        included:
        <ul>
          <li>createContext</li>
          <li>useContext</li>
          <li>share state via Provider</li>
          <li>change value in child component</li>
        </ul>
        <h3>
          Color in Parent: <span style={{ color: color }}>{color}</span>
        </h3>
        <Button />
      </ThemeContext.Provider>
    );
}

export default MainContent
