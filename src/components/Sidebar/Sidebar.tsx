"use client";
import Link from "next/link";
import {
  GoHome,
  MdLabelOutline,
  BsArchive,
  FaRegTrashAlt,
  CgProfile,
} from "../../assets/icons";
import { useState } from "react";
import { CreateHabitModal } from "..";
const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <aside className="hidden  xl:h-128  xl:flex  flex-col justify-between w-2/6 sticky top-20 ">
        <div className=" flex flex-col gap-2  mx-8 my-2">
          <Link
            href="/"
            className=" flex items-center gap-4 text-lg mt-1 py-1.5  px-4 w-full"
          >
            <GoHome size="25" />
            <span>Home</span>
          </Link>
          <Link
            href="/labels"
            className=" flex items-center gap-4 text-lg mt-1 py-1.5  px-4 w-full"
          >
            <MdLabelOutline size="25" />
            <span>Labels</span>
          </Link>
          <Link
            href="/archive"
            className=" flex items-center gap-4 text-lg mt-1 py-1.5  px-4 w-full"
          >
            <BsArchive size="25" />
            <span>Archive</span>
          </Link>

          <Link
            href="/trash"
            className=" flex items-center gap-4 text-lg mt-1 py-1.5  px-4 w-full"
          >
            <FaRegTrashAlt size="25" />
            <span>Trash</span>
          </Link>

          <Link
            href="/profile"
            className=" flex items-center gap-4 text-lg mt-1 py-1.5  px-4 w-full"
          >
            <CgProfile size="25" />
            <span>Profile</span>
          </Link>
          <button
            className="bg-logoPurple rounded-full mt-1 py-1.5  px-4 text-white text-xl"
            onClick={() => setIsModalOpen(true)}
          >
            Create New Habit
          </button>
        </div>
      </aside>
      {isModalOpen && (
        <CreateHabitModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default Sidebar;
