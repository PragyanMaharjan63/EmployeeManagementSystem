import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type taskType = {
  id: number;
  title: string;
  isCompleted: boolean;
};
type employeeType = {
  id: number;
  tasks: taskType[];
};

export default function Login() {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState<string>("manager");
  const employees: employeeType[] = (() => {
    const sotred = localStorage.getItem("employee");
    return sotred ? JSON.parse(sotred) : [];
  })();

  function handlesubmit(e: React.FormEvent) {
    e.preventDefault();
    if (selectedRole === "manager") {
      navigate("/manager");
    } else {
      navigate(`/employee/${selectedRole}`);
    }
  }

  return (
    <>
      <div className="grid h-screen place-items-center ">
        <form
          onSubmit={handlesubmit}
          className="rounded-lg p-8 grid gap-y-4 shadow-xl shadow-green-700/20"
        >
          <div>
            <p className="text-center font-bold text-2xl">Login</p>
            <p className="text-center text-neutral-700">Welcome back!</p>
          </div>

          <div>
            <p>Choose Role</p>
            <select
              className="ring-1 ring-green-600 px-3 py-2 rounded-sm focus:outline-4 outline-green-600/40 w-60"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option>Manager</option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  Employee {employee.id}
                </option>
              ))}
            </select>
          </div>
          <input
            type="submit"
            value="Submit"
            className="ring-1 ring-green-600 px-3 py-2 rounded-sm bg-linear-to-r from-green-600 to-green-700 shadow-lg text-white font-semibold cursor-pointer hover:from-green-700 hover:to-green-800"
          />
        </form>
      </div>
    </>
  );
}
