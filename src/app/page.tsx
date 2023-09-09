"use client";

import { useState } from "react";
import { CreateHabitModal, HabitCard, Layout } from "../components/index";
import { useAppSelector } from "@/store";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const habits = useAppSelector((state) => state.habit.habits);

  return (
    <Layout>
      <>
        <div>
          <div>
            <header className="flex justify-between items-center">
              <h1 className="text-xl font-serif">Welcome, Prince 👋 </h1>
              <span>Filters</span>
            </header>

            <div className="my-4 flex gap-y-8 justify-between flex-wrap xl:gap-2">
              <div className="bg-white  w-[12rem]  shadow-2xl   px-4 py-4 border rounded-xl dark:bg-[#121212] ">
                <h3 className="font-bold">Completed</h3>
                <h1 className="my-2 text-2xl font-bold">4</h1>
                <span className="text-sm">Total counts</span>
              </div>

              <div className="bg-white  w-[12rem]  shadow-2xl   px-4 py-4 border rounded-xl dark:bg-[#121212] ">
                <h3 className="font-bold">In progress</h3>
                <h1 className="my-2 text-2xl font-bold">4</h1>
                <span className="text-sm">Total counts</span>
              </div>

              <div className="bg-white  w-[12rem]  shadow-2xl   px-4 py-4 border rounded-xl dark:bg-[#121212]">
                <h3 className="font-bold">Overdue</h3>
                <h1 className="my-2 text-2xl font-bold">4</h1>
                <span className="text-sm">Total counts</span>
              </div>

              <div className="bg-white  w-[12rem]  shadow-2xl   px-4 py-4 border rounded-xl dark:bg-[#121212] ">
                <h3 className="font-bold">Total</h3>
                <h1 className="my-2 text-2xl font-bold">4</h1>
                <span className="text-sm">Total counts</span>
              </div>
            </div>

            <div className="mt-16">
              <header className="flex justify-between  items-center">
                <h1 className="text-xl font-bold flex items-center">
                  My Habits<span>🎯</span>
                </h1>
                <button
                  className="text-logoPurple text-lg font-semibold"
                  onClick={() => setIsModalOpen(true)}
                >
                  +Create Habit
                </button>
              </header>
            </div>

            <div className=" flex flex-wrap  gap-24">
              {habits?.map((habit) => (
                <HabitCard habit={habit} key={habit.title} />
              ))}
            </div>
          </div>
        </div>

        {isModalOpen && (
          <CreateHabitModal onClose={() => setIsModalOpen(false)} />
        )}
      </>
    </Layout>
  );
};

export default Home;
