import { PlusCircleIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { usePost, useCreatePost } from "../hooks/hooks";
import DetailPost from "./detailPost";

export default function Post({ userID, userData }) {
  const { data, isLoading } = usePost({ query: { userId: userID } });
  const { mutate } = useCreatePost({});

  const [show, setShow] = useState(false);
  const [postId, setpostId] = useState();
  const [postData, setPostData] = useState();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createPost = () => {
    mutate(payload);
  };
  const payload = {
    title: title,
    body: body,
    userId: userID,
  };

  if (isLoading) {
    return <></>;
  } else {
    return (
      <div>
        {show ? (
          <DetailPost setShow={setShow} postId={postId} postData={postData} />
        ) : (
          <div className="grid-cols-1 gap-4 grid">
            {/* <h1 className="font-bold w-full text-center">User Post</h1> */}
            <input
              type="text"
              value={title}
              className="p-2"
              placeholder="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <textarea
              value={body}
              className="p-2"
              placeholder="body"
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
            <button
              className="bg-green-400 text-white font-extrabold w-max rounded-lg p-4 flex items-center"
              onClick={createPost}
            >
              <PlusCircleIcon className="h-8 mr-4" />
              Create Post
            </button>
            {data.map((post) => (
              <div
                key={post.id}
                className=" bg-white min-h-28 h-max p-4 flex flex-col justify-between cursor-pointer"
                onClick={async () => {
                  await setShow(!show);
                  setpostId(post.id);
                  setPostData(post);
                }}
              >
                <h1 className="font-bold capitalize">{post.title}</h1>
                <p> {post.body}</p>
                <div className="flex items-center">
                  <div className="bg-gray-600 mr-2 flex items-center justify-center w-4 h-4 text-xs text-gray-100 rounded-full ">
                    {userData.name.slice(0, 1)}
                  </div>
                  <h1 className="text-gray-600">{userData.name}</h1>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
