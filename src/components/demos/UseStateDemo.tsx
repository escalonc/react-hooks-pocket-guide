import React, { useState } from "react";

export default function UseStateDemo() {
  const [value, setValue] = useState(0);
  return (
    <div className="text-center">
      <p>{value}</p>
      <button
        className="bg-indigo-900 text-white px-3 py-1"
        onClick={() => setValue(value + 1)}
      >
        +1
      </button>
    </div>
  );
}
