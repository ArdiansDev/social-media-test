import React from "react";
import { usePost } from "../hooks/hooks";

export default function Post() {
  const { data, isLoading } = usePost();

  if (isLoading) {
    return <></>;
  } else {
    return (
      <div>
        {data.map((post) => (
          <div>{post.body}</div>
        ))}
      </div>
    );
  }
}
