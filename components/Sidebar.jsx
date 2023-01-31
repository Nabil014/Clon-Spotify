import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiHome5Fill, RiSearchLine,RiCloseLine } from "react-icons/ri";
import { VscLibrary } from "react-icons/vsc";
import { CgAddR } from "react-icons/cg";
import { BsHeartFill } from "react-icons/bs";


const Sidebar = (props) => {
  const {showSidebar, setShowSidebar} = props;
  return (
    <div className={`bg-black fixed top-0 w-64 left-0 h-full p-4 flex flex-col justify-between ${showSidebar ? "left-0":"-left-full"} md:left-0 transition-all duration-300 z-50`}>
      <div className="absolute top-4 right-4 md:hidden p-2">
        <RiCloseLine className="text-xl" onClick={()=>setShowSidebar(false)}/>
      </div>
      <div>
        <div className="mt-3 mb-8 hover:cursor-pointer">
          <Image
            src="https://logodownload.org/wp-content/uploads/2016/09/Spotify-logo.png"
            alt="logo spotify"
            width={135}
            height={135}
          />
        </div>
        <nav>
          <ul className="flex flex-col gap-y-4 ">
            <Link href="#">
              <li className="flex items-center gap-4 text-sm font-bold hover:text-gray-100 transition-colors ">
                <RiHome5Fill className="text-2xl" /> Inicio
              </li>
            </Link>
            <Link href="#">
              <li className="flex items-center gap-4 text-sm font-bold hover:text-gray-100 transition-colors">
                <RiSearchLine className="text-2xl" /> Buscar
              </li>
            </Link>
            <Link href="#">
              <li className="flex items-center gap-4 text-sm font-bold mb-6 hover:text-gray-100 transition-colors">
                <VscLibrary className="text-2xl" /> Tu Biblioteca
              </li>
            </Link>
            <Link href="#">
              <li className="flex items-center gap-[14px] text-sm font-bold hover:text-gray-100 transition-colors">
                <CgAddR className="text-2xl" /> Crear playlist
              </li>
            </Link>
            <Link href="#">
              <li className="flex items-center gap-4 text-sm font-bold hover:text-gray-100 transition-colors">
                <BsHeartFill className="text-xl" /> Tus me gusta
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <div>
        <nav className="grid grid-cols-2 gap-y-4">
          <Link href="#">
            <ul className="text-[0.65rem]">
              <li>Legal</li>
            </ul>
          </Link>
          <Link href="#">
            <ul className="text-[0.65rem]">
              <li>Centro de privacidad</li>
            </ul>
          </Link>
          <Link href="#">
            <ul className="text-[0.65rem]">
              <li>Política de privacidad</li>
            </ul>
          </Link>
          <Link href="#">
            <ul className="text-[0.65rem]">
              <li>Cookies</li>
            </ul>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
