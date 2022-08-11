import { useDeferredValue, useMemo } from "react";
import { logTime } from "../utils";

interface SearchResultsProps {
  search: string;
}

export default function SearchResults({ search }: SearchResultsProps) {
  const getResults = (search: string) => {
    return Array.from({ length: 100000 })
      .map((_, index) => `Search result ${index}`)
      .filter((result) => search && result.includes(search));
  };

  const searchTerm = useDeferredValue(search);
  const results = useMemo(() => getResults(searchTerm), [searchTerm]);

  // const searchTerm = search;
  // const results = getResults(searchTerm);

  return (
    <div>
      <p className="my-4 text-blue-800 font-bold" id="rendering-time">
        Rendering time:{" "}
      </p>
      <div className="max-h-96 h-96 overflow-scroll">
        {results.map((result, index) => (
          <p key={index}>{result}</p>
        ))}
      </div>
    </div>
  );
}
