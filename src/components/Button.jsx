import { useState } from "react";


export default function Title({text,color,children}) {
  return <>
   <button className={`flex justify-center items-center p-1 md:p-2 lg:p-3 text-base md:text-lg lg:text-xl font-bold 
   max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[9rem] shadow-[_1px_1px_1px_1.5px_rgb(227,204,227,1)] rounded-lg bg-${color} 
   hover:translate-y-[-3px] transition duration-250 ease-out`}>
  {text}
  {children}
</button>


  </>;
}
