import { useState } from "react";


export default function Title({text}) {
  return <>
   <button className="flex justify-center items-center p-3 md:p-4 lg:p-5 text-base md:text-lg lg:text-xl font-bold 
   max-w-[8rem] md:max-w-[10rem] lg:max-w-[12rem] border-b-2 border-b-red-500 rounded-2xl bg-gray-800 text-white 
   hover:translate-y-[-3px] transition duration-250 ease-out">
  {text}
</button>


  </>;
}
