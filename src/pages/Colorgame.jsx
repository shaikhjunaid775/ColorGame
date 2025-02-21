// import React from "react";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../component/dashboard/Modal";
import timeicon from "../assets/time.png";
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
import Wallet from "../component/dashboard/Wallet";
import Notification from "../component/dashboard/Notification";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CountdownModal from "../component/dashboard/CountdownModal";
import CountdownTimer from "../component/dashboard/CountdownTimer";
import TabLedger from "../component/dashboard/TabLedger";

function Colorgame() {
  const [showCounterModal, setShowCounterModal] = useState(false);

  const [activeTab, setActiveTab] = useState(1);
  const [activeButton, setActiveButton] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ index: null, colors: [] });
  const [dateNumbers, setDateNumbers] = useState({
    dateNumber1: null,
    dateNumber2: null,
    dateNumber3: null,
    dateNumber4: null
  });

  const tabs = [
    { id: 1, label: "Win Go 30 sec" },
    { id: 2, label: "Win Go 1 Min" },
    { id: 3, label: "Win Go 3 Min" },
    { id: 4, label: "Win Go 5 Min" }
  ];

  const buttonLabels = ["Random", "2X", "5X", "10X", "20X", "50X", "100X"];

  const images = [
    // red: #e8373e, green: #1d8c50;
    { src: ball1, colors: ["#b35af6", "#e8373e"] },
    { src: ball2, colors: ["#5cce90"] },
    { src: ball3, colors: ["#e8373e"] }, // No color
    { src: ball4, colors: ["#5cce90"] },
    { src: ball5, colors: ["#e8373e"] }, // No color
    { src: ball6, colors: ["#5cce90", "#b35af6"] },
    { src: ball7, colors: ["#e8373e"] },
    { src: ball8, colors: ["#5cce90"] },
    { src: ball9, colors: ["#e8373e"] },
    { src: ball10, colors: ["#5cce90"] }
  ];

  const colors = {
    "#e8373e": {
      name: "Red",
      class:
        "bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50"
    },
    "#1d8c50": {
      name: "Green",
      class:
        "bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50"
    },
    "#b35af6": {
      name: "Violet",
      class:
        "bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br shadow-lg shadow-violet-500/50"
    }
  };

  const sizes = {
    Big: {
      name: "Big",
      class:
        "bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50"
    },
    Small: {
      name: "Small",
      class:
        "bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br shadow-lg shadow-violet-500/50"
    }
  };

  const handleBtncolorClick = (color) => {
    const selectedColor = colors[color];
    localStorage.setItem("buttonText", color);

    setModalContent({
      index: null, // No index for color selection
      colors: [selectedColor.name] // Store color name instead of color codes
    });

    setShowModal(true);
  };

  const handleBtnSizeClick = (sizeKey) => {
    localStorage.setItem("buttonsize", sizeKey);
  
    setModalContent({
      index: null, // No index for size selection
      colors: [sizes[sizeKey].name] // Use name instead of key
    });
  
    setShowModal(true);
  };
  

  const handleImageClick = (index) => {
    const selectedBall = images[index];

    console.log(`Clicked on image ${index + 1}, Colors: `, selectedBall.colors);

    setModalContent({
      index: index + 1,
      colors: selectedBall.colors // Store color codes
    });

    setShowModal(true);
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

  // Close Betting Modal when Timer Modal opens
  useEffect(() => {
    console.log("showCounterModal in Parent:", showCounterModal); // Debugging
    if (showCounterModal) {
      setShowModal(false);
    }
  }, [showCounterModal]);

  // Function to handle date number change from CountdownTimer
  const handleDateNumberChange = (newDateNumber, tabId) => {
    // Save to local storage and update the state
    localStorage.setItem(`dateNumber_${tabId}`, newDateNumber);
    loadDateNumbers(); // Reload the date numbers from local storage
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="mx-2 my-1 flex flex-col gap-2 mb-20">
        <Navbar />
        <Wallet />
        <Notification />
        <div className="">
          <ul
            className="flex flex-row justify-between text-sm font-medium text-center  bg-gray-700 rounded-xl"
            aria-label="Tabs"
          >
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`rounded-xl ${
                  activeTab === tab.id
                    ? "gradient-btm-top text-[#8f5106ea]"
                    : "text-white/50"
                }`}
              >
                <div
                  className="flex flex-col justify-center items-center p-2.5"
                  onClick={() => handleTabClick(tab.id)}
                >
                  <img src={timeicon} className="w-12" />
                  <h4 className="leading-4">{tab.label}</h4>
                </div>
              </li>
            ))}
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
              <div className="w-5 h-5 rounded-full bg-[#1e2530] absolute -bottom-3 right-[40%] left-[48%]"></div>
              <div className="px-2  flex divide-x divide-dashed divide-white/30">
                <div className="flex  flex-col justify-between w-6/12 my-3 mr-1">
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
                        activeTab={activeTab} // Pass activeTab
                        onDateNumberChange={(newDateNumber) =>
                          handleDateNumberChange(newDateNumber, 1)
                        }
                        setShowCounterModal={setShowCounterModal} // Pass state setter
                        showCounterModal={showCounterModal} // Pass actual state
                        setShowModal={setShowModal}
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
                        activeTab={activeTab} // Pass activeTab
                        onDateNumberChange={(newDateNumber) =>
                          handleDateNumberChange(newDateNumber, 2)
                        }
                        setShowCounterModal={setShowCounterModal} // Pass state setter
                        showCounterModal={showCounterModal} // Pass actual state
                        setShowModal={setShowModal}
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
                        activeTab={activeTab} // Pass activeTab
                        onDateNumberChange={(newDateNumber) =>
                          handleDateNumberChange(newDateNumber, 3)
                        }
                        setShowCounterModal={setShowCounterModal} // Pass state setter
                        showCounterModal={showCounterModal} // Pass actual state
                        setShowModal={setShowModal}
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
                        activeTab={activeTab} // Pass activeTab
                        onDateNumberChange={(newDateNumber) =>
                          handleDateNumberChange(newDateNumber, 4)
                        }
                        setShowCounterModal={setShowCounterModal} // Pass state setter
                        showCounterModal={showCounterModal} // Pass actual state
                        setShowModal={setShowModal}
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

        <div className="w-full px-2 py-1.5   rounded-xl shadow bg-gray-800 relative">
          {/* Countdown Modal is placed here in the parent */}
          <CountdownModal
            showCounterModal={showCounterModal}
            setShowCounterModal={setShowCounterModal}
          />
          <div className="flex w-full justify-between gap-3">
            {Object.entries(colors).map(
              ([color, { name, class: bgClass }], index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleBtncolorClick(color)}
                  className={`w-full text-white ${bgClass} dark:shadow-lg font-medium text-sm px-5 py-2.5 text-center ${
                    index === 0
                      ? "rounded-tr-xl rounded-bl-xl"
                      : index === 2
                      ? "rounded-tl-xl rounded-br-xl"
                      : "rounded-lg"
                  }`}
                >
                  {name}
                </button>
              )
            )}
          </div>
          ;
          <div className="w-full flex items-center justify-between gap-1 px-2 py-1.5   rounded-xl shadow bg-gray-900 mt-3">
            <div className="grid grid-cols-5 gap-3 w-full">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src} // Access the src from the object
                  alt={`ball-${index + 1}`}
                  className=""
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </div>
          <div className="my-1 flex gap-1 overflow-auto mt-3">
            {buttonLabels.map((label, index) => (
              <button
                key={index}
                type="button"
                className={`text-[#fae59f] border border-[#fae59f] focus:outline-none font-medium rounded-lg text-sm px-5 py-0.5 text-center me-2 mb-2 ${
                  activeButton === index ? "bg-[#fae59f] text-zinc-900" : ""
                }`}
                onClick={() => handleButtonClick(index)}
              >
                {label}
              </button>
            ))}
          </div>
          ;
          <div className="my-1 flex gap-1 overflow-auto mt-3">
            <div
              className="inline-flex rounded-md shadow-sm w-full px-4"
              role="group"
            >
              {Object.entries(sizes).map(([key, value]) => (
                <button
                  key={key}
                  type="button"
                  className={`w-full text-white font-medium text-sm px-5 py-2.5 text-center ${
                    value.class
                  } ${key === "Big" ? "rounded-s-full" : "rounded-e-full"}`}
                  onClick={() => handleBtnSizeClick(key)}
                >
                  {value.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <TabLedger activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {/* Modal */}
      {showModal && (
        <Modal
          showModal={showModal}
          ballIndex={modalContent.index} // Pass index
          colors={modalContent.colors} // Pass colors array
          gradientColor={modalContent.colors.join(", ")} // Fix: Join color names or hex values
          onClose={closeModal}
          label={tabs.find((tab) => tab.id === activeTab)?.label}
        />
      )}
      <Footer />
    </>
  );
}

export default Colorgame;
