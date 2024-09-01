import { useState } from "react";
import Button from '../components/Button'


export default function Hero({image,children}) {
  return (
    <>
      <main className="bg-white">
        <div className="container m-3 min-h-[570px] flex justify-center">
          <div className="grid grid-cols-2 gap-3 place-items-center">
            {/* image */}
            <div className="w-[30em] ">
              <p>Image</p>
              <img className="rounded-2xl" src={image} alt="...." />
            </div>
            {/* Text */}
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
