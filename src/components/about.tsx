// import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

// const aboutTexts = [
//   "Hi I'm Ankit, a \"full stack dev\"",
//   "Software Developer, Linux hobbyist, Student",
// ];

// export default function About() {
//   const { scrollYProgress } = useScroll();

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-start p-8 space-y-6">
//       {aboutTexts.map((text, i) => (
//         <AnimatedText key={i} text={text} index={i} scrollYProgress={scrollYProgress} />
//       ))}
//     </div>
//   );
// }


// interface AnimatedTextProps {
//   text: string;
//   index: number;
//   scrollYProgress: any;
// }

// function AnimatedText({ text, index, scrollYProgress }: AnimatedTextProps) {
//   const opacity = useTransform(
//     scrollYProgress,
//     [index * 0.1, (index + 0.5) * 0.1],
//     [0, 1]
//   );

//   const blurValue = useTransform(
//     scrollYProgress,
//     [index * 0.1, (index + 0.5) * 0.1],
//     [4, 0]
//   );

//   // useMotionTemplate converts MotionValue to a CSS string
//   const blur = useMotionTemplate`blur(${blurValue}px)`;

//   const y = useTransform(
//     scrollYProgress,
//     [index * 0.1, (index + 0.5) * 0.1],
//     [20, 0]
//   );

//   return (
//     <motion.p
//       style={{ opacity, filter: blur, y }}
//       className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100"
//     >
//       {text}
//     </motion.p>
//   );
// }


// function AnimatedText({ text, index }) {
//   return (
//     <motion.p
//       initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
//       animate={{
//         opacity: 1,
//         y: 0,
//         filter: "blur(0px)",
//       }}
//       transition={{
//         duration: 0.8,
//         ease: "easeOut",
//         delay: index * 0.25,         // each line animates after the previous
//       }}
//       className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100"
//     >
//       {text}
//     </motion.p>
//   );
// }


"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const terms = ["a Software Developer", "a Linux hobbyist", "a Student", "a Tech Enthusiast", "an Open Source Contributor"];

export default function AboutList() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % terms.length);
    }, 2500); // time each word stays on screen

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-10 ">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-3xl font-semibold text-neutral-500 dark:text-neutral-400 absolute"
        >
          {terms[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
