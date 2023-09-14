"use client";

import { useState } from "react";
import Link from "next/link";

const Signin = () => {
  const [authState, setAuthState] = useState({
    email: "",
    password: "",
  });

  const formSubmit = () => {
    console.log(authState, "auth");
  };
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 ">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md dark:bg-[#111014]">
          <div className="mb-2 flex justify-center">
            <img
              src="https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/57/ef/25/57ef25ac-876f-3639-62e6-236ff3cc617a/source/256x256bb.jpg"
              alt="logo"
              className="w-12 h-12 border rounded-md"
            />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400 ">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              title=""
              className="font-semibold text-black dark:text-white transition-all duration-200 hover:underline"
            >
              Create a free account
            </Link>
          </p>
          <form onSubmit={formSubmit} method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="" className="text-base font-medium">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    value={authState.email}
                    onChange={(event) =>
                      setAuthState({ ...authState, email: event.target.value })
                    }
                  ></input>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-base font-mediu">
                    Password
                  </label>
                  <a
                    href="#"
                    title=""
                    className="text-sm font-semibold  hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    value={authState.password}
                    onChange={(event) =>
                      setAuthState({ ...authState, password: event.target.value })
                    }
                  ></input>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black dark:bg-white dark:text-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 "
                >
                  Get started
                </button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
