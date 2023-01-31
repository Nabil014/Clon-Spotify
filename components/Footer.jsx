import Link from "next/link";
import React from "react";
import {
  RiInstagramLine,
  RiTwitterFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-14">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-gray-200 mb-2">Compañía</h1>
        <Link href="/">
          <span className="text-sm text-gray-400 hover:underline hover:text-gray-200">
            Acerca de
          </span>
        </Link>
        <Link href="/">
          <span className="text-sm text-gray-400 hover:underline hover:text-gray-200">
            Empleo
          </span>
        </Link>
        <Link href="/">
          <span className="text-sm text-gray-400 hover:underline hover:text-gray-200">
            For the Record
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-gray-200 mb-2">Comunidades</h1>
        <Link href="/">
          <span className="text-sm text-gray-400 hover:underline hover:text-gray-200">
            Para artistas
          </span>
        </Link>
        <Link href="/">
          <span className="text-sm text-gray-400 hover:underline hover:text-gray-200">
            Desarrolladores
          </span>
        </Link>
        <Link href="/">
          <span className="text-sm text-gray-400 hover:underline hover:text-gray-200">
            Publicidad
          </span>
        </Link>
        <Link href="/">
          <span className="text-sm text-gray-400 hover:underline hover:text-gray-200">
            Inversionistas
          </span>
        </Link>
        <Link href="/">
          <span className="text-sm text-gray-400 hover:underline hover:text-gray-200">
            Proveedores
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-gray-200 mb-2">Compañía</h1>
        <Link href="/">
          <span className="text-sm text-gray-400 hover:underline hover:text-gray-200">
            Ayuda
          </span>
        </Link>
        <Link href="/">
          <span className="text-sm text-gray-400 hover:underline hover:text-gray-200">
            Aplicacion móvil gratuita
          </span>
        </Link>
      </div>
      <div className="gap-4 flex items-start mb-5">
        <Link href="/">
          <button className="p-2 rounded-full text-2xl bg-spotify-gray hover:bg-spotify-grayHover text-spotify-white">
            <RiInstagramLine />
          </button>
        </Link>
        <Link href="/">
          <button className="p-2 rounded-full text-2xl bg-spotify-gray hover:bg-spotify-grayHover text-spotify-white">
            <RiTwitterFill />
          </button>
        </Link>
        <a
          href="https://www.linkedin.com/in/nabil-allis/"
          target="_blank"
          className="p-2 rounded-full text-2xl bg-spotify-gray hover:bg-spotify-grayHover text-spotify-white"
        >
          <RiLinkedinBoxFill />
        </a>
      </div>
    </div>
  );
};

export default Footer;
