"use client";
import { ThemeToggle } from "..";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center shadow shadow-white-500/40 py-1 px-8 sticky top-0 z-2 bg-white dark:bg-[#111014]">
      <div className="flex items-center gap-4">
        <img
          src="https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/57/ef/25/57ef25ac-876f-3639-62e6-236ff3cc617a/source/256x256bb.jpg"
          alt="logo"
          className="w-12 h-12 border rounded-md"
        />

        <span className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-logoBlue  to-logoPurple ">
          Habbit Tracker
        </span>
      </div>

      <div className="">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
