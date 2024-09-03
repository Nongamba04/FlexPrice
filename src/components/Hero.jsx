import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Button from "../components/Button";

export default function Hero({ image, Title, direction, children }) {
  return (
    <>
      <main className="flex justify-center m-4">
        <motion.div
          variants={fadeIn(`${direction}`, 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="container min-h-[400px] flex items-center bg-[#f1f2f2] rounded-3xl p-4 shadow-xl"
        >
          <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-none place-items-center">
            {/* image */}
            <motion.div
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className=" w-[19em] md:w-[22em] lg:w-[30em]"
            >
              <img
                className="max-w-full rounded-2xl filter hover:grayscale transition duration-200 ease-out"
                src={image}
                alt="...."
              />
            </motion.div>
            {/* Text */}
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-xl md:text-4xl font-bold mb-7">{Title}</h1>
              {children}
              <Button text={"Learn More"} color={"white"} />
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
