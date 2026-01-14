import { User, X } from "lucide-react";

export default function Dashboard() {
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
        <div className="row-span-4 flex items-start gap-3 flex-wrap">
          <div className="rounded-lg shadow-lg shadow-green-800/10 h-max p-5 mx-3 grid gap-1">
            <div className="flex items-center justify-center gap-3">
              <User className="text-green-600 size-10 rounded-full shadow-lg shadow-green-600/20 p-3" />
              <div>
                <p className="font-semibold text-lg text-emerald-800">
                  Employee
                </p>
                <p className="text-xs text-neutral-500">091</p>
              </div>
            </div>
            <p className="text-emerald-800">Tasks</p>
            <div className="text-neutral-600 px-2">
              <div className="flex flex-row gap-1 hover:bg-green-950/10 items-center cursor-pointer pl-2 rounded-sm">
                <input type="checkbox" name="idk" id="thi" />
                <p>do this</p>
                <X className="p-1 ml-auto rounded-sm m-1 hover:bg-red-500 hover:text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
