import { useState } from "react";
import Logo from "./Logo";
import SentSvg from "../assets/Sent_arrow.svg";
import Github from '../assets/Github.svg'
import LinkedIn from '../assets/linkedin.svg'
import Facebook from '../assets/facebook.svg'

export default function Footer() {
  return (
    <>
      <footer
        className="relative flex justify-center w-full bg-cover"
        style={{ backgroundImage: "url('../src/assets/Image4.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative container z-10 min-h-[22em] ">
          <div className="grid grid-cols-2 place-items-center m-5">
            <div className="flex flex-col md:w-[60rem] p-[1em] md:p-[2em] gap-[1em]">
              <Logo></Logo>

              <h1 className="text-xl md:text-4xl text-white">Create A Request</h1>
              <p className="text-white text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, neque?</p>
              <div className="relative w-[170px] md:w-[35rem] group">
                <input
                  className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid
                   focus:border-[#596A95] border-[#2B3040] pr-12"
                  name="text"
                  placeholder="Feedback"
                  type="text"
                />
                <button className="absolute top-0 right-0 h-full flex items-center px-4 outline-none ">
                  <img
                    src={SentSvg}
                    alt="Send"
                    className="w-6 md:w-7 transition duration-150 ease-in-out group-focus-within:brightness-150"
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col md:w-full p-10 gap-10 items-center justify-center text-white bg-transparent rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 ">
                <h2 className="text-lg font-semibold uppercase text-gray">
                  Follow Us
                </h2>
                <ul>
                  <li className="mb-4">
                    <a
                      href="https://github.com//flowbite"
                      className="hover:underline text-lg flex items-center gap-2"
                    >
                    <img src={Github} className="w-5 h-5" />
                      Github
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://github.com//flowbite"
                      className="hover:underline text-lg flex items-center gap-2"
                    >
                        <img src={Facebook} className="w-5 h-5" />
                     LinkedIn
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://github.com//flowbite"
                      className="hover:underline text-lg flex items-center gap-2"
                    >
                        <img src={LinkedIn} className="w-5 h-5" />
                     LinkedIn
                    </a>
                  </li>
                </ul>
              
            </div>
          </div>

          <div className=" z-11 border-t-2 border-t-gray-500">
            <span className="text-white block mb-5">All Rigts reserved</span>
          </div>
        </div>
      </footer>
    </>
  );
}
