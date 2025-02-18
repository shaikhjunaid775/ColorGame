// import React from "react";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../component/Modal";
import timeicon from "../assets/time.png";
// Example of different images (replace with actual image paths)
import ball1 from "../assets/purplered0.png";
import ball2 from "../assets/green1.png";
import ball3 from "../assets/red2.png";
import ball4 from "../assets/green3.png";
import ball5 from "../assets/red4.png";
import ball6 from "../assets/greenviolet5.png";
import ball7 from "../assets/red6.png";
import ball8 from "../assets/green7.png";
import ball9 from "../assets/red8.png";
import ball10 from "../assets/green9.png";

function CountdownTimer({
  initialMinutes,
  initialSeconds,
  tabId,
  onDateNumberChange
}) {
  const [time, setTime] = useState({
    minutes: initialMinutes,
    seconds: initialSeconds
  });

  const [isTimeUp, setIsTimeUp] = useState(false);
  const [dateNumber, setDateNumber] = useState(getStoredNumber(tabId));

  function getFormattedDate() {
    const now = new Date();
    return `${now.getFullYear()}${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}`;
  }

  function getStoredNumber(tabId) {
    const formattedDate = getFormattedDate();

    const stored = localStorage.getItem(`dateNumber_${tabId}`);
    if (stored) {
      return parseInt(stored, 10); // Retrieve the stored serial number
    } else {
      // Create a serial number with a unique incrementing pattern for each tab
      const increment = tabId * 1000; // e.g., for Tab 1, it will be 1000, for Tab 2 it will be 2000, and so on
      return parseInt(formattedDate + increment.toString(), 10);
    }
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { minutes: prevTime.minutes - 1, seconds: 59 };
        } else {
          clearInterval(timer);
          setIsTimeUp(true);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  useEffect(() => {
    if (isTimeUp) {
      const lastTwoDigits = parseInt(dateNumber.toString().slice(-2), 10);
      const newNumber = parseInt(
        getFormattedDate() +
          (lastTwoDigits + (lastTwoDigits + 1)).toString().padStart(2, "0"),
        10
      );

      setDateNumber(newNumber);

      // Ensure the function is being passed correctly and called
      if (onDateNumberChange && typeof onDateNumberChange === "function") {
        onDateNumberChange(newNumber); // Call the function passed from parent
      } else {
        console.error("onDateNumberChange is not a function");
      }

      localStorage.setItem(`dateNumber_${tabId}`, newNumber.toString());

      setTime({ minutes: initialMinutes, seconds: initialSeconds });
      setIsTimeUp(false);
    }
  }, [
    isTimeUp,
    initialMinutes,
    initialSeconds,
    dateNumber,
    tabId,
    onDateNumberChange
  ]);

  return (
    <div>
      <span>
        <span className="bg-[#1e2530] text-white p-1 mx-0.5 ">
          {time.minutes < 10 ? "0" : Math.floor(time.minutes / 10)}
        </span>
        <span className="bg-[#1e2530] text-white p-1 mx-0.5 ">
          {time.minutes % 10}
        </span>
      </span>
      <span className="bg-[#1e2530] text-white p-1 mx-0.25">:</span>
      <span>
        <span className="bg-[#1e2530] text-white p-1 mx-0.5 ">
          {time.seconds < 10 ? "0" : Math.floor(time.seconds / 10)}
        </span>
        <span className="bg-[#1e2530] text-white p-1 mx-0.5 ">
          {time.seconds % 10}
        </span>
      </span>
    </div>
  );
}

function Colorgame() {
  const [activeTab, setActiveTab] = useState(1);
  const [activeTab2, setActiveTab2] = useState(1);
  const [activeButton, setActiveButton] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [dateNumbers, setDateNumbers] = useState({
    dateNumber1: null,
    dateNumber2: null,
    dateNumber3: null,
    dateNumber4: null
  });

  const [buttonText, setButtonText] = useState("");

  const handleBtncolorClick = (text) => {
    // Save the clicked button's text in localStorage
    localStorage.setItem("buttonText", text);
    setButtonText(text); // Optionally update the state to reflect the selected button text
  };

  // Function to load date numbers from local storage
  const loadDateNumbers = () => {
    const todayDate = new Date();
    const formattedDate = `${todayDate.getFullYear()}${(
      todayDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}${todayDate.getDate().toString().padStart(2, "0")}00`;

    const storedDateNumbers = {
      dateNumber1: localStorage.getItem("dateNumber_1") || formattedDate,
      dateNumber2: localStorage.getItem("dateNumber_2") || formattedDate,
      dateNumber3: localStorage.getItem("dateNumber_3") || formattedDate,
      dateNumber4: localStorage.getItem("dateNumber_4") || formattedDate
    };

    // Parse and set the state
    setDateNumbers({
      dateNumber1: storedDateNumbers.dateNumber1 || "Not Set",
      dateNumber2: storedDateNumbers.dateNumber2 || "Not Set",
      dateNumber3: storedDateNumbers.dateNumber3 || "Not Set",
      dateNumber4: storedDateNumbers.dateNumber4 || "Not Set"
    });
  };

  useEffect(() => {
    // Load date numbers when the component mounts
    loadDateNumbers();
  }, []);

  // Function to handle date number change from CountdownTimer
  const handleDateNumberChange = (newDateNumber, tabId) => {
    // Save to local storage and update the state
    localStorage.setItem(`dateNumber_${tabId}`, newDateNumber);
    loadDateNumbers(); // Reload the date numbers from local storage
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const handleTabClick2 = (tabNumber2) => {
    setActiveTab2(tabNumber2);
  };

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  // Array of different images
   const images = [ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10];

   const [selectedIndex, setSelectedIndex] = useState(null);
 
   const handleImageClick = (index) => {
     console.log(`Image at index ${index + 1} clicked`);
     setSelectedIndex(index);  // Store the clicked image index
     setShowModal(true);  // Open the modal
   };

  return (
    <>
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
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                  />
                </svg>
                <h5 className="text-xs font-semibold tracking-tight text-dark">
                  Wallet Balance
                </h5>
              </div>
              <div className="flex gap-4 items-center">
                <h5 className="text-xs font-semibold tracking-tight text-dark">
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
        <div className="w-full flex items-center justify-between gap-1 px-2 py-1.5    rounded-xl shadow bg-gray-700">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#c4933f"
              className="w-6 h-6"
            >
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
              <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
            </svg>
          </div>
          <span className="text-slate-50 text-xs leading-none w-100">
            Please fill in the correct bank card information.
          </span>
          <div className="flex items-center">
            <button
              type="button"
              className="px-3 py-0.5 rounded-md text-xs font-medium text-center inline-flex items-center text-dark btn-gold-ltr"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_235_37)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4481 16.0478C20.874 14.8905 21.0547 13.6797 20.9857 12.4515L20.9287 11.4448C20.9182 11.2994 20.7615 11.2118 20.6303 11.2798L19.723 11.7474C19.1553 12.0426 18.4527 12.2279 17.6444 12.2967C17.5904 12.3003 17.5544 12.28 17.5327 12.2627C17.5102 12.2453 17.4832 12.212 17.4809 12.1599C17.4764 12.1128 17.4952 12.0665 17.5297 12.0347C18.6754 10.9773 19.561 9.39667 20.1594 7.33113C20.6588 5.61661 20.6835 3.93176 20.2404 2.32001L19.9157 1.14539C19.8737 0.991232 19.6705 0.948532 19.5647 1.07157L18.7452 2.00518C18.1843 2.64207 17.5957 3.11684 16.9988 3.40922C16.2677 3.76675 15.4871 4.00124 14.675 4.1069C14.1051 4.17928 13.5353 4.19013 12.9751 4.13585C11.6217 4.00269 10.23 4.18145 8.95373 4.64826C7.6655 5.12158 6.4815 5.8967 5.5247 6.89183C4.67963 7.77261 4.03176 8.78656 3.5991 9.91197C3.18294 10.9968 2.98048 12.1374 3.00148 13.299C3.02473 14.4614 3.26542 15.5882 3.72208 16.647C4.19523 17.7442 4.87684 18.7198 5.75115 19.5499C6.62472 20.38 7.63551 21.0126 8.75727 21.4331C9.84229 21.8391 10.9851 22.0302 12.1548 21.9961C13.3231 21.9657 14.4606 21.7132 15.5298 21.2485C16.6396 20.7665 17.6287 20.0775 18.4752 19.1967C19.348 18.2877 20.0132 17.2289 20.4481 16.0478Z"
                    fill="#292929"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_235_37">
                    <rect width="24" height="24" rx="10" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              Detail
            </button>
          </div>
        </div>
        <div className="">
          <div className="">
            <ul
              className="flex flex-row justify-between text-sm font-medium text-center  bg-gray-700 rounded-xl"
              aria-label="Tabs"
            >
              <li
                className={`rounded-xl ${
                  activeTab === 1
                    ? "gradient-btm-top text-[#8f5106ea]"
                    : "text-white/50"
                }`}
              >
                <div
                  className="flex flex-col justify-center items-center p-2.5"
                  onClick={() => handleTabClick(1)}
                >
                  <img src={timeicon} className="w-12" />
                  <h4>Win Go 30sec</h4>
                </div>
              </li>
              <li
                className={`font-normal rounded-xl ${
                  activeTab === 2
                    ? "gradient-btm-top text-[#8f5106ea]"
                    : "text-white/50"
                }`}
              >
                <div
                  className="flex flex-col justify-center items-center p-2.5"
                  onClick={() => handleTabClick(2)}
                >
                  <img src={timeicon} className="w-12" />
                  <h4>Win Go 1Min</h4>
                </div>
              </li>
              <li
                className={`font-normal rounded-xl ${
                  activeTab === 3
                    ? "gradient-btm-top text-[#8f5106ea]"
                    : "text-white/50"
                }`}
              >
                <div
                  className="flex flex-col justify-center items-center p-2.5"
                  onClick={() => handleTabClick(3)}
                >
                  <img src={timeicon} className="w-12" />
                  <h4>Win Go 3Min</h4>
                </div>
              </li>
              <li
                className={`font-normal rounded-xl ${
                  activeTab === 4
                    ? "gradient-btm-top text-[#8f5106ea]"
                    : "text-white/50"
                }`}
              >
                <div
                  className="flex flex-col justify-center items-center p-2.5"
                  onClick={() => handleTabClick(4)}
                >
                  <img src={timeicon} className="w-12" />
                  <h4>Win Go 5Min</h4>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-3">
            <div
              id="horizontal-alignment-1"
              className={`${activeTab === 1 ? "" : "hidden"}`}
              role="tabpanel"
              aria-labelledby="horizontal-alignment-item-1"
            >
              <div className="w-full  gradient-top-btm   rounded-xl shadow relative">
                <div className="w-5 h-5 rounded-full bg-[#1e2530] absolute -top-3 right-[40%] left-[48%]"></div>
                <div className="w-5 h-5 rounded-full bg-[#1e2530] absolute -bottom-3 right-[40%] left-[47%]"></div>
                <div className="px-2  flex divide-x divide-dashed divide-white/30">
                  <div className="flex  flex-col justify-between w-6/12 my-3">
                    <div className="flex items-center">
                      <div className="flex gap-1 items-center border border-[#8f5206] text-[#8f5206]  font-medium rounded-full text-sm px-5 py-0.5 text-center w-full mx-1 mr-4">
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
                      </div>
                    </div>
                    <div className="flex">
                      <h5 className="text-xs font-semibold tracking-tight text-[#8f5106ea]">
                        Win Go 30 Sec
                      </h5>
                    </div>
                    <div className="flex gap-2">
                      <img src={ball1} className="w-6" />
                      <img src={ball3} className="w-6" />
                      <img src={ball1} className="w-6" />
                      <img src={ball1} className="w-6" />
                      <img src={ball3} className="w-6" />
                    </div>
                  </div>

                  <div className="flex justify-between flex-col w-6/12  my-4">
                    <div className="flex items-end justify-end gap-1">
                      <span className="font-bold text-[#8f5106ea] text-sm">
                        Time Remaining
                      </span>
                    </div>
                    <div className="flex items-end justify-end py-1.5">
                      <h5 className="text-lg font-semibold tracking-tight  text-[#8f5106ea]">
                        <CountdownTimer
                          initialMinutes={0}
                          initialSeconds={30}
                          tabId={1}
                          onDateNumberChange={(newDateNumber) =>
                            handleDateNumberChange(newDateNumber, 1)
                          }
                        />
                      </h5>
                    </div>
                    <div className="flex items-end justify-end gap-2 ">
                      <span className="font-bold text-[#8f5106ea] leading-none">
                        {dateNumbers.dateNumber1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="horizontal-alignment-2"
              className={`${activeTab === 2 ? "" : "hidden"}`}
              role="tabpanel"
              aria-labelledby="horizontal-alignment-item-2"
            >
              <div className="w-full  gradient-top-btm   rounded-xl shadow relative">
                <div className="w-5 h-5 rounded-full bg-[#1e2530] absolute -top-3 right-[40%] left-[48%]"></div>
                <div className="w-5 h-5 rounded-full bg-[#1e2530] absolute -bottom-3 right-[40%] left-[47%]"></div>
                <div className="px-2  flex divide-x divide-dashed divide-white/30">
                  <div className="flex  flex-col justify-between w-6/12 my-3">
                    <div className="flex items-center">
                      <div className="flex gap-1 items-center border border-[#8f5206] text-[#8f5206]  font-medium rounded-full text-sm px-5 py-0.5 text-center w-full mx-1 mr-4">
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
                      </div>
                    </div>
                    <div className="flex">
                      <h5 className="text-xs font-semibold tracking-tight text-[#8f5106ea]">
                        Win Go 1 Min
                      </h5>
                    </div>
                    <div className="flex gap-2">
                      <img src={ball1} className="w-6" />
                      <img src={ball1} className="w-6" />
                      <img src={ball1} className="w-6" />
                      <img src={ball3} className="w-6" />
                      <img src={ball1} className="w-6" />
                    </div>
                  </div>

                  <div className="flex justify-between flex-col w-6/12  my-4">
                    <div className="flex items-end justify-end gap-1">
                      <span className="font-bold text-[#8f5106ea] text-sm">
                        Time Remaining
                      </span>
                    </div>
                    <div className="flex items-end justify-end py-1.5">
                      <h5 className="text-lg font-semibold tracking-tight  text-[#8f5106ea]">
                        <CountdownTimer
                          initialMinutes={1}
                          initialSeconds={0}
                          tabId={2}
                          onDateNumberChange={(newDateNumber) =>
                            handleDateNumberChange(newDateNumber, 2)
                          }
                        />
                      </h5>
                    </div>
                    <div className="flex items-end justify-end gap-2 ">
                      <span className="font-bold text-[#8f5106ea] leading-none">
                        {dateNumbers.dateNumber2}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="horizontal-alignment-3"
              className={`${activeTab === 3 ? "" : "hidden"}`}
              role="tabpanel"
              aria-labelledby="horizontal-alignment-item-3"
            >
              <div className="w-full  gradient-top-btm   rounded-xl shadow relative">
                <div className="w-5 h-5 rounded-full bg-[#1e2530] absolute -top-3 right-[40%] left-[48%]"></div>
                <div className="w-5 h-5 rounded-full bg-[#1e2530] absolute -bottom-3 right-[40%] left-[47%]"></div>
                <div className="px-2  flex divide-x divide-dashed divide-white/30">
                  <div className="flex  flex-col justify-between w-6/12 my-3">
                    <div className="flex items-center">
                      <div className="flex gap-1 items-center border border-[#8f5206] text-[#8f5206]  font-medium rounded-full text-sm px-5 py-0.5 text-center w-full mx-1 mr-4">
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
                      </div>
                    </div>
                    <div className="flex">
                      <h5 className="text-xs font-semibold tracking-tight text-[#8f5106ea]">
                        Win Go 3 Min
                      </h5>
                    </div>
                    <div className="flex gap-2">
                      <img src={ball1} className="w-6" />
                      <img src={ball1} className="w-6" />
                      <img src={ball1} className="w-6" />
                      <img src={ball1} className="w-6" />
                      <img src={ball3} className="w-6" />
                    </div>
                  </div>

                  <div className="flex justify-between flex-col w-6/12  my-4">
                    <div className="flex items-end justify-end gap-1">
                      <span className="font-bold text-[#8f5106ea] text-sm">
                        Time Remaining
                      </span>
                    </div>
                    <div className="flex items-end justify-end py-1.5">
                      <h5 className="text-lg font-semibold tracking-tight  text-[#8f5106ea]">
                        <CountdownTimer
                          initialMinutes={3}
                          initialSeconds={0}
                          tabId={3}
                          onDateNumberChange={(newDateNumber) =>
                            handleDateNumberChange(newDateNumber, 3)
                          }
                        />
                      </h5>
                    </div>
                    <div className="flex items-end justify-end gap-2 ">
                      <span className="font-bold text-[#8f5106ea] leading-none">
                        {dateNumbers.dateNumber3}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="horizontal-alignment-3"
              className={`${activeTab === 4 ? "" : "hidden"}`}
              role="tabpanel"
              aria-labelledby="horizontal-alignment-item-3"
            >
              <div className="w-full  gradient-top-btm   rounded-xl shadow relative">
                <div className="w-5 h-5 rounded-full bg-[#1e2530] absolute -top-3 right-[40%] left-[48%]"></div>
                <div className="w-5 h-5 rounded-full bg-[#1e2530] absolute -bottom-3 right-[40%] left-[47%]"></div>
                <div className="px-2  flex divide-x divide-dashed divide-white/30">
                  <div className="flex  flex-col justify-between w-6/12 my-3">
                    <div className="flex items-center">
                      <div className="flex gap-1 items-center border border-[#8f5206] text-[#8f5206]  font-medium rounded-full text-sm px-5 py-0.5 text-center w-full mx-1 mr-4">
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
                      </div>
                    </div>
                    <div className="flex">
                      <h5 className="text-xs font-semibold tracking-tight text-[#8f5106ea]">
                        Win Go 5 Min
                      </h5>
                    </div>
                    <div className="flex gap-2">
                      <img src={ball1} className="w-6" />
                      <img src={ball3} className="w-6" />
                      <img src={ball3} className="w-6" />
                      <img src={ball3} className="w-6" />
                      <img src={ball1} className="w-6" />
                    </div>
                  </div>

                  <div className="flex justify-between flex-col w-6/12  my-4">
                    <div className="flex items-end justify-end gap-1">
                      <span className="font-bold text-[#8f5106ea] text-sm">
                        Time Remaining
                      </span>
                    </div>
                    <div className="flex items-end justify-end py-1.5">
                      <h5 className="text-lg font-semibold tracking-tight  text-[#8f5106ea]">
                        <CountdownTimer
                          initialMinutes={5}
                          initialSeconds={0}
                          tabId={4}
                          onDateNumberChange={(newDateNumber) =>
                            handleDateNumberChange(newDateNumber, 4)
                          }
                        />
                      </h5>
                    </div>
                    <div className="flex items-end justify-end gap-2 ">
                      <span className="font-bold text-[#8f5106ea] leading-none">
                        {dateNumbers.dateNumber4}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-2 py-1.5   rounded-xl shadow bg-gray-800">
          <div className="flex w-full justify-between gap-3">
            <button
              type="button"
              onClick={() => handleBtncolorClick("Green")}
              className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  shadow-lg shadow-green-500/50 dark:shadow-lg  font-medium rounded-tr-xl rounded-bl-xl text-sm px-5 py-2.5 text-center "
            >
              Green
            </button>
            <button
              type="button"
              onClick={() => handleBtncolorClick("Violet")}
              className="w-full text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br shadow-lg shadow-violet-500/50 dark:shadow-lg  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Violet
            </button>
            <button
              type="button"
              onClick={() => handleBtncolorClick("Red")}
              className="w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  shadow-lg shadow-red-500/50 dark:shadow-lg  font-medium rounded-tl-xl rounded-br-xl text-sm px-5 py-2.5 text-center "
            >
              Red
            </button>
          </div>
          <div className="w-full flex items-center justify-between gap-1 px-2 py-1.5   rounded-xl shadow bg-gray-900 mt-3">
            <div className="grid grid-cols-5 gap-3 w-full">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`ball-${index}`}
                  className=""
                  onClick={() => handleImageClick(index)} // Capture the index on click
                />
              ))}
            </div>
          </div>
          <div className="my-1 flex gap-1 overflow-auto mt-3">
            <button
              type="button"
              className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-5 py-0.5 text-center me-2 mb-2 ${
                activeButton === 0 ? "bg-[#fae59f] text-zinc-900" : ""
              }`}
              onClick={() => handleButtonClick(0)}
            >
              Random
            </button>
            <button
              type="button"
              className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-5 py-0.5 text-center me-2 mb-2 ${
                activeButton === 1 ? "bg-[#fae59f] text-zinc-900" : ""
              }`}
              onClick={() => handleButtonClick(1)}
            >
              2X
            </button>
            <button
              type="button"
              className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-5 py-0.5 text-center me-2 mb-2 ${
                activeButton === 2 ? "bg-[#fae59f] text-zinc-900" : ""
              }`}
              onClick={() => handleButtonClick(2)}
            >
              5X
            </button>
            <button
              type="button"
              className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-5 py-0.5 text-center me-2 mb-2 ${
                activeButton === 3 ? "bg-[#fae59f] text-zinc-900" : ""
              }`}
              onClick={() => handleButtonClick(3)}
            >
              10X
            </button>
            <button
              type="button"
              className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-5 py-0.5 text-center me-2 mb-2 ${
                activeButton === 4 ? "bg-[#fae59f] text-zinc-900" : ""
              }`}
              onClick={() => handleButtonClick(4)}
            >
              20X
            </button>
            <button
              type="button"
              className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-5 py-0.5 text-center me-2 mb-2 ${
                activeButton === 5 ? "bg-[#fae59f] text-zinc-900" : ""
              }`}
              onClick={() => handleButtonClick(5)}
            >
              50X
            </button>
            <button
              type="button"
              className={`text-[#fae59f]  border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-5 py-0.5 text-center me-2 mb-2 ${
                activeButton === 6 ? "bg-[#fae59f] text-zinc-900" : ""
              }`}
              onClick={() => handleButtonClick(6)}
            >
              100X
            </button>
          </div>
          <div className="my-1 flex gap-1 overflow-auto mt-3">
            <div
              className="inline-flex rounded-md shadow-sm w-full px-4"
              role="group"
            >
              <button
                type="button"
                className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  font-medium rounded-s-full  text-sm px-5 py-2.5 text-center"
                onClick={() => setShowModal(true)}
              >
                Big
              </button>

              <button
                type="button"
                className="w-full text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br  font-medium rounded-e-full text-sm px-5 py-2.5 text-center "
                onClick={() => setShowModal(true)}
              >
                Small
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="">
            <ul
              className="flex flex-row justify-between items-center text-sm font-medium text-center text-gray-50 rounded-xl"
              aria-label="Tabs"
            >
              <li
                className={` rounded-xl w-full p-2 ${
                  activeTab2 === 1 ? "gradient-btm-top" : ""
                }`}
              >
                <div
                  className="flex flex-col justify-center items-center "
                  onClick={() => handleTabClick2(1)}
                >
                  <span>Game History</span>
                </div>
              </li>
              <li
                className={` rounded-xl w-full p-2 ${
                  activeTab2 === 2 ? "gradient-btm-top" : ""
                }`}
              >
                <div
                  className="flex flex-col justify-center items-center "
                  onClick={() => handleTabClick2(2)}
                >
                  <span>Chart</span>
                </div>
              </li>
              <li
                className={` rounded-xl w-full p-2 ${
                  activeTab2 === 3 ? "gradient-btm-top" : ""
                }`}
              >
                <div
                  className="flex flex-col justify-center items-center "
                  onClick={() => handleTabClick2(3)}
                >
                  <span>My History</span>
                </div>
              </li>
            </ul>
            <div className="mt-3">
              <div
                id="horizontal-alignment-1"
                className={`${activeTab2 === 1 ? "" : "hidden"}`}
                role="tabpanel"
                aria-labelledby="horizontal-alignment-item-1"
              >
                <div className="w-full  gradient-top-btm   rounded-xl shadow ">
                  <div className="rounded-lg relative overflow-x-auto ">
                    <table className="rounded-lg w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="p-2">
                            Period
                          </th>
                          <th scope="col" className="p-2">
                            Number
                          </th>
                          <th scope="col" className="p-2">
                            Big Small
                          </th>
                          <th scope="col" className="p-2">
                            Color
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            className=" font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            20240423011099
                          </th>
                          <td className="text-green-500 font-black text-center text-xl">
                            7
                          </td>
                          <td className="text-green-500 font-black text-center">
                            Big
                          </td>
                          <td className="">
                            <div className="flex justify-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full text-center"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            className=" font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            20240423011099
                          </th>
                          <td className="text-red-500 font-black text-center text-xl">
                            9
                          </td>
                          <td className="text-red-500 font-black text-center">
                            Big
                          </td>
                          <td className="">
                            <div className="flex justify-center">
                              <div className="w-2 h-2 bg-red-500 rounded-full text-center"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            className=" font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            20240423011099
                          </th>
                          <td className="text-green-500 font-black text-center text-xl">
                            2
                          </td>
                          <td className="text-green-500 font-black text-center">
                            Small
                          </td>
                          <td className="">
                            <div className="flex justify-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full text-center"></div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                id="horizontal-alignment-2"
                className={`${activeTab2 === 2 ? "" : "hidden"}`}
                role="tabpanel"
                aria-labelledby="horizontal-alignment-item-2"
              ></div>
              <div
                id="horizontal-alignment-3"
                className={`${activeTab2 === 3 ? "" : "hidden"}`}
                role="tabpanel"
                aria-labelledby="horizontal-alignment-item-3"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Modal showModal={showModal} index={selectedIndex} onClose={closeModal} />
    </>
  );
}

export default Colorgame;
