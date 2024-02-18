import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="wrapper flex flex-col sm:flex-row justify-between items-center bg-[#FBFCFE] my-2 sm:items-start">
        <div className="h-16 font-extrabold text-xl flex items-center ml-6 sm:ml-6">
          Orders
        </div>
        <div className="hidden md:block"></div>
        <div className="btn-wrapper sm:mt-4 mr-10">
          <button className="h-10 w-full sm:w-34 sm:mr-0 sm:ml-6 rounded-md bg-[#404CEB] text-[#fff] font-[sans-serif] text-sm font-medium tracking-tight px-6 sm:px-10 leading-none ">
            CREATE NEW
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
