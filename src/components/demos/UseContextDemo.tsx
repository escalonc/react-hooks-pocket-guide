import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import Title from "../Title";

export default function UseContextDemo() {
  const [_, toggleTheme] = useContext(ThemeContext);
  return (
    <div>
      <Title>UseContextDemo</Title>
      <button
        className="bg-indigo-900 text-white px-3 py-1"
        onClick={toggleTheme}
      >
        Toggle
      </button>
    </div>
  );
}
