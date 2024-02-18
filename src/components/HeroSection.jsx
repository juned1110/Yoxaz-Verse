import React, { useState } from "react";
import items from "../assets/data.json";

import Navbar from "./Navbar";
import Search from "./Search";

const HeroSection = () => {
  const distinctStatuses = [...new Set(items.map((item) => item.status))];
  return (
    <>
      <Navbar />
      <Search distinctStatuses={distinctStatuses} />
    </>
  );
};

export default HeroSection;
