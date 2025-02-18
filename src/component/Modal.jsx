import React, { useState } from 'react'

function Modal( {showModal, onClose, index} ) {
    // const [showModal, setShowModal] = useState(false);
    const [balanceactiveButton, setBalanceactiveButton] = useState(null);
  const [quantityActiveButton, setQuantityActiveButton] = useState(null);
  const [quantity, setQuantity] = useState(0);


  const balanceButtonClick = (index) => {
    setBalanceactiveButton(index);
  };
  const quantityButtonClick = (index) => {
    setQuantityActiveButton(index);
  };

  
  // Function to handle decrementing the count
  const handleDecrement = () => {
    setQuantity((prevCount) => prevCount - 1);
  };

  // Function to handle incrementing the count
  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
  };

  return (
    <>
        {showModal ? (
        <>
          <div className="justify-center w-full items-center fixed bottom-0 z-50 outline-none focus:outline-none">
            <div className="relative px-2">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
                {/*header*/}

                {/*body*/}
                <div className="relative p-3 flex-auto flex flex-col gap-3">
                  <div className="flex flex-col justify-center text-center">
                    <h1 className="font-bold text-slate-50">Win Go 1Min</h1>
                    <button
                      type="button"
                      className="text-[#fae59f] bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  "
                    >
                      Select {index + 1}
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 items-center justify-between overflow-hidden">
                    <h5 className="font-black text-slate-50">Balance</h5>
                    <div className="my-1 flex gap-1 overflow-auto">
                      <button
                        type="button"
                        className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-2 py-0.5 text-center me-2 mb-2 ${
                          balanceactiveButton === 1 ? "bg-[#fae59f] text-zinc-900" : ""
                        }`}
                        onClick={() => balanceButtonClick(1)}
                      >
                        1
                      </button>
                      <button
                        type="button"
                        className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-2 py-0.5 text-center me-2 mb-2 ${
                          balanceactiveButton === 2 ? "bg-[#fae59f] text-zinc-900" : ""
                        }`}
                        onClick={() => balanceButtonClick(2)}
                      >
                        10
                      </button>
                      <button
                        type="button"
                        className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-2 py-0.5 text-center me-2 mb-2 ${
                          balanceactiveButton === 3 ? "bg-[#fae59f] text-zinc-900" : ""
                        }`}
                        onClick={() => balanceButtonClick(3)}
                      >
                        100
                      </button>
                      <button
                        type="button"
                        className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-2 py-0.5 text-center me-2 mb-2 ${
                          balanceactiveButton === 4 ? "bg-[#fae59f] text-zinc-900" : ""
                        }`}
                        onClick={() => balanceButtonClick(4)}
                      >
                        1000
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 items-center justify-between overflow-hidden">
                    <h5 className="font-black text-slate-50">Quantity</h5>
                    {/* <!-- Input Number --> */}
                    <div className="relative flex items-center">
                      <button
                        type="button"
                        onClick={handleDecrement}
                        className="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-full h-5 w-5 focus:outline-none"
                      >
                        <svg
                          className="w-2.5 h-2.5 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        className="flex-shrink-0  font-medium bg-gray-100 text-gray-50 rounded-full  border-0 bg-transparent text-sm focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                        placeholder=""
                        value={quantity}
                        readOnly
                      />
                      <button
                        type="button"
                        onClick={handleIncrement}
                        className="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-full h-5 w-5 focus:outline-none"
                      >
                        <svg
                          className="w-2.5 h-2.5 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* <!-- End Input Number --> */}
                  </div>
                  <div className="my-1 flex justify-end  overflow-auto">
                    <button
                      type="button"
                      className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-2 py-0.5 text-center me-2 mb-2 ${
                        quantityActiveButton === 1 ? "bg-[#fae59f] text-zinc-900" : ""
                      }`}
                      onClick={() => quantityButtonClick(1)}
                    >
                      X1
                    </button>
                    <button
                      type="button"
                      className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-2 py-0.5 text-center me-2 mb-2 ${
                        quantityActiveButton === 2 ? "bg-[#fae59f] text-zinc-900" : ""
                      }`}
                      onClick={() => quantityButtonClick(2)}
                    >
                      X2
                    </button>
                    <button
                      type="button"
                      className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-2 py-0.5 text-center me-2 mb-2 ${
                        quantityActiveButton === 3 ? "bg-[#fae59f] text-zinc-900" : ""
                      }`}
                      onClick={() => quantityButtonClick(3)}
                    >
                      X10
                    </button>
                    <button
                      type="button"
                      className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-2 py-0.5 text-center me-2 mb-2 ${
                        quantityActiveButton === 4 ? "bg-[#fae59f] text-zinc-900" : ""
                      }`}
                      onClick={() => quantityButtonClick(4)}
                    >
                      X20
                    </button>
                    <button
                      type="button"
                      className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-2 py-0.5 text-center me-2 mb-2 ${
                        quantityActiveButton === 5 ? "bg-[#fae59f] text-zinc-900" : ""
                      }`}
                      onClick={() => quantityButtonClick(5)}
                    >
                      X50
                    </button>
                    <button
                      type="button"
                      className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-2 py-0.5 text-center me-2 mb-2 ${
                        quantityActiveButton === 6 ? "bg-[#fae59f] text-zinc-900" : ""
                      }`}
                      onClick={() => quantityButtonClick(6)}
                    >
                      X100
                    </button>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 "
                        required
                      />
                    </div>
                    <label
                      htmlFor="terms"
                      className="ms-2 text-sm font-medium text-gray-50 "
                    >
                      I agree{" "}
                      <a href="#" className="text-gray-100 hover:underline">Presale Rules</a>
                    </label>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-start ">
                  <button
                    className=" text-zinc-400 bg-zinc-700  font-bold uppercase text-sm px-9 py-3 rounded-none shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
                    type="button"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    className="w-full gradient-btm-top text-zinc-900  font-bold uppercase text-sm px-6 py-3 rounded-none shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={onClose}
                  >
                    Total amount 1.00
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default Modal