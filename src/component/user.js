import React from "react";
import { useUsers } from "../hooks/hooks";

export default function Users() {
  const { data, isLoading } = useUsers();
  console.log(data);
  if (isLoading) {
    return <></>;
  } else {
    return (
      <div>
        {data.map((user) => (
          <div className="flex items-center" key={user.id}>
            <h1 className="text-gray-600 font-bold">{user.name}</h1>
            <h1 className="ml-4 text-gray-500 ">{user.username}</h1>
          </div>
        ))}
      </div>
    );
  }
}
