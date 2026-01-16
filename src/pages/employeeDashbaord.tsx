import { User } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

type taskType = {
  id: number;
  title: string;
  isCompleted: boolean;
};
type employeeType = {
  id: number;
  tasks: taskType[];
};

export default function EmployeeDashboard() {
  const navigate = useNavigate();
  const [thisEmp, setThisEmp] = useState<employeeType>();
  const [employees, setEmployees] = useState<employeeType[]>(() => {
    const sotred = localStorage.getItem("employee");
    return sotred ? JSON.parse(sotred) : [];
  });
  const { id } = useParams();

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

  //to update state
  useEffect(() => {
    localStorage.setItem("employee", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    if (!id) return;
    setThisEmp(employees.find((employee) => employee.id === Number(id)));
    if (!thisEmp) return;
  }, [id, employees]);
  return (
    <div className="grid grid-cols-1 overflow-x-hidden grid-row-5 h-screen gap-0">
      <div className="row-span-1">
        <div className="flex gap-3 h-full justify-center md:justify-start md:px-[5vw]  items-center">
          <User className="text-green-600 size-20 rounded-full shadow-lg shadow-green-600/20 p-3" />
          <div className="flex flex-col md:items-center items-start md:justify-between md:w-full  md:flex-row  gap-1">
            <div className="grid gap-1">
              <p className="text-xl font-semibold text-emerald-800">
                Pragyan Maharjan
              </p>
              <p className="text-sm text-neutral-500">Employee</p>
              <p className="text-sm text-neutral-500">{id}</p>
            </div>
            <p
              className="ring-1 ring-green-600 px-3 py-1 md:px-5 md:py-3 rounded-sm bg-linear-to-r from-green-600 to-green-700 shadow-lg text-white font-semibold cursor-pointer hover:from-green-700 hover:to-green-800 w-max h-max"
              onClick={() => navigate("/")}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
      <div className="row-span-4 ">
        <div className="p-4">
          <p className="font-semibold text-xl">Tasks:</p>
          {thisEmp?.tasks.map((task, idx) => (
            <div
              key={task.id}
              className={`flex gap-1 ${
                idx % 2 === 0 ? "bg-green-800/40" : "bg-green-200"
              } rounded-sm p-2`}
            >
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => ToggleTask(Number(id), task.id)}
                name="idk"
                id="thi"
              />
              <p> {task.title} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
