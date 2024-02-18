import React, { useEffect, useState } from "react";
import items from "../assets/data.json";

const DataList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  let perPageCount = 10;
  const indexOfLastItem = currentPage * perPageCount;
  const indexOfFirstItem = indexOfLastItem - perPageCount;

  useEffect(() => {
    if (props.selectedStatus !== "" && props.selectedStatus !== "All") {
      setFilteredData(
        items.filter((item) => item.status === props.selectedStatus)
      );
    } else {
      setFilteredData(items.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [props.selectedStatus, props.items]);

  useEffect(() => {
    setFilteredData(items.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage]);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-[30px] m-4 overflow-x-auto">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div className="flex justify-between items-center w-[20vw]  sm:w-[30vw]">
            <span className="text-xs sm:text-sm font-medium">
              Product Summary
            </span>
            <button className="px-4 py-2 rounded-md shadow-xl border border-solid bg-[#FDFEFE] text-sm font-medium mr-12">
              Show
            </button>
          </div>
          <div className="w-full sm:w-[20vw] flex justify-between mt-4 sm:mt-0">
            <select className="px-6 py-2 w-full rounded-md outline-none bg-white border text-[#9CA3C1] mr-3">
              <option>ALL COLUMNS</option>
              {items &&
                Object.keys(items[0]).map((heading, index) => (
                  <option className="uppercase" key={index}>
                    {heading}
                  </option>
                ))}
            </select>
          </div>
          <div className="w-[30vw]">
            <button className="px-4 py-2 rounded-md bg-[#404CEB] text-white text-sm font-medium mr-14 ">
              DISPATCH SELECTED
            </button>
          </div>
          <div className=" flex justify-end">
            <nav
              className="inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <div>
                <button
                  className="pr-2 "
                  disabled={currentPage === 1}
                  onClick={() => paginate(currentPage - 1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-chevron-left "
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                    />
                  </svg>
                </button>
                {items.length > perPageCount && (
                  <span className="">
                    {currentPage} of {Math.ceil(items.length / perPageCount)}
                  </span>
                )}
                <button
                  className="pl-2"
                  disabled={indexOfLastItem >= items.length}
                  onClick={() => paginate(currentPage + 1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" name="" id="" />
              </th>
              {items &&
                Object.keys(items[0]).map((heading, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {heading}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredData.map((row) => (
              <tr key={row.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <input type="checkbox" name="" id="" />
                </td>
                {Object.keys(row).map((key) => (
                  <td
                    key={key}
                    className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    {row[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataList;
