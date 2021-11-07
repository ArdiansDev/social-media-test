import { ArrowLeftIcon } from "@heroicons/react/solid";
import React from "react";
import { usePhotos } from "../hooks/hooks";

export default function Photos({ albumsID, setShow }) {
  const { data, isLoading } = usePhotos({ query: { albumId: albumsID } });
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
        <div className="grid grid-cols-4 gap-4">
          {data.map((photos) => (
            <div key={photos.id}>
              <img src={photos.url} alt="" />
              <p className="capitalize">{photos.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
