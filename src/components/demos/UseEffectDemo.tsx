import React, { useEffect, useState } from "react";
import Title from "../Title";

interface User {
  name: string;
}

async function fetchUsers() {
  return (await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json()) as User[];
}

export default function UseEffectDemo() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchUsers();
      setUsers(data);
    })();
  }, []);

  return (
    <div>
      <Title>Users</Title>
      <ul>
        {users.map(({ name }, index: number) => (
          <li key={index} className="list-disc">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
