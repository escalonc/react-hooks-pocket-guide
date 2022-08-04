import React, { useState } from "react";
import SearchResults from "../SearchResults";
import Title from "../Title";

export default function UseDeferredValue() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Title>UseDeferredValue</Title>
      <br />
      <label>Search: </label>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <br />
      <SearchResults search={search} />
    </div>
  );
}
