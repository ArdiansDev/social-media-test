import React from "react";
import { HomeIcon } from "@heroicons/react/solid";

export default function Header({ setPage }) {
  return (
    <div>
      <button
        onClick={() => {
          setPage("home");
        }}
      >
        <HomeIcon className="h-8 text-gray-900" />
      </button>
    </div>
  );
}
