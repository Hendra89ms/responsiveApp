import React from "react";
import adobe from "../assets/adobeSvg.png";
import amazon from "../assets/amazon.png";
import intuit from "../assets/intuit.png";
import nng from "../assets/nng.png";
import pinterest from "../assets/pinterest.png";
import spotify from "../assets/spotify.png";

function Footer() {
  return (
    <div className="w-full ">
      <div className="w-full h-[265px] bg-[#158D71] text-white  flex flex-col justify-center items-center gap-8 sm:gap-16 ">
        <h1 className="text-center">TRUSTED BY RESEARCH TEAMS AT</h1>

        <div className="flex gap-5 sm:gap-8 lg:gap-10 sm:flex sm:justify-around lg:justify-center sm:w-full ">
          <div className="flex flex-col lg:flex-row lg:gap-10 gap-5 sm:gap-8 justify-center items-center">
            <img src={adobe} alt="adobe" className="w-[132px] h-[30px]" />
            <img src={pinterest} alt="adobe" className="w-[114px] h-[27px]" />
            <img src={nng} alt="adobe" className="w-[64px] h-[30px]" />
          </div>

          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 sm:gap-8 justify-center items-center">
            <img src={spotify} alt="adobe" className="w-[100px] h-[30px]" />
            <img src={intuit} alt="adobe" className="w-[88px] h-[25px]" />
            <img src={amazon} alt="adobe" className="w-[100px] h-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
