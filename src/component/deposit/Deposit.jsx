import React, { useState } from "react";
import Head from "./Head";
import upi from "../../assets/upi.svg";
import usdt2 from "../../assets/usdt2.svg";

function Deposit() {
  const [paymethodTab, setPaymethodTab] = useState(1);
  const [selectedUpiId, setSelectedUpiId] = useState(null);


  const PaymethodTabClick = (tabNumber) => {
    setPaymethodTab(tabNumber);
  };


  const upiBoxHandler = (id) => {
    // console.log(id)
    setSelectedUpiId(id);
  };


  const upiTab = 
    [
      {
        "id": 1,
        "type": "IM-QRpay",
        "balance": "100 - 50K",
      },
      {
        "id": 2,
        "type": "Super-APPpay",
        "balance": "100 - 50K",
      },
      {
        "id": 3,
        "type": "Hey-QRPpay",
        "balance": "100 - 50K",
      }
    ]
  
  return (
    <>
      <Head />
      <div className="mx-2 my-1 flex flex-col gap-2">
        <div className="w-full  gradient-top-left   rounded-xl shadow ">
          <div className="p-3">
            <a href="#"></a>
            <div className="flex  flex-col h-20 gap-3">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="w-5 h-5 stroke-stone-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                  />
                </svg>
                <h5 className="text-small font-bold  text-slate-900">
                  Balance
                </h5>
              </div>
              <div className="flex gap-4 items-center">
                <h5 className="text-2xl text-[#8f5206] font-bold ">₹. 000</h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#8f5206"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <a
                href="#"
                className=" text-[#8f5206]  font-medium rounded-lg text-sm tracking-widest text-center "
              >
                **** ****
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <ul
            className="flex flex-row justify-between text-sm font-medium text-center text-gray-50 bg-gray-700 rounded-xl"
            aria-label="Tabs"
          >
            <li
              className={`flex justify-center items-center rounded-xl ${
                paymethodTab === 1 ? "gradient-btm-top" : ""
              }`}
            >
              <div
                className="flex flex-col justify-center items-center p-2.5 "
                onClick={() => PaymethodTabClick(1)}
              >
                <img src={upi} alt="" className="w-14" />
              </div>
            </li>
            <li
              className={`flex justify-center items-center rounded-xl ${
                paymethodTab === 2 ? "gradient-btm-top" : ""
              }`}
            >
              <div
                className="flex flex-col justify-center items-center p-2.5 "
                onClick={() => PaymethodTabClick(2)}
              >
                <img src={upi} alt="" className="w-14" />
              </div>
            </li>
            <li
              className={`flex justify-center items-center rounded-xl ${
                paymethodTab === 3 ? "gradient-btm-top" : ""
              }`}
            >
              <div
                className="flex flex-col justify-center items-center p-2.5 "
                onClick={() => PaymethodTabClick(3)}
              >
                <img src={usdt2} alt="" className="w-14" />
              </div>
            </li>
            <li
              className={`flex justify-center items-center rounded-xl ${
                paymethodTab === 4 ? "gradient-btm-top" : ""
              }`}
            >
              <div
                className="flex flex-col justify-center items-center p-2.5 "
                onClick={() => PaymethodTabClick(4)}
              >
                <img src={usdt2} alt="" className="w-14" />
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-3">
          <div
            id="horizontal-alignment-1"
            className={`${paymethodTab === 1 ? "" : "hidden"}`}
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-1"
          >
             <div className="w-full grid grid-cols-2 rounded-xl shadow">
      {upiTab && upiTab.map(({ id, type, balance }) => (
        <div key={id} className={`p-2 flex  bg-gray-900 m-1 rounded-lg ${selectedUpiId === id ? 'text-zinc-900 btn-gold-ltr' : 'text-zinc-50'}`}>
          <input
            type="radio"
            id={id}
            name="type"
            checked={selectedUpiId === id}
            onChange={() => upiBoxHandler(id)}
            className="sr-only"
          />
          <label htmlFor={id} className=" cursor-pointer flex flex-col ">
            <span>{type}</span>
            <span>Balance:{balance}</span>
          </label>
        </div>
      ))}
    </div>
          </div>
          <div
            id="horizontal-alignment-2"
            className={`${paymethodTab === 2 ? "" : "hidden"}`}
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-2"
          >
            <div className="w-full  gradient-top-btm   rounded-xl shadow ">
              <div className="p-2 flex divide-x divide-dashed">
                <div className="flex  flex-col justify-between gap-2  w-6/12">
                  <div className="flex items-center gap-1">
                    <a
                      href="#"
                      className="flex gap-1 items-center border border-[#8f5206] text-[#8f5206]  font-medium rounded-full text-sm px-5 py-0.5 text-center "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#dbb668"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                          clipRule="evenodd"
                        />
                        <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                      </svg>

                      <span>How to Play</span>
                    </a>
                  </div>
                  <div className="flex">
                    <h5 className="text-xs font-semibold tracking-tight text-[#8f5106ea]">
                      Win Go 3Min
                    </h5>
                  </div>
                  <div className="flex gap-2"></div>
                </div>

                <div className="flex justify-between flex-col gap-2 w-6/12 ">
                  <div className="flex items-end justify-end gap-1">
                    <span>Time Remaining</span>
                  </div>
                  <div className="flex items-end justify-end">
                    <h5 className="text-lg font-semibold tracking-tight  text-[#8f5106ea]"></h5>
                  </div>
                  <div className="flex items-end justify-end gap-2">
                    <span className="font-bold text-[#8f5106ea]">
                      202441325651641
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="horizontal-alignment-3"
            className={`${paymethodTab === 3 ? "" : "hidden"}`}
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-3"
          >
            <div className="w-full  gradient-top-btm   rounded-xl shadow ">
              <div className="p-2 flex divide-x divide-dashed">
                <div className="flex  flex-col justify-between gap-2  w-6/12">
                  <div className="flex items-center gap-1">
                    <a
                      href="#"
                      className="flex gap-1 items-center border border-[#8f5206] text-[#8f5206]  font-medium rounded-full text-sm px-5 py-0.5 text-center "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#dbb668"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                          clipRule="evenodd"
                        />
                        <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                      </svg>

                      <span>How to Play</span>
                    </a>
                  </div>
                  <div className="flex">
                    <h5 className="text-xs font-semibold tracking-tight text-[#8f5106ea]">
                      Win Go 5Min
                    </h5>
                  </div>
                  <div className="flex gap-2"></div>
                </div>

                <div className="flex justify-between flex-col gap-2 w-6/12 ">
                  <div className="flex items-end justify-end gap-1">
                    <span>Time Remaining</span>
                  </div>
                  <div className="flex items-end justify-end">
                    <h5 className="text-lg font-semibold tracking-tight  text-[#8f5106ea]"></h5>
                  </div>
                  <div className="flex items-end justify-end gap-2">
                    <span className="font-bold text-[#8f5106ea]">
                      202441325651641
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="horizontal-alignment-3"
            className={`${paymethodTab === 4 ? "" : "hidden"}`}
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-3"
          >
            <div className="w-full  gradient-top-btm   rounded-xl shadow ">
              <div className="p-2 flex divide-x divide-dashed">
                <div className="flex  flex-col justify-between gap-2  w-6/12">
                  <div className="flex items-center gap-1">
                    <a
                      href="#"
                      className="flex gap-1 items-center border border-[#8f5206] text-[#8f5206]  font-medium rounded-full text-sm px-5 py-0.5 text-center "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#dbb668"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                          clipRule="evenodd"
                        />
                        <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                      </svg>

                      <span>How to Play</span>
                    </a>
                  </div>
                  <div className="flex">
                    <h5 className="text-xs font-semibold tracking-tight text-[#8f5106ea]">
                      Win Go 10Min
                    </h5>
                  </div>
                  <div className="flex gap-2"></div>
                </div>

                <div className="flex justify-between flex-col gap-2 w-6/12 ">
                  <div className="flex items-end justify-end gap-1">
                    <span>Time Remaining</span>
                  </div>

                  <div className="flex items-end justify-end gap-2">
                    <span className="font-bold text-[#8f5106ea]">
                      202441325651641
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deposit;
