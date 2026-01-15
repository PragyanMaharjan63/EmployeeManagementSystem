import { User, X } from "lucide-react";
import { useState } from "react";

type taskType = {
  id: number;
  title: string;
  isCompleted: boolean;
};

type employeeType = {
  id: number;
  tasks: taskType[];
};

export default function Dashboard() {
  const [employees, setEmployees] = useState<employeeType[]>([
    {
      id: 100,
      tasks: [
        { id: 0, title: "this", isCompleted: true },
        { id: 1, title: "that", isCompleted: false },
      ],
    },
    {
      id: 101,
      tasks: [
        { id: 0, title: "this", isCompleted: true },
        { id: 1, title: "that", isCompleted: false },
      ],
    },
    {
      id: 102,
      tasks: [
        { id: 0, title: "this", isCompleted: true },
        { id: 1, title: "that", isCompleted: false },
      ],
    },
    {
      id: 103,
      tasks: [
        { id: 0, title: "this", isCompleted: true },
        { id: 1, title: "that", isCompleted: false },
      ],
    },
  ]);

  function ToggleTask(empID: number, taskID: number) {
    setEmployees((prev) =>
      prev.map((employee) =>
        employee.id !== empID
          ? employee
          : {
              ...employee,
              tasks: employee.tasks.map((task) =>
                task.id !== taskID
                  ? task
                  : {
                      ...task,
                      isCompleted: !task.isCompleted,
                    }
              ),
            }
      )
    );
  }

  function deleteTask(empID: number, taskID: number) {
    setEmployees((prev) =>
      prev.map((employee) =>
        employee.id !== empID
          ? employee
          : {
              ...employee,
              tasks: employee.tasks.filter((task) =>
                task.id !== taskID ? task : !task
              ),
            }
      )
    );
  }
  function deleteEmployee(empID: number) {
    setEmployees((prev) => prev.filter((employee) => employee.id !== empID));
  }

  return (
    <>
      <div className="grid grid-cols-1 overflow-x-hidden grid-row-5 h-screen gap-0">
        <div className="row-span-1">
          <div className="flex gap-3 h-full justify-center md:justify-start md:px-[5vw]  items-center">
            <User className="text-green-600 size-20 rounded-full shadow-lg shadow-green-600/20 p-3" />
            <div className="flex flex-col justify-between md:w-full  md:flex-row  gap-1">
              <div>
                <p className="text-xl font-semibold text-emerald-800">
                  Pragyan Maharjan
                </p>
                <p className="text-sm text-neutral-500">Manager</p>
              </div>
              <p className="ring-1 ring-green-600 px-5 py-3 rounded-sm bg-linear-to-r from-green-600 to-green-700 shadow-lg text-white font-semibold cursor-pointer hover:from-green-700 hover:to-green-800 w-max">
                Logout
              </p>
            </div>
          </div>
        </div>

        {/* employee section */}
        <div className="row-span-4 mt-8 flex items-start gap-3 flex-wrap">
          <div className="flex flex-wrap justify-center ">
            {employees.map((employee) => (
              <div
                key={employee.id}
                className="rounded-lg shadow-lg shadow-green-800/10 h-max p-5 mx-3 flex flex-col gap-1 grow sm:grow-0"
              >
                <div className="flex items-center py-2 gap-3">
                  <User className="text-green-600 size-10 rounded-full shadow-lg shadow-green-600/20 p-3" />
                  <div>
                    <p className="font-semibold text-lg text-emerald-800">
                      Employee
                    </p>
                    <p className="text-xs text-neutral-500">{employee.id}</p>
                  </div>
                </div>
                <p className="text-emerald-800">Tasks</p>
                <div className="text-neutral-600 px-2">
                  {employee.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex flex-row gap-1 hover:bg-green-950/10 items-center cursor-pointer pl-2 rounded-sm"
                    >
                      <input
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={() => ToggleTask(employee.id, task.id)}
                        name="idk"
                        id="thi"
                      />
                      <p>{task.title}</p>
                      <X
                        className="p-1 ml-auto rounded-sm m-1 hover:bg-linear-to-l hover:from-red-700 hover:to-red-600 hover:text-white"
                        onClick={() => deleteTask(employee.id, task.id)}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="ring ring-red-800 font-semibold rounded-sm px-2 py-1 text-red-700 hover:bg-linear-to-l hover:from-red-700 hover:to-red-600 cursor-pointer hover:text-white hover:ring-0"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Remove Employee
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
