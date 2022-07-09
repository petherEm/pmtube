import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "./Wrapper";
import { HiUser } from "react-icons/hi";
import {
  HiHome,
  HiDocumentSearch,
  HiCollection,
  HiPlay,
  HiBookOpen,
  HiFilm,
  HiChatAlt,
  HiColorSwatch,
  HiAdjustments
} from "react-icons/hi";

const Menu = () => {
  return (
    <div className="bg-black text-white w-40 p-2 flex flex-col">
      {/* Items */}
      <div className="mt-4 text-sm flex flex-col">
        <Link href="#">
          <a className="flex items-center hover:bg-slate-600 hover:rounded-lg p-2">
            <HiHome className="mr-2 text-lg" />
            Home
          </a>
        </Link>
        <Link href="#">
          <a className="flex items-center hover:bg-slate-600 hover:rounded-lg p-2">
            <HiDocumentSearch className="mr-2 text-lg" />
            Explore
          </a>
        </Link>
        <Link href="#">
          <a className="flex items-center hover:bg-slate-600 hover:rounded-lg p-2">
            <HiCollection className="mr-2 text-lg" />
            Subscription
          </a>
        </Link>
        <hr className="m-2 border-1 border-gray-600" />

        <Link href="#">
          <a className="flex items-center hover:bg-slate-600 hover:rounded-lg p-2">
            <HiPlay className="mr-2 text-lg" />
            Library
          </a>
        </Link>
        <Link href="#">
          <a className="flex items-center hover:bg-slate-600 hover:rounded-lg p-2">
            <HiBookOpen className="mr-2 text-lg" />
            History
          </a>
        </Link>
        <hr className="m-2 border-1 border-gray-600" />
        <button className="mt-2 mb-2 flex items-center gap-x-2 px-2 py-1 border-2 border-solid border-blue-500 cursor-pointer text-sm">
          <HiUser /> SIGN IN
        </button>
        <Link href="#">
          <a className="flex items-center hover:bg-slate-600 hover:rounded-lg p-2">
            <HiHome className="mr-2 text-lg" />
            Sports
          </a>
        </Link>
        <Link href="#">
          <a className="flex items-center hover:bg-slate-600 hover:rounded-lg p-2">
            <HiChatAlt className="mr-2 text-lg" />
            Gaming
          </a>
        </Link>
        <Link href="#">
          <a className="flex items-center hover:bg-slate-600 hover:rounded-lg p-2">
            <HiFilm className="mr-2 text-lg" />
            Movies
          </a>
        </Link>
        <Link href="#">
          <a className="flex items-center hover:bg-slate-600 hover:rounded-lg p-2">
            <HiHome className="mr-2 text-lg" />
            News
          </a>
        </Link>
        <Link href="#">
          <a className="flex items-center hover:bg-slate-600 hover:rounded-lg p-2">
            <HiColorSwatch className="mr-2 text-lg" />
            Live
          </a>
        </Link>
        <Link href="#">
          <a className="flex items-center hover:bg-slate-600 hover:rounded-lg p-2">
            <HiAdjustments className="mr-2 text-lg" />
            Settings
          </a>
        </Link>
        
      </div>
    </div>
  );
};

export default Menu;
