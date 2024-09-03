import { useState } from "react";
import Logo from '../assets/logo.svg'

export default function Card({Heading}) {
  return <>
        <div className="max-w-sm w-full mt-6 mb-6  ">
            {/* header */}
            <div className="flex gap-3 items-center p-3">
                <img src={Logo} alt="Logo" className="w-5 h-5 filter invert"/>
                <h1 className="font-bold">{Heading}</h1>
            </div>

            {/* text */}
            <div className="p-2 hidden md:block">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, inventore?</h2>
            </div>
            
      </div>
  
  </>;
}
