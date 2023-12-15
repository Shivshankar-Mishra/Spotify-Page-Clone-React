import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import MultiBubble from "../assets/lets-play.svg";
const Questions = ({ isContentVisible, toggleContent }) => {
  return (
    <div className="mt-16">
      <section>
        <article className="">
          <h2 className="text-[40px] font-bold text-center">Got questions?</h2>
          <ul className="mt-10 px-24">
            <li className=" px-24 pt-2 ">
              <details className="">
                <summary
                  onClick={toggleContent}
                  className="flex flex-row justify-between items-center text-lg font-bold outline-none border-b-[1px] border-slate-100 border-solid mt-[2px] px-7 py-[26px] list-none hover:bg-[#f6f6f6] focus:bg-[#f6f6f6] hover:underline focus:underline"
                >
                  <div>How do I create a playlist?</div>

                  {isContentVisible ? <FaAngleUp /> : <FaAngleDown />}
                </summary>

                <p className="px-7 leading-[3rem] font-[550]">
                  Playlists are a great way to save collections of music, either
                  for your own listening or to share.
                  <br />
                  To create one:
                  <br />
                  <ol className="list-decimal pl-3 pt-3 leading-5">
                    <li>Tap Your Library.</li>
                    <li>
                      Tap <span className="text-green-700 text-lg">CREATE</span>
                      .
                    </li>
                    <li>Give your playlist a name.</li>
                    <li>Start adding songs (and we'll help you along).</li>
                  </ol>
                </p>
              </details>
            </li>
            <li className=" px-24 pt-2 ">
              <details className="">
                <summary
                  onClick={toggleContent}
                  className="flex flex-row justify-between items-center text-lg font-bold outline-none border-b-[1px] border-slate-100 border-solid mt-[2px] px-7 py-[26px] list-none hover:bg-[#f6f6f6] focus:bg-[#f6f6f6] hover:underline focus:underline"
                >
                  <div>How do I activate Data Saver mode?</div>
                  {/* <FaChevronDown className='text-lg'/> */}
                  {isContentVisible ? <FaAngleUp /> : <FaAngleDown />}
                </summary>

                <p className="px-7 leading-[3rem] font-[550]">
                  <ol className="list-decimal pl-3 pt-3 leading-5">
                    <li>
                      Tap <span className="text-green-700 text-lg">Home</span>.
                    </li>
                    <li>
                      Tap{" "}
                      <span className="text-green-700 text-lg">Settings</span>.
                    </li>
                    <li>
                      Tap{" "}
                      <span className="text-green-700 text-lg">Data Saver</span>
                      .
                    </li>
                    <li>Switch on Data Saver.</li>
                  </ol>
                </p>
              </details>
            </li>
            <li className=" px-24 pt-2 ">
              <details className="">
                <summary
                  onClick={toggleContent}
                  className="flex flex-row justify-between items-center text-lg font-bold outline-none border-b-[1px] border-slate-100 border-solid mt-[2px] px-7 py-[26px] list-none hover:bg-[#f6f6f6] focus:bg-[#f6f6f6] hover:underline focus:underline"
                >
                  <div>Is it only possible to shuffle play music?</div>
                  {/* <FaChevronDown className='text-lg'/> */}
                  {isContentVisible ? <FaAngleUp /> : <FaAngleDown />}
                </summary>

                <p className="px-7 leading-[3rem] font-[550]">
                  Any playlist with the shuffle icon will play on shuffle.
                  <br />
                  Some playlists won't have the shuffle icon, so you can tap any
                  song to play it.
                </p>
              </details>
            </li>
            <li className=" px-24 pt-2 ">
              <details className="">
                <summary
                  onClick={toggleContent}
                  className="flex flex-row justify-between items-center text-lg font-bold outline-none mt-[2px] px-7 py-[26px] list-none hover:bg-[#f6f6f6] focus:bg-[#f6f6f6] hover:underline focus:underline"
                >
                  <div>Where can I find Podcasts?</div>
                  {/* <FaChevronDown className='text-lg'/> */}
                  {isContentVisible ? <FaAngleUp /> : <FaAngleDown />}
                </summary>

                <p className="px-7 leading-[3rem] font-[550]">
                  Tap <span className="text-green-700 text-lg">Search</span>.
                  Under{" "}
                  <span className="text-green-700 text-lg">Browse All</span>,
                  tap Podcasts.
                </p>
              </details>
            </li>
          </ul>
        </article>
      </section>
      <section className="w-full h-[60vh] bg-gradient-to-r from-[#c329ba] to-[#6c0ee0] mt-24">
        <article
          style={{ backgroundImage: `url(${MultiBubble})`, backgroundPosition: '-10px calc(100% + 120px)', }}
          className="w-full h-full bg-cover "
        >
          <div className="flex flex-col justify-center items-center gap-7 ">
            <h2 className="text-center text-7xl text-white font-bold px-20 pt-32 pb-8">Ready? Let’s play.</h2>
            <button className="w-[12rem] h-12 rounded-full text-black font-semibold bg-white uppercase hover:scale-105">get spotify free</button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Questions;
