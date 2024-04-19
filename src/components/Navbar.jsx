import React from "react";
import { HamburgerMenu, UserInterView } from "../assets/Icons";

function Navbar() {
  return (
    <div className="w-full lg:px-[120px] px-[24px] ">
      <div className="w-full flex justify-between items-center h-[100px] ">
        <UserInterView
          className={"w-[150px] h-[18.75px] lg:w-[200px] lg:h-[25px] "}
        />
        <HamburgerMenu
          className={
            "lg:hidden sm:w-[48px] sm:h-[48px] w-[40px] h-[40px]"
          }
        />

        <nav className="lg:flex gap-12 w-full justify-center items-center hidden text-[15px]">
          <div className="cursor-pointer hover:text-[#158D71] duration-300 transition-all">
            Product
          </div>
          <div className="cursor-pointer hover:text-[#158D71] duration-300 transition-all ">
            Pricing
          </div>
          <div className="cursor-pointer hover:text-[#158D71] duration-300 transition-all ">
            Company
          </div>
          <div className="cursor-pointer hover:text-[#158D71] duration-300 transition-all ">
            Resources
          </div>
          <div className="cursor-pointer hover:text-[#158D71] duration-300 transition-all ">
            Participants
          </div>
        </nav>

        <div className="lg:flex gap-3 hidden">
          <button className="bg-[#158D71] text-white rounded-md h-[47px] w-[104px] ">
            Sign Up
          </button>
          <button className="w-[104px] h-[47px] ">Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
