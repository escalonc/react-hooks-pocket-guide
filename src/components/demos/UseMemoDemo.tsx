import { useMemo, useState } from "react";
import { logTime } from "../../utils";
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
  const t0 = performance.now();
  // const value = longTask(seed);
  const value = useMemo(() => longTask(seed), [seed]);
  const t1 = performance.now();
  logTime(t0, t1);

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
        <p className="my-4 text-blue-800 font-bold" id="rendering-time">
          Rendering time:{" "}
        </p>
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
