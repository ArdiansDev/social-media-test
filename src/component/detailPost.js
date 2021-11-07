import { ArrowLeftIcon, PencilIcon, TrashIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useComments, useDeletePost, useEditPost } from "../hooks/hooks";

export default function DetailPost({ postId, setShow, postData }) {
  const { data, isLoading } = useComments({ id: postId });
  const [title, setTitle] = useState(postData?.title);
  const [body, setBody] = useState(postData?.body);
  const [showEdit, setShowEdit] = useState(true);

  const { mutate } = useDeletePost({ id: postId });
  const { mutate: Edit } = useEditPost({ id: postId });
  const DeletePost = () => {
    mutate({ id: postId });
    setShow(false);
  };
  const EditPost = () => {
    Edit({ payload, id: postId });
    setShow(false);
  };
  const payload = {
    title: title,
    body: body,
  };
  if (isLoading) {
    return <></>;
  } else {
    return (
      <div>
        <button
          className="bg-red-300 items-center flex rounded-lg w-full mb-4 font-bold text-left p-4 capitalize hover:bg-red-200"
          onClick={() => {
            setShow(false);
          }}
        >
          <ArrowLeftIcon className="h-4 mr-4" />
          <h1>back</h1>
        </button>

        <div className="grid grid-cols-1 gap-4">
          {showEdit ? (
            <div className="bg-white rounded-lg p-4 ">
              <h1 className="font-bold capitalize ">{postData?.title}</h1>
              <p>{postData?.body}</p>
              <div className="flex mt-4">
                <button className="flex" onClick={DeletePost}>
                  <TrashIcon className="h-6 mr-4" /> Delete
                </button>
                <button
                  className="flex ml-4"
                  onClick={() => {
                    setShowEdit(false);
                  }}
                >
                  <PencilIcon className="h-6 mr-4" /> Edit
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <input
                type="text"
                value={title}
                className="p-2 mb-4 h-max"
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
                className="bg-green-400 mt-4 text-white font-extrabold w-max rounded-lg p-4 flex items-center"
                onClick={EditPost}
              >
                <PencilIcon className="h-8 mr-4" />
                Edit Post
              </button>
            </div>
          )}
          <h1 className="text-red-300 font-bold text-lg">Comments</h1>
          {data.map((post) => (
            <div key={post.id} className="bg-gray-200 p-4 ml-6">
              <h1 className="font-semibold text-gray-800">{post.name}</h1>
              <p className="capitalize text-gray-700">{post.email}</p>
              <p className="">{post.body}</p>
              <div className="flex mt-4">
                <button className="flex" onClick={DeletePost}>
                  <TrashIcon className="h-6 mr-4" /> Delete
                </button>
                <button
                  className="flex ml-4"
                  onClick={() => {
                    setShowEdit(false);
                  }}
                >
                  <PencilIcon className="h-6 mr-4" /> Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
