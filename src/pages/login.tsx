export default function Login() {
  return (
    <>
      <div className="grid h-screen place-items-center ">
        <form
          action=""
          className="rounded-lg p-8 grid gap-y-4 shadow-xl shadow-green-700/20"
        >
          <div>
            <p className="text-center font-bold text-2xl">Login</p>
            <p className="text-center text-neutral-700">Welcome back!</p>
          </div>
          <div>
            <p className="text-neutral-500">Username</p>
            <input
              className="ring-1 ring-green-600 px-3 py-2 rounded-sm focus:outline-4 outline-green-600/40"
              type="text"
              name="username"
              id="Username"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <p className="text-neutral-500">Password</p>
            <input
              className="ring-1 ring-green-600 px-3 py-2 rounded-sm focus:outline-4 outline-green-600/40"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
            />
          </div>
          <div>
            <p>Choose Role</p>
            <select className="ring-1 ring-green-600 px-3 py-2 rounded-sm focus:outline-4 outline-green-600/40 ">
              <option>Manager</option>
              <option>Employee 1</option>
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
