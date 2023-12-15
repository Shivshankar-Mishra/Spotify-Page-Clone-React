import React from "react";
import bubblesdktp from "../assets/bubbles-dktp.svg";
import mobileScreen from "../assets/mobileScreen.png";

const Heroscreen = () => {
  return (
    <div className="w-full h-[75vh] bg-gradient-to-r from-[#c329ba] to-[#6c0ee0] relative overflow-hidden">
      <img
        src={bubblesdktp}
        alt="It is background img"
        className="relative -top-[15vh]"
      />
      <div className="flex flex-row justify-center gap-20 items-center px-[5rem] absolute top-[13vh]">
        <img src={mobileScreen} alt="mobile img" className="rounded-t-[40px]" />
        <div className="flex flex-col gap-10 w-[45%] relative -top-28">
          <h2 className="text-white font-[750] text-6xl leading-[4.5rem] tracking-tighter">Play millions of songs and podcasts, for free.</h2>
          <button className="w-[12rem] h-12 rounded-full text-black font-semibold bg-white uppercase hover:scale-105">get spotify free</button>
        </div>
      </div>
    </div>
  );
};

export default Heroscreen;
