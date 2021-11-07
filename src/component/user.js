import React from "react";
import { useUsers } from "../hooks/hooks";

export default function Users({ setUserID, setUserData, setPage }) {
  const { data, isLoading } = useUsers();
  if (isLoading) {
    return <></>;
  } else {
    return (
      <div className=" grid grid-cols-4 gap-4 pt-20">
        {data.map((user) => (
          <button
            className="flex flex-col rounded-lg justify-center items-center p-5 bg-red-300 hover:bg-blue-200"
            key={user.id}
            onClick={() => {
              setUserID(user.id);
              setUserData(user);
              setPage("detail");
            }}
          >
            <div className="bg-blue-600 flex items-center justify-center w-20 h-20 text-5xl text-gray-100 rounded-full ">
              {user.name.slice(0, 1)}
            </div>
            <h1 className="text-gray-600 font-bold">{user.name}</h1>
            <h1 className="text-gray-500 ">{user.username}</h1>
          </button>
        ))}
      </div>
    );
  }
}
