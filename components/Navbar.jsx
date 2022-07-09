import React from "react";
import Image from "next/image";
import { HiUser } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between h-12 w-full p-4 sticky top-0 z-10">
      <div className="flex items-center cursor-pointer">
        <Image
          src="/images/logo1.jpeg"
          width={90}
          height={70}
          objectFit="contain"
          alt=""
        />
        <h1 className="text-sm font-bold">PM Tube</h1>
      </div>
      <div className="hidden lg:flex md:flex">
        <input
          placeholder="Search"
          className="placeholder:p-4 w-[400px] bg-slate-500 placeholder:text-white focus:outline-none"
        />
      </div>
      <div className="">
        <button className="flex items-center gap-x-2 px-2 border-2 border-solid border-blue-500 cursor-pointer text-sm">
          <HiUser /> SIGN IN
        </button>
      </div>
    </div>
  );
};

export default Navbar;
