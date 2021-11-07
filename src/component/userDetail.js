import React, { useState } from "react";
import Post from "./post";
import Albums from "./albums";
export default function UsersDetail({ userID, userData }) {
  const [tab, setTab] = useState(true);

  if (!userData) {
    return <></>;
  } else {
    const user = userData;
    return (
      <div>
        <div className="w-full flex flex-col items-center" key={user.id}>
          <div className="bg-gray-600 flex items-center justify-center w-20 h-20 text-5xl text-gray-100 rounded-full ">
            {user.name.slice(0, 1)}
          </div>
          <h1 className="text-gray-600 font-bold">{user.name}</h1>
          <h1 className="ml-4 text-gray-500 ">{user.username}</h1>
          <h1 className="ml-4 text-gray-500 ">{user.email}</h1>
        </div>
        <div className="flex mb-4">
          <button
            className={
              "font-bold w-full text-center p-2 " +
              (tab ? "bg-blue-200" : "bg-blue-100")
            }
            onClick={() => {
              setTab(true);
            }}
          >
            Post
          </button>
          <button
            className={
              "font-bold w-full text-center p-2 " +
              (tab ? "bg-blue-100" : "bg-blue-200")
            }
            onClick={() => {
              setTab(false);
            }}
          >
            Album
          </button>
        </div>
        {tab ? (
          <Post userID={userID} userData={userData} />
        ) : (
          <Albums userID={userID} />
        )}
      </div>
    );
  }
}
