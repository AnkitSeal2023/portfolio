"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const terms = ["a Software Developer", "a Linux hobbyist", "a Student", "a Tech Enthusiast", "an Open Source Contributor"];

export default function HobbiesList() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % terms.length);
    }, 2500); // time each word stays on screen

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="flex h-10 ">
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
    </h1>
  );
}
