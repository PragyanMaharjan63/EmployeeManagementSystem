import { X } from "lucide-react";
import { useState } from "react";

type props = {
  empID: number;
  addtaskfunc: (empID: number, title: string) => void;
  onClose: () => void;
};

export default function Popup({ addtaskfunc, empID, onClose }: props) {
  const [task, setTask] = useState("");
  return (
    <>
      <div className="z-40 h-screen w-screen fixed bg-black/20 ">
        <div className="grid place-items-center h-screen">
          <div className="bg-white p-5 grid gap-3 rounded-lg shadow-lg shadow-green-700/30">
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-green-900">Add Task</p>
              <p>
                <X className="p-1 hover:bg-green-800/40 rounded-sm" />
              </p>
            </div>
            <div>
              <p className="text-sm">Task:</p>
              <input
                className="ring-1 ring-green-600 px-3 py-2 rounded-sm focus:outline-4 outline-green-600/40"
                type="text"
                name="Task"
                id="Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter task to assign"
              />
            </div>
            <button
              className="ring-1 ring-green-600 px-3 py-2 rounded-sm bg-linear-to-r from-green-600 to-green-700 shadow-lg text-white font-semibold cursor-pointer hover:from-green-700 hover:to-green-800"
              onClick={() => {
                addtaskfunc(empID, task);
                onClose();
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
