"use client";

import { useAppSelector } from "@/store";
import { HabitCard, Layout } from "../../components/index";

function Trash() {
  const trash = useAppSelector((state) => state.habit.trash);
  return (
    <Layout>
      <h1 className="text-xl font-semibold">Trash</h1>
      {trash.length === 0 && <h1 className="text-2xl font-semibold text-center">Trash is empty!</h1>}
      <div className=" flex flex-wrap  gap-24">
        {trash?.map((habit) => (
          <HabitCard habit={habit} key={habit.title} />
        ))}
      </div>
    </Layout>
  );
}

export default Trash;
