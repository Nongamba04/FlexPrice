import { useState } from "react";


export default function Title({text,color}) {
  return <>
   <button className={`flex justify-center items-center p-3 md:p-4 lg:p-5 text-base md:text-lg lg:text-xl font-bold 
   max-w-[8rem] md:max-w-[10rem] lg:max-w-[12rem] shadow-[_1px_1px_1px_1.5px_rgb(227,204,227,1)] rounded-lg bg-${color} 
   hover:translate-y-[-3px] transition duration-250 ease-out`}>
  {text}
</button>


  </>;
}
