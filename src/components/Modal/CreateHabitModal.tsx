"use client";

import { FormEvent, Fragment, MouseEventHandler, useState } from "react";
import { colors, goals } from "../../constants";
import { useDispatch } from "react-redux";
import { createHabit } from "@/features/habitSlice";
import { useAppSelector } from "@/store";

interface modalProps {
  onClose: MouseEventHandler;
}

export interface IHabitInput {
  title: string;
  startDate: string;
  endDate: string;
  goal: string;
  bgColor: string;
  status: string;
  label: string;
}

const CreateHabitModal = ({ onClose }: modalProps) => {
  const dispatch = useDispatch();
  const labels = useAppSelector((state) => state.label.labels);
  const [newHabit, setNewHabit] = useState<IHabitInput>({
    title: "",
    startDate: "",
    endDate: "",
    goal: "",
    bgColor: "",
    status: "active",
    label: "",
  });

  const addHabitHandler = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    dispatch(createHabit(newHabit));
    setNewHabit({
      ...newHabit,
      title: "",
      startDate: "",
      endDate: "",
      goal: "",
      bgColor: "",
      status: "active",
      label: "",
    });
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 w-full h-full  bg-opacity-50 bg-black"
        onClick={onClose}
      ></div>
      <div className="absolute  z-50 rounded-lg bg-white dark:bg-[#111014] max-w1/4  w-1/4 h-auto left-1/2 top-1/2  translate-x-[-50%] translate-y-[-50%]  p-4 sm:m-0 ">
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Create Habit</h2>
          <button
            className="text-xl font-bold focus:outline-none"
            onClick={onClose}
          >
            X
          </button>
        </header>

        <form onSubmit={addHabitHandler} className="flex flex-col gap-2 ">
          <div className="flex flex-col ">
            <label>Title</label>
            <input
              className="border border-gray-400  focus:outline-gray-400 rounded-sm py-1 indent-1"
              placeholder="Title"
              required
              value={newHabit.title}
              onChange={(event) =>
                setNewHabit({
                  ...newHabit,
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
                value={newHabit.startDate}
                onChange={(event) => {
                  setNewHabit({ ...newHabit, startDate: event.target.value });
                }}
              />
            </div>
            <div className="flex flex-col ">
              <label>End Date</label>
              <input
                required
                type="date"
                className="border border-gray-400 dark:border-black  dark:focus:outline-none focus:outline-gray-400 w-full rounded-sm p-1 "
                value={newHabit.endDate}
                onChange={(event) => {
                  setNewHabit({ ...newHabit, endDate: event.target.value });
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
                setNewHabit({ ...newHabit, goal: event.target.value })
              }
            >
              <option></option>
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
                setNewHabit({ ...newHabit, bgColor: event.target.value })
              }
            >
              <option></option>
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
                setNewHabit({ ...newHabit, status: event.target.value })
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
                    checked={label.label === newHabit.label}
                    onChange={(event) =>
                      setNewHabit({ ...newHabit, label: event.target.value })
                    }
                  />
                  <label htmlFor="label2" className="cursor-pointer">
                    {label.label}
                  </label>
                </Fragment>
              ))}
            </div>
          </div>

          <button type="submit">Create Habit</button>
        </form>
      </div>
    </>
  );
};

export default CreateHabitModal;
