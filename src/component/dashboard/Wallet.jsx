function Wallet() {
  return (
    <>
      <div className="w-full  gradient-top-left   rounded-xl shadow ">
        <div className="p-3 flex flex-col gap-4">
          <div className="flex  flex-col gap-1">
            <div className="flex items-center gap-1 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                />
              </svg>
              <h5 className="text-md font-semibold tracking-tight leading-none text-dark">
                Wallet Balance
              </h5>
            </div>
            <div className="flex gap-4 items-center">
              <h5 className="text-2xl font-semibold tracking-tight leading-none text-dark">
                ₹. 000
              </h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#dbb668"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <a
              href="#"
              className=" bg-[#8f5206] text-[#fae59f]  font-medium rounded-lg text-sm px-5 py-1.5 text-center "
            >
              Deposit
            </a>
            <a
              href="#"
              className="border border-[#8f5206] text-[#8f5206]  font-medium rounded-lg text-sm px-5 py-1.5 text-center "
            >
              Withdrawal
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wallet;
