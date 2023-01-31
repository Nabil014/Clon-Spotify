import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiPlayFill } from "react-icons/ri";

const Card = ({ title, description, image }) => {
  console.log(title);
  return (
    <div>
      <Link href="/" className="place-content-center flex">
        <div className="bg-spotify-gray rounded-lg p-4 h-64 relative w-48 hover:bg-spotify-grayHover transition-all group">
          <div>
            <Image
              src={image}
              width={200}
              height={350}
              alt="img album"
              className="rounded drop-shadow-lg mx-auto mb-2"
            />
            <button className="text-2xl p-3 bg-spotify-green text-spotify-gray rounded-full absolute right-5 bottom-[5.5rem] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out hover:scale-105">
              <RiPlayFill />
            </button>
            <h1 className="text-gray-200 font-bold mb-1 ">{title}</h1>
            <span className="text-sm text-spotify-lightgray line-clamp-2">
              {description}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
