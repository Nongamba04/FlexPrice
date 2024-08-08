import Logo from "./Logo";
import HamMenu from "./Hamburger_Menu";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <>
      <NavLink className="font-bold text-lg" to="/">
        Home
      </NavLink>
      <NavLink className="font-bold text-lg" to="/dashboard">
        Dashboard
      </NavLink>
      <NavLink className="font-bold text-lg" to="/tools">
        Tools
      </NavLink>
      <NavLink className="font-bold text-lg" to="/strategies">
        Strategies
      </NavLink>
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
      <nav className="mx-auto  bg-gray-300 sticky top-0 z-20 w-full">
        <div className="p-4 flex items-center justify-between flex-wrap">
          <Logo />

          <div className="hidden md:flex justify-between p-3 w-1/3">
            <NavLinks />
          </div>

          <button
            onClick={toggleButton}
            class="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
          >
            {isUsed ? "X" : <HamMenu />}
          </button>

          {isUsed && (
            <div className="flex flex-col items-center basis-full gap-3">
              <NavLinks />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
