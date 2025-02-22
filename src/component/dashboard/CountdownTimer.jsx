import { useState, useEffect } from "react";
import CountdownModal from "./CountdownModal";
import beepSound from "../../assets/count.wav";

function CountdownTimer({
  initialMinutes,
  initialSeconds,
  tabId,
  activeTab, // Get activeTab from parent
  onDateNumberChange,
  setShowModal
}) {
  const [time, setTime] = useState({
    minutes: initialMinutes,
    seconds: initialSeconds
  });

  const [isTimeUp, setIsTimeUp] = useState(false);
  const [dateNumber, setDateNumber] = useState(getStoredNumber(tabId));
  const [showCounterModal, setShowCounterModal] = useState(false);
  const [hasPlayedSound, setHasPlayedSound] = useState(false);

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
      return parseInt(stored, 10);
    } else {
      const increment = tabId * 1000;
      return parseInt(formattedDate + increment.toString(), 10);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime.seconds > 0) {
          // Play sound only if tab is active and sound hasn't played yet
          if (
            prevTime.seconds <= 6 &&
            prevTime.minutes === 0 &&
            activeTab === tabId
          ) {
            if (!hasPlayedSound) {
              const beepAudio = new Audio(beepSound);
              beepAudio.play();
              setHasPlayedSound(true);
            }
            setShowCounterModal(true);
          }
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { minutes: prevTime.minutes - 1, seconds: 59 };
        } else {
          clearInterval(timer);
          setIsTimeUp(true);
          setShowCounterModal(false);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [time, activeTab]); // Add activeTab to dependencies

  useEffect(() => {
    if (showCounterModal) {
      setShowModal(false); // Close parent modal when counter modal is shown
    }
  }, [showCounterModal, setShowModal]);

  useEffect(() => {
    if (isTimeUp) {
      const lastTwoDigits = parseInt(dateNumber.toString().slice(-2), 10);
      const newNumber = parseInt(
        getFormattedDate() +
          (lastTwoDigits + (lastTwoDigits + 1)).toString().padStart(2, "0"),
        10
      );

      setDateNumber(newNumber);

      if (onDateNumberChange && typeof onDateNumberChange === "function") {
        onDateNumberChange(newNumber);
      } else {
        console.error("onDateNumberChange is not a function");
      }

      localStorage.setItem(`dateNumber_${tabId}`, newNumber.toString());

      setTime({ minutes: initialMinutes, seconds: initialSeconds });
      setIsTimeUp(false);
      setHasPlayedSound(false); // Reset sound flag after reset
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
    <>
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

        {/* Countdown Modal */}
        <CountdownModal
          showCounterModal={showCounterModal}
          setShowCounterModal={setShowCounterModal}
          seconds={time.seconds}
        />
      </div>
    </>
  );
}

export default CountdownTimer;
