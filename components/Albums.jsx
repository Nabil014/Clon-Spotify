import Link from "next/link";
import React from "react";
import Card from "./Card";
const {dataEnfoque, dataPlaylist} = require("../data/data");

const Albums = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <Link
          href="/"
          className="text-2xl font-bold hover:underline text-gray-100"
        >
          Enfoque
        </Link>
        <Link
          href="/"
          className="uppercase tracking-[1px] font-bold text-xs hover:underline text-gray-400"
        >
          Mostrar todo
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 mb-10">
        {dataEnfoque.map((item) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-between mb-5">
        <Link
          href="/"
          className="text-2xl font-bold hover:underline text-gray-100"
        >
          Spotify Playlists
        </Link>
        <Link
          href="/"
          className="uppercase tracking-[1px] font-bold text-xs hover:underline text-gray-400"
        >
          Mostrar todo
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {dataPlaylist.map((item) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Albums;
