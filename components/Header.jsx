import React from "react";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";

const Header = (props) => {
  const {setShowSidebar}=props
  return (
    <header className="md:ml-64 md:w-[calc(100%-256px)] bg-[#111111]/90 h-16 flex items-center w-full justify-between fixed top-0 left-0 z-40">
      <div className="md:hidden ml-4">
      <SlOptionsVertical onClick={()=>setShowSidebar(true)}/>
      </div>
      <div className="md:flex md:gap-8 hidden p-4 px-14 text-2xl text-gray-400 ">
        <Link href="#" className="hover:cursor-not-allowed">
          <AiOutlineLeft className="bg-black rounded-full p-1 box-content"/>
        </Link>
        <Link href="#" className="hover:cursor-not-allowed">
          <AiOutlineRight className="bg-black rounded-full p-1 box-content"/>
        </Link>
      </div>
      
      <div className="flex md:gap-8 gap-2 md:mr-8">
        <button className="text-gray-400 font-bold text-medium hover:scale-105 hover:text-spotify-white transition-all">
          Regístrate
        </button>
        <button className="bg-white rounded-full font-bold md:text-base text-spotify-black px-7 py-2 hover:scale-105 transition-all">
          Iniciar sesión
        </button>
      </div>
      
    </header>
  );
};

export default Header;
