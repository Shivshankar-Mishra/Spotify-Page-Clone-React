import React from "react";
import spotifylogo from "../assets/spotify-logo.svg";

const Header = () => {
  return (
    <header>
      <div className="flex flex-row items-center justify-between bg-black px-[12vw] py-4 w-[100vw] h-20 ">
        <div className="flex flex-row justify-center items-center gap-1">
          <img
            src={spotifylogo}
            alt="Spotify Logo"
            className="w-12 h-12 bg-white rounded-md"
          />
          <span className="text-white text-[1.6rem] font-bold tracking-tighter">Spotify</span>
        </div>
        <div className="flex flex-row justify-start items-center gap-8 text-white px-6">
          <div><span className="font-bold hover:text-green-500">Premium</span></div>
          <div><span className="font-bold hover:text-green-500">Support</span></div>
          <div><span className="font-bold hover:text-green-500">Download</span></div>
          <div><span className="font-light" >|</span></div>
          <div><span className="text-slate-200 hover:text-green-500">Sign up</span></div>
          <div><span className="text-slate-200 hover:text-green-500">Log in</span></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
