import React from "react";
import Button from "./Button";
import HomePageImg from "../assets/homePage.png";

function Home() {
  return (
    <div className="flex lg:flex-row flex-col w-full lg:px-[120px] lg:items-center px-[24px] sm:pt-[48px] sm:pb-[70px]  gap-8 ">
      <div className="w-full pt-[48px] sm:pt-0">
        <div className="flex flex-col gap-8 sm:gap-10 sm:max-w-[510px] max-w-[310px]">
          <h1 className=" sm:text-[56px] sm:leading-[61.6px] text-[40px] leading-[44px] font-[400] ">
            We Connect researchers and participants{" "}
          </h1>

          <p className="sm:text-[20px] text-[16px]  leading-[24px] w-full font-[400px] sm:max-w-[450px]">
            Get fast access to quality participants or earn money by
            participating in studies
          </p>
          <Button title={"Sign Up free"} className={"w-[135px] h-[47px] "} />
        </div>
      </div>

      <div className="w-full px-3 py-10 sm:pt-[64px] sm:pb-[48px] sm:flex sm:justify-center sm:items-center">
        <img src={HomePageImg} alt="img" className="w-full sm:max-w-[600px]" />
      </div>
    </div>
  );
}

export default Home;
