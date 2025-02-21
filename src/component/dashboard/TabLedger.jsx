import { useState } from "react";

function TabLedger({activeTab}) {
  const [activeTab2, setActiveTab2] = useState(1);

  const handleTabClick2 = (tabNumber2) => {
    setActiveTab2(tabNumber2);
  };

  return (
    <>
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
          <div className={`${activeTab === 1 ? "" : "hidden"}`}>
            <div className="w-full  gradient-top-btm   rounded-xl shadow ">
              <div className="rounded-lg relative overflow-x-auto text-center">
                <span>Win Go 30 Sec</span>
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
          <div className={`${activeTab === 2 ? "" : "hidden"}`}>
            <div className="w-full  gradient-top-btm   rounded-xl shadow ">
              <div className="rounded-lg relative overflow-x-auto text-center">
              <span>Win Go 1 Min</span>
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
          <div className={`${activeTab === 3 ? "" : "hidden"}`}>
            <div className="w-full  gradient-top-btm   rounded-xl shadow ">
              <div className="rounded-lg relative overflow-x-auto text-center">
              <span>Win Go 3 Min</span>
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
          <div className={`${activeTab === 4 ? "" : "hidden"}`}>
            <div className="w-full  gradient-top-btm   rounded-xl shadow ">
              <div className="rounded-lg relative overflow-x-auto text-center">
              <span>Win Go 5 Min</span>
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
        </div>
        <div
          id="horizontal-alignment-2"
          className={`${activeTab2 === 2 ? "" : "hidden"}`}
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-2"
        >
          <div className={`${activeTab === 1 ? "" : "hidden"}`}>
            <div className="w-full  gradient-top-btm   rounded-xl shadow ">
              <div className="rounded-lg relative overflow-x-auto ">
                <span>tab1</span>
              </div>
            </div>
          </div>
          <div className={`${activeTab === 2 ? "" : "hidden"}`}>
            <div className="w-full  gradient-top-btm   rounded-xl shadow ">
              <div className="rounded-lg relative overflow-x-auto ">
                <span>tab2</span>
              </div>
            </div>
          </div>
          <div className={`${activeTab === 3 ? "" : "hidden"}`}>
            <div className="w-full  gradient-top-btm   rounded-xl shadow ">
              <div className="rounded-lg relative overflow-x-auto ">
                <span>tab3</span>
              </div>
            </div>
          </div>
          <div className={`${activeTab === 4 ? "" : "hidden"}`}>
            <div className="w-full  gradient-top-btm   rounded-xl shadow ">
              <div className="rounded-lg relative overflow-x-auto ">
                <span>tab4</span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="horizontal-alignment-3"
          className={`${activeTab2 === 3 ? "" : "hidden"}`}
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-3"
        >
          <div className={`${activeTab === 1 ? "" : "hidden"}`}>
            <div className="w-full  gradient-top-btm   rounded-xl shadow ">
              <div className="rounded-lg relative overflow-x-auto ">
                <span>tab1</span>
              </div>
            </div>
          </div>
          <div className={`${activeTab === 2 ? "" : "hidden"}`}>
            <div className="w-full  gradient-top-btm   rounded-xl shadow ">
              <div className="rounded-lg relative overflow-x-auto ">
                <span>tab2</span>
              </div>
            </div>
          </div>
          <div className={`${activeTab === 3 ? "" : "hidden"}`}>
            <div className="w-full  gradient-top-btm   rounded-xl shadow ">
              <div className="rounded-lg relative overflow-x-auto ">
                <span>tab3</span>
              </div>
            </div>
          </div>
          <div className={`${activeTab === 4 ? "" : "hidden"}`}>
            <div className="w-full  gradient-top-btm   rounded-xl shadow ">
              <div className="rounded-lg relative overflow-x-auto ">
                <span>tab4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TabLedger;
