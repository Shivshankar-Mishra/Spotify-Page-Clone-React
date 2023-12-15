import React from "react";
import spotifylogo from "../assets/spotify-logo.svg";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

const Footer = (props) => {
  return (
    <>
      <footer className="flex flex-row justify-stretch items-start flex-wrap bg-black px-[15vw] py-10 gap-[6vw] mb-0">
        <div className="flex flex-row justify-center items-center gap-1">
          <img
            src={spotifylogo}
            alt="Spotify Logo"
            className="w-12 h-12 bg-white rounded-md"
          />
          <span className="text-white text-[1.6rem] font-bold tracking-tighter">
            Spotify
          </span>
        </div>
        <div className="flex flex-row justify-center items-start gap-10 py-4">
          <div className="flex justify-center items-center ">
            <ul>
              <span className="text-slate-300 text-xs font-extrabold tracking-[0.08rem] uppercase">
                COMPANY
              </span>
              <li className="text-white hover:text-green-500 leading-[6vh]">
                About
              </li>
              <li className="text-white hover:text-green-500 leading-[6vh]">
                Jobs
              </li>
              <li className="text-white hover:text-green-500 leading-[6vh]">
                For the Record
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <span className="text-slate-300 text-xs font-extrabold tracking-[0.08rem] uppercase">
                COMMUNITIES
              </span>
              <li className="text-white hover:text-green-500 leading-[6vh]">
                For Artists
              </li>
              <li className="text-white hover:text-green-500 leading-[6vh]">
                Developers
              </li>
              <li className="text-white hover:text-green-500 leading-[6vh]">
                Advertising
              </li>
              <li className="text-white hover:text-green-500 leading-[6vh]">
                Investors
              </li>
              <li className="text-white hover:text-green-500 leading-[6vh]">
                Vendors
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <span className="text-slate-300 text-xs font-extrabold tracking-[0.08rem]  uppercase">
                Useful links
              </span>
              <li className="text-white hover:text-green-500 leading-[6vh]">
                Support
              </li>
              <li className="text-white hover:text-green-500 leading-[6vh]">
                Web Player
              </li>
              <li className="text-white hover:text-green-500 leading-[6vh]">
                Free Mobile App
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 pl-[11vw] py-5">
          <div className="flex justify-center items-center w-12 h-12 bg-neutral-700 rounded-full group hover:text-green-500">
            <FaInstagram className="fill-white h-7 w-7 group-hover:fill-green-500" />
          </div>
          <div className="flex justify-center items-center w-12 h-12 bg-neutral-700 rounded-full group hover:text-green-500">
            <FaTwitter className="fill-white h-7 w-7 group-hover:fill-green-500" />
          </div>
          <div className="flex justify-center items-center w-12 h-12 bg-neutral-700 rounded-full group hover:text-green-500">
            <FaFacebookF className="fill-white h-7 w-7 group-hover:fill-green-500" />
          </div>
        </div>
        <div className="w-full flex flex-row justify-end items-center ">
          <FaEarthAmericas className="h-3 w-3 text-slate-400 " />
          <span className="text-xs text-slate-400 hover:text-green-500 ml-2">
            India (English)
          </span>
        </div>
        <div className="w-full flex flex-row justify-between -mt-[10vh]">
          <div className="flex flex-row justify-center items-center gap-4 text-xs text-slate-400">
            <div>
              <span className="hover:text-green-500">Legal</span>
            </div>
            <div>
              <span className="hover:text-green-500">Privacy Center</span>
            </div>
            <div>
              <span className="hover:text-green-500">Privacy Policy</span>
            </div>
            <div>
              <span className="hover:text-green-500">Cookies</span>
            </div>
            <div>
              <span className="hover:text-green-500">About Ads</span>
            </div>
            <div>
              <span className="hover:text-green-500">Accessibility</span>
            </div>
          </div>
          <div className="text-slate-400 text-xs">
            &copy; {props.year} Spotify AB
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
