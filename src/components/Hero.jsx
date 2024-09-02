import { useState } from "react";
import Button from "../components/Button";

export default function Hero({ image, Title, children }) {
  return (
    <>
      <main className="  flex justify-center m-4">
        <div className="container min-h-[400px] flex items-center bg-[#f1f2f2] rounded-3xl p-4 shadow-xl">
          <div className="grid grid-cols-2 place-items-center">
            {/* image */}
            <div className=" w-[17em] md:w-[22em] lg:w-[30em]">
              <img
                className="rounded-2xl filter hover:grayscale transition duration-200 ease-out"
                src={image}
                alt="...."
              />
            </div>
            {/* Text */}
            <div>
              <h1 className="text-xl md:text-4xl font-bold mb-7">{Title}</h1>
              <span className="block m-4 text-sm md:text-base">{children}</span>
              <Button text={"Learn More"} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
