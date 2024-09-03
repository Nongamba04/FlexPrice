import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Button from "../components/Button";

export default function Hero({ image, Title, direction, children }) {
  return (
    <>
      <main className="  flex justify-center items-center m-4">
        <motion.div
          variants={fadeIn(`${direction}`, 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="container min-h-[400px] flex justify-center bg-[#f1f2f2] rounded-3xl p-4 shadow-xl"
        >
          <div className="grid grid-rows-2 place-items-center">
            {/* image */}
            <motion.div
                variants={fadeIn("up",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
              className="w-full h-[10em] lg:h-[15em] bg-cover rounded-xl"
              style={{ backgroundImage: `url(${image})` }}
            ></motion.div>
            {/* Text */}
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-xl md:text-4xl font-bold mb-7">{Title}</h1>
              {children}
              <Button text={"Learn More"} color={"white"}/>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
