"use client";

import { ReactNode, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface RevealProps {
    children: ReactNode;
    variants?: Variants;
    threshold?: number;
}

export default function Reveal({
    children,
    variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
}: RevealProps) {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden"); // reset when out of view
        }
    }, [inView, controls]);

    return (
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
            {children}
        </motion.div>
    );
}
