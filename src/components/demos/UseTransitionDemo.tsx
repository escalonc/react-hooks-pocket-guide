import { useEffect, useMemo, useState, useTransition } from "react";
import Title from "../Title";

function getResults() {
  return Array.from({ length: 20000 }).map(
    (_, index) => `Search result ${index}`
  );
}

export default function UseTransitionDemo() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <Title>useTransition</Title>
      <div>
        <label>
          Search:
          <input
            className="block"
            type="text"
            onChange={(e) => {
              const value = e.target.value;
              setSearch(value);
              startTransition(() => {
                setResults(
                  getResults().filter(
                    (result) => value && result.includes(value)
                  )
                );
              });

              // setResults(
              //   getResults().filter((result) => value && result.includes(value))
              // );
            }}
            value={search}
          />
        </label>
        <br />
      </div>

      <div className="max-h-96 h-96 overflow-scroll">
        {isPending ? (
          <p>Loading</p>
        ) : (
          results.map((result, index) => <p key={index}>{result}</p>)
        )}
      </div>
    </div>
  );
}
