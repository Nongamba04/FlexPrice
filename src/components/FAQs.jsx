import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Faqs() {
  const questions = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5",
  ];

  const descriptions = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi consectetur nemo soluta voluptatem ducimus, quis omnis.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi consectetur nemo soluta voluptatem ducimus, quis omnis.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi consectetur nemo soluta voluptatem ducimus, quis omnis.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi consectetur nemo soluta voluptatem ducimus, quis omnis.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi consectetur nemo soluta voluptatem ducimus, quis omnis.",
  ];
  return (
    <>
      <section className="min-h-[500px] mt-8 mb-7">
        

        <div className="flex flex-col items-center gap-5">
          <motion.h1
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="text-4xl font-bold"
          >
            FAQS
          </motion.h1>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="pl-10 pr-10 text-center"
          >
            <h3 className="text-base mt-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium!
            </h3>
            <span className="block border-[1px] mx-auto border-gray-400 max-w-[20em] md:max-w-[50em] mt-6"></span>
          </motion.div>

          <ul className="px-10">
      {questions.map((question, index) => (
        <motion.li key={index} 
        variants={fadeIn("up", {index}/35)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
        className={`${index >= 3 ? "hidden md:block" : ""}`}>
          <h1 className="text-2xl font-bold mt-3 mb-3">{question}</h1>
          <h3 className="text-base">{descriptions[index]}</h3>
          <span className="block border-[1px] mx-auto border-gray-400 max-w-[20em] md:max-w-[50em] mt-6"></span>
        </motion.li>
      ))}
    </ul>
        </div>
      </section>
    </>
  );
}
