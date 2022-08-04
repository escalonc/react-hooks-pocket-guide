import React, { useReducer } from "react";
import Title from "../Title";

interface Todo {
  name: string;
  isDone: boolean;
}

const initialState = { name: "Demo Task", isDone: false } as Todo;

function reducer(state: any, action: { type: string }) {
  switch (action.type) {
    case "toggle":
      return { ...state, isDone: !state.isDone };
    default:
      throw new Error("action not supported");
  }
}

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Title>UseReducerDemo</Title>
      <button
        className="bg-indigo-900 text-white px-3 py-1"
        onClick={() => dispatch({ type: "toggle" })}
      >
        Toggle
      </button>
      <p>Task: {state.name}</p>
      <input type="checkbox" checked={state.isDone} readOnly />
    </div>
  );
}
