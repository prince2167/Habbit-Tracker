"use client"

import { Fragment, MouseEventHandler, useState } from "react";
import { IHabitInput } from "./CreateHabitModal";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store";
import { colors, goals } from "@/constants";
interface modalProps {
  onClose: MouseEventHandler;
  habit: any;
}
const EditForm = ({ habit, onClose }: modalProps) => {
  const dispatch = useDispatch();
  const labels = useAppSelector((state) => state.label.labels);
  const [editHabit, setEditHabit] = useState<IHabitInput>({
    title: habit.title,
    startDate: habit.startDate,
    endDate: habit.endDate,
    goal: habit.goal,
    bgColor: habit.bgColor,
    status: habit.status,
    label: habit.label,
  });
console.log( editHabit,"habits");

  const editHabitHandler = () => {};

  return (
    <>
      <div
        className="fixed inset-0 z-40 w-full h-full  bg-opacity-50 bg-black"
        onClick={onClose}
      ></div>
      <div className="absolute  z-50 rounded-lg bg-white dark:bg-[#111014] max-w1/4  w-1/4 h-auto left-1/2 top-1/2  translate-x-[-50%] translate-y-[-50%]  p-4 sm:m-0 ">
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Edit Habit</h2>
          <button
            className="text-xl font-bold focus:outline-none"
            onClick={onClose}
          >
            X
          </button>
        </header>

        <form onSubmit={editHabitHandler} className="flex flex-col gap-2 ">
          <div className="flex flex-col ">
            <label>Title</label>
            <input
              className="border border-gray-400  focus:outline-gray-400 rounded-sm py-1 indent-1"
              placeholder="Title"
              required
              value={editHabit.title}
              onChange={(event) =>
                setEditHabit({
                  ...editHabit,
                  title: event.target.value,
                })
              }
            />
          </div>

          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col  ">
              <label>Start Date</label>
              <input
                type="date"
                required
                className="border border-gray-400 dark:border-black   dark:focus:outline-none focus:outline-gray-400 w-full rounded-sm p-1"
                value={editHabit.startDate}
                onChange={(event) => {
                  setEditHabit({ ...editHabit, startDate: event.target.value });
                }}
              />
            </div>
            <div className="flex flex-col ">
              <label>End Date</label>
              <input
                required
                type="date"
                className="border border-gray-400 dark:border-black  dark:focus:outline-none focus:outline-gray-400 w-full rounded-sm p-1 "
                value={editHabit.endDate}
                onChange={(event) => {
                  setEditHabit({ ...editHabit, endDate: event.target.value });
                }}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label>Goal</label>
            <select
              required
              className="border border-gray-400 focus:outline-gray-400 rounded-sm py-1"
              onChange={(event) =>
                setEditHabit({ ...editHabit, goal: event.target.value })
              }
            >
              {/* <option></option> */}
              {goals.map((goal) => (
                <option key={goal} value={goal}>
                  {goal} times in week
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label>Color</label>
            <select
              required
              className="border border-gray-400 focus:outline-gray-400 rounded-sm py-1"
              onChange={(event) =>
                setEditHabit({ ...editHabit, bgColor: event.target.value })
              }
            >
              {/* <option></option> */}
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label>Status</label>
            <select
              required
              className="border border-gray-400 focus:outline-gray-400 rounded-sm py-1"
              onChange={(event) =>
                setEditHabit({ ...editHabit, status: event.target.value })
              }
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div>
            <label>Lables</label>
            <div className="flex items-center gap-2 mt-1 cursor-pointer">
              {labels?.map((label) => (
                <Fragment key={label.id}>
                  <input
                    type="radio"
                    name="label"
                    id="label2"
                    className="cursor-pointer"
                    value={label.label}
                    checked={label.label === editHabit.label}
                    onChange={(event) =>
                      setEditHabit({ ...editHabit, label: event.target.value })
                    }
                  />
                  <label htmlFor="label2" className="cursor-pointer">
                    {label.label}
                  </label>
                </Fragment>
              ))}
            </div>
          </div>

          <button type="submit">Save Habit</button>
        </form>
      </div>
    </>
  );
};

export default EditForm;
