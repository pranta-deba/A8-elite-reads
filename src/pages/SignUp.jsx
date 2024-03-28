import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-3xl font-semibold">Sign in to your account</h1>
        <p className="text-sm text-center dark:text-gray-600">
          Already account?
          <NavLink
            to="/sign_in"
            rel="noopener noreferrer"
            className="focus:underline hover:underline text-green-500"
          >
            Sign in
          </NavLink>
        </p>
        <form className="space-y-6">
          <div className="flex flex-col space-y-4">
            <label className="sr-only">UserName</label>
            <input
              id="text"
              type="text"
              placeholder="username"
              className="rounded-t-md dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2"
            />
            <label className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              placeholder="email"
              className="-mt-1 rounded-b-md dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2"
            />
            <label className="sr-only">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="-mt-1 rounded-b-md dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2"
            />
            <label className="sr-only">Re-Type Password</label>
            <input
              id="password"
              type="password"
              placeholder="Re-Type Password"
              className="-mt-1 rounded-b-md dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2"
            />
           <div className="flex gap-2 my-5">
            <input
              type="checkbox"
              className="checkbox checkbox-success"
              />
              <label>Remember me</label>
           </div>
          </div>
          <div className="flex justify-center">
            <button>
              <a className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 cursor-pointer hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Sign up</span>
              </a>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
