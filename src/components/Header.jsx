import React from "react"
import { Link } from "react-router-dom"
import { IoMdSearch, IoIosVideocam } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  return (
    <header className="px-4 py-4 sm:px-4 flex justify-between items-center">
    <Link className="flex gap-[6px] ">
    <img src="/youtube.png" alt="" className="w-10 sm:w-12" />
    <h1 className="text-xl sm:text-2xl font-mono">Youtube</h1>
    </Link>

    <form className="flex border border-gray-400 rounded-[20px] overflow-hidden">
        <input type="text" className="bg-black px-2 py-1 sm:py-2 sm:px-5 border border-transparent focus:border-blue-800 rounded-l-[20px]" />
        <button className="px-3 bg-zinc-800 sm:px-4 sm:text-2xl hover:bg-zinc-600 transition duration-300"><IoMdSearch /></button>
    </form>
    <div className="flex gap-3 text-xl cursor-pointer max-sm:hidden">
    <FaBell className="hover:text-gray-400"/>
    <MdVideoLibrary className="hover:text-gray-400" />
    <IoIosVideocam className="hover:text-gray-400"/>

    </div>
    </header>
  )
}

export default Header