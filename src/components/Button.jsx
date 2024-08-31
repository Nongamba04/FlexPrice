import { useState } from "react";


export default function Title({text}) {
  return <>
    <button className="flex items-center gap-2 p-4 text-lg font-bold max-w-[10rem]  border rounded-2xl">
      {text}
    </button>
  </>;
}
