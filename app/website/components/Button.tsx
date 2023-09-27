"use client"
import React from "react";

const Button = ({ styles }:any) => (
  <button type="button" className={`lg:py-2 py-2 md:px-6 px-4 font-poppins font-medium lg:text-[18px] text-[14px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;
