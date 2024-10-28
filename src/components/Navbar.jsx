import Logo from "./Logo";
import HamMenu from "./Hamburger_Menu";
import SignUpButton from "./SignUpButton";
import Search from "./Search";
import SearchIcon from "../assets/search.svg";
import X from "../assets/x-symbol.svg";
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
          className={`font-bold text-base ${
            item.to === "/login"
              ? ""
              : "text-white hover:text-black hover:bg-gray-400 p-2 transition-all ease-in-out duration-300 rounded-2xl hover:translate-y-[-7px]"
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
  const [wantSearch, setWantSearch] = useState(false);

  function toggleButton() {
    setIsUsed((prev) => !prev);
  }

  function toggleSearchButton() {
    setWantSearch((prev) => !prev);
  }

  return (
    <>
      <nav className="mx-auto bg-gray-900 sticky top-0 z-20 w-full border-b-2 p-2">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          
            <Logo >
            <span className="ml-2 text-[1rem] font-semibold text-white">
              FlexPrice
            </span>
            </Logo>


          
          

          {/* Links and Sign Up Button for Desktop View */}
          <div className="hidden md:flex items-center justify-evenly w-1/3">
            <NavLinks />
          </div>

          {/* Mobile Search and Hamburger Menu */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Hamburger Button for Mobile View */}
            <button
              onClick={toggleButton}
              className="text-gray-400 hover:text-gray-100 rounded-lg"
            >
              <span
                className={`transition-transform duration-3000 ease-in-out transform ${
                  isUsed ? "rotate-90" : "rotate-0"
                }`}
              >
                {isUsed ? (
                  <img src={X} alt="Close Menu" className="w-6 h-6" />
                ) : (
                  <HamMenu />
                )}
              </span>
            </button>
          </div>
        </div>


        {/* Mobile Menu */}
        <div
          className={`${
            isUsed ? "max-h-[500px]" : "max-h-0"
          } overflow-hidden transition-all duration-500 ease-in-out w-full md:hidden flex flex-col items-center gap-3 mb-3`}
        >
          <NavLinks />
        </div>
      </nav>
    </>
  );
}
