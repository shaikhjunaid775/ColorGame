import { useState } from "react";

function Modal({ showModal, content, onClose, label }) {
  // const [showModal, setShowModal] = useState(false);
  const [balanceActiveButton, setBalanceActiveButton] = useState(1);
  const [quantityActiveButton, setQuantityActiveButton] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [balance, setBalance] = useState(1);

  const quantityMultipliers = [1, 2, 10, 20, 50, 100];
  const balanceMultipliers = [1, 10, 100, 1000];

  const balanceButtonClick = (index) => {
    setBalanceActiveButton(index);
    setBalance(balanceMultipliers[index - 1]); // Set balance based on button selection
  };

  const quantityButtonClick = (index) => {
    setQuantityActiveButton(index);
    setQuantity(quantityMultipliers[index - 1]); // Set quantity based on button selection
  };

  // Function to handle decrementing the count
  const handleDecrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(1, prevQuantity - 1);
      updateActiveQuantityButton(newQuantity);
      return newQuantity;
    });
  };

  // Function to handle incrementing the count
  const handleIncrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      updateActiveQuantityButton(newQuantity);
      return newQuantity;
    });
  };

  // Function to update active quantity button
  const updateActiveQuantityButton = (newQuantity) => {
    const index = quantityMultipliers.findIndex(
      (value) => value === newQuantity
    );
    setQuantityActiveButton(index !== -1 ? index + 1 : null);
  };

  // Calculate total amount
  const totalAmount = (quantity * balance).toFixed(2);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center w-full items-center fixed bottom-0 z-50 outline-none focus:outline-none max-w-[800px]">
            <div className="relative ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
                {/*header*/}

                {/*body*/}
                <div className="relative p-3 flex-auto flex flex-col gap-3">
                  <div className="flex flex-col justify-center text-center">
                    <h1 className="font-bold text-slate-50">{label}</h1>
                    <button
                      type="button"
                      className="text-[#fae59f] bg-gray-700   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  "
                    >
                      Select {content}
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 items-center justify-between overflow-hidden">
                    <h5 className="font-black text-slate-50">Balance</h5>
                    <div className="my-1 flex gap-1 overflow-auto">
                      {balanceMultipliers.map((value, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`text-[#fae59f] border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-2 py-0.5 text-center me-2 mb-2 ${
                            balanceActiveButton === index + 1
                              ? "bg-[#fae59f] text-zinc-900"
                              : ""
                          }`}
                          onClick={() => balanceButtonClick(index + 1)}
                        >
                          {value}
                        </button>
                      ))}
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
                  <div className="my-1 flex justify-end overflow-auto">
                    {["X1", "X2", "X10", "X20", "X50", "X100"].map(
                      (label, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`text-[#fae59f] border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-2 py-0.5 text-center me-2 mb-2 ${
                            quantityActiveButton === index + 1
                              ? "bg-[#fae59f] text-zinc-900"
                              : ""
                          }`}
                          onClick={() => quantityButtonClick(index + 1)}
                        >
                          {label}
                        </button>
                      )
                    )}
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
                      <a href="#" className="text-gray-100 hover:underline">
                        Presale Rules
                      </a>
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
                  >
                    Total amount ₹{totalAmount}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
