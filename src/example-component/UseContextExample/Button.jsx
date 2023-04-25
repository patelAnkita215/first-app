import React from "react";
import { useEffect,useContext } from "react";

const ThemeContext = React.createContext(null);

const Button = () => {
    const { color, setColor } = useContext(ThemeContext);
  
    useEffect(() => {
      console.info("Context changed:", color);
    }, [color]);
  
    const handleClick = () => {
      console.info("handleClick");
      setColor(color === "blue" ? "red" : "blue");
    };
  
    return (
      <button
        type="button"
        onClick={handleClick}
        style={{ backgroundColor: color, color: "white" }}
      >
        toggle color in Child
      </button>
    );
  };

export default Button
export { ThemeContext }