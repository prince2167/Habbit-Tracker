import {
  MdArchive,
  MdUnarchive,
  FaTrash,
  FaTrashRestore,
  BiSolidEdit,
} from "../../assets/icons";
import { useDispatch } from "react-redux";
import { archiveHabit, restoreArchiveHabit,deleteHabit, restoreHabit, IHabit } from "@/features/habitSlice";
import { useAppSelector } from "@/store";

const HabitCard = ({ habit }: any) => {
  const dispatch = useDispatch();
  const { trash, archive } = useAppSelector((state) => state.habit);

  const isInarchive =
    archive.length > 0 &&
    archive.some((archiveHabit) => archiveHabit?.id === habit.id);

  const isInTrash =
    trash.length > 0 && trash.some((trashHabit) => trashHabit?.id === habit.id);

  const archiveHabitHandler = (habit: IHabit) => {
    dispatch(archiveHabit(habit));
  };

  const unArchiveHabit = (habit: IHabit) => {
    dispatch(restoreArchiveHabit(habit));
  };
  const removeHabit = (habit: IHabit) => {
    dispatch(deleteHabit(habit));
  };

  const resotreHabitHandler = (habit: IHabit) => {
    dispatch(restoreHabit(habit));
  };
  return (
    <div
      key={habit.title}
      className=" w-[19rem] h-[11rem] shadow-2xl   p-2 mt-4 rounded-xl flex flex-col justify-between"
      style={{ backgroundColor: `${habit.bgColor}` }}
    >
      <div className=" flex flex-col gap-1">
        <div className="flex  justify-between items-center ">
          <h2 className="text-lg font-semibold">{habit.title}</h2>
          <span>🔥</span>
        </div>

        <p className="text-gray-600 text-sm font-semibold ">
          {habit.startDate + " - " + habit.endDate}{" "}
        </p>

        {habit.label && (
          <div className="flex">
            <p className="bg-green-600 px-2 py-1 rounded-lg text-white">
              {habit.label}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center ">
        <span>0/{habit.goal} times in weak</span>

        <div className="flex gap-3">
          <button className="border-none cursor-pointer">
            <BiSolidEdit size="22" />
          </button>
          
          {isInarchive ? (
            <button
              onClick={() => unArchiveHabit(habit)}
              className="border-none cursor-pointer"
            >
              <MdUnarchive size="22" />
            </button>
          ) : (
            <button
              onClick={() => archiveHabitHandler(habit)}
              className="border-none cursor-pointer"
            >
              <MdArchive size="22" />
            </button>
          )}

          {isInTrash ? (
            <button
              onClick={() => resotreHabitHandler(habit)}
              className="border-none cursor-pointer"
            >
              <FaTrashRestore size="20" />
            </button>
          ) : (
            <button
              onClick={() => removeHabit(habit)}
              className="border-none cursor-pointer"
            >
              <FaTrash size="20" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
