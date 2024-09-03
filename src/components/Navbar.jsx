import Logo from "./Logo";
import HamMenu from "./Hamburger_Menu";
import SignUpButton from "./SignUpButton";
import X from '../assets/x-symbol.svg'
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/tools", label: "Tools" },
    { to: "/strategies", label: "Strategies" },
    { to: "/login", label: <SignUpButton /> },
  ];

  return (
    <>
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          className={`font-bold text-lg ${
            item.to == "/login"
              ? ""
              : "text-white hover:text-black hover:bg-gray-400 p-2 transition-all ease-in-out duration-300 rounded-2xl hover:translate-y-[-7px] "
          }`}
          to={item.to}
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );
}

export default function Navbar() {
  const [isUsed, setIsUsed] = useState(false);

  function toggleButton() {
    setIsUsed((prev) => !prev);
    console.log(`toggle hamburger ${isUsed}`);
  }
  return (
    <>
      <nav className="mx-auto  bg-gray-900 sticky top-0 z-20 w-full border-b-2 ">
        <div className="flex items-center justify-between flex-wrap">
          <Logo>
            <span className="self-center text-[1.5rem] font-semibold whitespace-nowrap text-white">
              FlexPrice
            </span>
          </Logo>

          <div className="hidden md:flex items-center justify-evenly p-2 w-[50%] md:w-[48%]  m-3 ">
            <NavLinks />
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleButton}
            className="md:hidden mr-3 text-gray-400 hover:text-gray-900 rounded-lg inline-flex items-center justify-center"
          >
            <span
              className={`transition-transform duration-300 ease-in-out transform ${
                isUsed ? "rotate-90" : "rotate-0"
              }`}
            >
              {isUsed ? <img src={X} alt="" className="w-6 h-6"/> : <HamMenu />}
            </span>
          </button>

          <div
            className={`${
              isUsed ? "max-h-[500px]" : "max-h-0"
            } overflow-hidden transition-all duration-500 ease-in-out w-full md:hidden flex flex-col items-center gap-3 mb-3`}
          >
            <NavLinks />
          </div>
        </div>
      </nav>
    </>
  );
}
