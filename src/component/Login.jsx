import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <section className=" h-screen flex ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-2 md:h-screen lg:py-0 w-full">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-100 "
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Site_Name
          </a>
          <div className="w-full shadow-2xl bg-gray-700 rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl  text-gray-100">
                Login
              </h1>
              <form className="">
                <p className="text-sm font-normal text-gray-100 mb-5">
                  Welcome Back
                </p>

                <div className="relative mb-4">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="#dbb668"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id=""
                    className="bg-gray-500 border border-gray-300 text-gray-100 placeholder-[#dbb668] text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                    placeholder="Phone"
                  />
                </div>

                <div className="relative mb-4">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="#dbb668"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    id=""
                    className="bg-gray-500 border border-gray-300 text-gray-100 placeholder-[#dbb668] text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                    placeholder="Password"
                    autoComplete="on"
                  />
                </div>
                <div className="flex items-start mb-5">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-0  "
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-300 focus:ring-0 "
                  >
                    Remember me
                  </label>
                </div>
                <div className="flex justify-center">
                  <Link to="/Home">
                    <button
                      type="button"
                      className="text-slate-800 gradient-top-btm shadow-lg    font-medium rounded-full w-full text-sm  px-5 py-2.5 text-center"
                    >
                      Login
                    </button>
                  </Link>
                </div>
                <div className="relative mb-4 text-center">
                  <p
                    id="helper-text-explanation"
                    className="mt-2 text-sm text-gray-200 "
                  >
                    <Link to="/">
                      <span className="font-medium theme1 underline ">
                        Create An Account{" "}
                      </span>
                    </Link>
                  </p>
                </div>
                <div className="relative mb-4 text-center">
                  <p
                    id="helper-text-explanation"
                    className="mt-2 text-sm text-gray-200 "
                  >
                    <Link to="/ForgotPass">
                      <span className="font-medium underline theme1">
                        Forgot Password{" "}
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
