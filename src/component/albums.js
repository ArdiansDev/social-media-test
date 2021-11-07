import React, { useState } from "react";
import { useAlbums } from "../hooks/hooks";
import Photos from "./photos";

export default function Albums({ userID }) {
  const { data, isLoading } = useAlbums({ query: { userId: userID } });
  const [show, setShow] = useState(false);
  const [albumsID, setAlbumsID] = useState(1);

  //   console.log(albumId);
  if (isLoading) {
    return <>Loading</>;
  } else {
    return (
      <div>
        {show ? (
          <div>
            <Photos albumsID={albumsID} setShow={setShow} />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2">
            {data.map((albums) => (
              <button
                className="bg-red-300 rounded-lg font-bold text-left p-4 capitalize hover:bg-red-200"
                key={albums.id}
                onClick={() => {
                  setShow(!show);
                  setAlbumsID(albums.id);
                }}
              >
                <h1> {albums.title}</h1>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}
