import React from "react";
import playButtonicon from "../assets/playButton.png";
import libraryicon from "../assets/library.png";
import hearticon from "../assets/heart.png";
import powericon from "../assets/powerIcon.png";

const Whylist = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-20 px-10 py-[75px]">
        <h2 className="text-black text-[40px] font-bold text-center">
          Why Spotify?
        </h2>
        <div className="flex flex-row justify-center items-start gap-5 px-10">
          <div className="flex flex-col justify-center items-center gap-5 w-[20%] p-4">
            <img
              src={playButtonicon}
              alt="play icon"
              className="w-[142px] h-[142px]"
            />
            <h3 className="text-xl font-bold mt-4">Play your favorites.</h3>
            <p className="text-center font-medium">
              Listen to the songs you love, and discover new music and podcasts.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 w-[20%] p-4">
            <img
              src={libraryicon}
              alt="library icon"
              className="w-[142px] h-[142px]"
            />
            <h3 className="text-xl font-bold mt-4">Playlists made easy.</h3>
            <p className="text-center font-medium">
              We'll help you make playlists. Or enjoy playlists made by music
              experts.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 w-[20%] p-4">
            <img
              src={hearticon}
              alt=" heart icon"
              className="w-[142px] h-[142px]"
            />
            <h3 className="text-xl font-bold mt-4">Make it yours.</h3>
            <p className="text-center font-medium">
              Tell us what you like, and we'll recommend music for you.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 w-[20%] p-4">
            <img
              src={powericon}
              alt=" power icon"
              className="w-[142px] h-[142px]"
            />
            <h3 className="text-xl font-bold mt-4">Save mobile data.</h3>
            <p className="text-center font-medium">
              To use less data when you play music, turn on Data Saver in
              Settings.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[495px] bg-gradient-to-b from-[#b023c2] from-20% to-[#610be7] text-center pt-[220px]">
        <h2 className="text-white text-5xl font-bold">It's free.</h2>
        <h2 className="text-white text-5xl font-bold">No credit card required.</h2>
      </div>
    </>
  );
};

export default Whylist;
