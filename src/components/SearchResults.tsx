import { useDeferredValue, useMemo } from "react";

interface SearchResultsProps {
  search: string;
}

export default function SearchResults({ search }: SearchResultsProps) {
  const getResults = (search: string) => {
    return Array.from({ length: 100000 })
      .map((_, index) => `Search result ${index}`)
      .filter((result) => search && result.includes(search));
  };

  const deferredSearch = useDeferredValue(search);

  const results = useMemo(() => getResults(deferredSearch), [deferredSearch]);
  return (
    <div className="max-h-96 h-96 overflow-scroll">
      {results.map((result, index) => (
        <p key={index}>{result}</p>
      ))}
    </div>
  );
}
