"use client";

import { FormEvent, useState } from "react";
import { Layout } from "../../components/index";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createLabels, removeLabel } from "@/features/labelSlice";
import { useAppSelector } from "@/store";

export interface ILabels {
  id: number;
  label: string;
}

function Label() {
  const dispatch = useDispatch();
  const labels = useAppSelector((state) => state.label.labels);
  const [labelInput, setLabelInput] = useState("");

  const labelSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isLabelExists = labels?.some(
      ({ label }) => label.toLowerCase() === labelInput.toLowerCase()
    );

    if (!isLabelExists && labelInput) {
      const newLabel: ILabels = {
        id: Math.random() * 100,
        label: labelInput,
      };
      dispatch(createLabels(newLabel));
      setLabelInput("");
    } else if (isLabelExists) {
      toast.error("Lable already exists");
    } else {
      toast.error("Add text");
    }
  };
  return (
    <Layout>
      <>
        <div className="flex justify-center ">
          <div className="w-1/2">
            <header className="text-xl font-semibold ">LABELS</header>
            <div className="border border-black dark:border-white p-2 mt-4 rounded-lg flex flex-wrap items-center gap-2">
              <ul className=" flex gap-4 items-center flex-wrap">
                {labels?.map((label) => (
                  <li
                    key={label.id}
                    className="flex gap-2 items-center overflow-hidden py-1 px-2 rounded-md bg-gray-400 "
                  >
                    <p className="font-semibold">{label.label}</p>
                    <button
                      className="text-xl font-semibold cursor-pointer "
                      onClick={() => dispatch(removeLabel(label.id))}
                    >
                      x
                    </button>
                  </li>
                ))}
              </ul>
              <form onSubmit={labelSubmitHandler}>
                <input
                  autoFocus
                  type="text"
                  placeholder="Add some labels"
                  className=" bg-red-800 border border-none dark:bg-[#111014] dark:text-white  focus:outline-none"
                  value={labelInput}
                  onChange={(event) => setLabelInput(event.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default Label;
