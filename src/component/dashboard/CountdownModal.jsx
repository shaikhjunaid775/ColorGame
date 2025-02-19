const CountdownModal = ({ showCounterModal, setShowCounterModal, seconds }) => {
  if (!showCounterModal) return null; // Do not render if modal is not shown

  return (
    <div className="z-10 fixed inset-0 flex items-center gap-4 justify-center bg-black bg-opacity-30">
      <div className="bg-gray-800 text-yellow-400 text-9xl font-extrabold px-7 py-5 rounded-lg shadow-lg">
        {seconds < 10 ? "0" : Math.floor(seconds / 10)}
      </div>
      <div className="bg-gray-800 text-yellow-400 text-9xl font-extrabold px-7 py-5 rounded-lg shadow-lg">
        {seconds % 10}
      </div>
    </div>
  );
};

export default CountdownModal;
