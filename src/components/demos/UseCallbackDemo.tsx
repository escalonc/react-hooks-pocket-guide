import { useCallback, useMemo, useState } from "react";
import List from "../List";
import Title from "../Title";

// const getItems = () => {
//   console.log("Getting items");

//   return [
//     "Recommended Product",
//     "Product X",
//     "Product Y",
//     `Product ${value}`,
//   ];
// };

export default function UseCallbackDemo() {
  const [value, setValue] = useState(1);
  const [text, setText] = useState("");

  const getItems = useCallback(() => {
    console.log("Getting items from API");

    return [
      "Recommended Product",
      "Product X",
      "Product Y",
      `Product ${value}`,
    ];
  }, [value]);

  return (
    <div>
      <Title>UseCallback</Title>
      <div>
        <label>
          Some text:
          <input
            className="block"
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </label>
        <br />
        <label>
          Value:
          <input
            className="block"
            type="number"
            onChange={(e) => setValue(parseInt(e.target.value))}
            value={value}
          />
        </label>
        <br />
      </div>

      <div className="max-h-96 overflow-scroll">
        <List getItems={getItems} />
      </div>
    </div>
  );
}
