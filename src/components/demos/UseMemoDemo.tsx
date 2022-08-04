import { useMemo, useState } from "react";
import Title from "../Title";

function longTask(seed: number) {
  const values = [];
  for (let i = 0; i < 10000; i++) {
    for (let j = 0; j < 1000; j++) {
      values.push(i + j * seed);
    }
  }

  return values.reduce((prev, current) => prev + current, 0);
}

export default function UseMemoDemo() {
  const [seed, setSeed] = useState(10);
  const [text, setText] = useState("");
  // const value = longTask(seed);
  const value = useMemo(() => longTask(seed), [seed]);

  return (
    <div>
      <Title>UseMemo</Title>
      <div>
        <label>
          Seed:
          <input
            className="block"
            type="number"
            onChange={(e) => setSeed(parseInt(e.target.value))}
            value={seed}
          />
        </label>
        <br />
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
      </div>

      <div className="max-h-96 overflow-scroll">
        {Array.from({ length: 1000 }).map((_, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
    </div>
  );
}
