import React, { useState } from "react";
import DataList from "./DataList";

const Search = ({ distinctStatuses }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="outer sm:h-40 w-full ">
        <div className="searchContainer flex flex-col md:flex-row justify-evenly mx-4 rounded-[10px] shadow-xl border border-solid   pb-5">
          <div className="w-full md:w-2/5 mb-4 md:mb-0 md:mr-4 bg-[#FDFEFE] ">
            <label className="mt-4 md:mt-10 bg-white w-full md:w-[15vw] flex flex-col  px-1 rounded-2xl font-medium">
              What are you looking for?
            </label>
            <input
              id="search-bar"
              placeholder="Search for category, name, company, etc"
              className="px-6 py-2 w-full rounded-md outline-none bg-white border"
            />
          </div>
          <div className="w-full md:w-1/5 mb-4 md:mb-0 md:mr-4">
            <label className="mt-4 md:mt-10 bg-white w-full md:w-[10vw] flex flex-col  px-2 rounded-2xl shadow-2xl font-medium">
              Category
            </label>
            <select
              className="px-6 py-2 w-full rounded-md outline-none bg-white border text-[#9CA3C1]"
              name=""
              id=""
            >
              <option value="">All</option>
            </select>
          </div>
          <div className="w-full md:w-1/5 mb-4 md:mb-0">
            <label className="mt-4 md:mt-10 bg-white w-full md:w-[10vw] flex flex-col  px-2 rounded-2xl shadow-2xl font-medium">
              Status
            </label>
            <select
              className="px-6 py-2 w-full rounded-md outline-none bg-white border text-[#9CA3C1]"
              name=""
              id="All"
              onChange={handleSelectChange}
            >
              <option value="All">All</option>
              {distinctStatuses.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center mt-16   ">
            <button className="flex items-center justify-center h-10 w-10 rounded-md bg-[#F0F1F1] text-[#fff] font-[sans-serif] text-sm font-medium tracking-tight leading-none mr-2 ">
              <svg
                className="h-6 w-6 text-slate-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="7 7 12 12 17 7" />
                <polyline points="7 13 12 18 17 13" />
              </svg>
            </button>
          </div>
          <div className="flex items-center mt-16 ">
            <button className="h-10 w-24  rounded-md bg-[#404CEB] text-[#fff] font-[sans-serif] text-sm font-medium tracking-tight leading-none text-center    ">
              SEARCH
            </button>
          </div>
        </div>
      </div>
      <DataList selectedStatus={selectedOption} />
    </div>
  );
};

export default Search;
