import { useState } from "react";


export default function Title({text,color}) {
  return <>
   <button className={`flex justify-center items-center p-2 md:p-3 lg:p-4 text-base md:text-lg lg:text-xl font-bold 
   max-w-[6.5rem] md:max-w-[8rem] lg:max-w-[10rem] shadow-[_1px_1px_1px_1.5px_rgb(227,204,227,1)] rounded-lg bg-${color} 
   hover:translate-y-[-3px] transition duration-250 ease-out`}>
  {text}
</button>


  </>;
}
