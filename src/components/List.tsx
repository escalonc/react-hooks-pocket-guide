import React, { useEffect, useState } from "react";

interface ListProps {
  getItems: () => string[];
}

export default function List({ getItems }: ListProps) {
  const [items, setItems] = useState<string[]>([]);
  useEffect(() => {
    setItems(getItems());
  }, [getItems]);

  return (
    <div>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
