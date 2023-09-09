"use client";

import { useAppSelector } from "@/store";
import { HabitCard, Layout } from "../../components/index";

function Trash() {
  const archive = useAppSelector((state) => state.habit.archive);
  
  return (
    <Layout>
      <h1 className="text-xl font-semibold">archive</h1>
      {archive.length === 0 && <h1 className="text-2xl font-semibold text-center">Archive is empty!</h1>}
      <div className=" flex flex-wrap  gap-24">
        {archive?.map((habit) => (
          <HabitCard habit={habit} key={habit.title} />
        ))}
      </div>
    </Layout>
  );
}

export default Trash;
