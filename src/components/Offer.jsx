import React from "react";
import Image from "next/image";
import CountDown from "./CountDown"

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          check what we have on offer
        </h1>
        <p className="text-white xl:text-xl">
          cant write copy for shit
        </p>
        <CountDown />
        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </div>
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/slidePic4.jpg" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
