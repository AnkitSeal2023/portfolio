import { motion, AnimatePresence } from "motion/react";

export default function RevealItem({ index, text, activeIndex, setActiveIndex }) {
  const isActive = activeIndex === index;

  return (
    <motion.div
      layout
      onHoverStart={() => setActiveIndex(index)}
      onHoverEnd={() => setActiveIndex(null)}
      className="bg-neutral-700 h-6 rounded-full overflow-hidden
                 flex items-center justify-center cursor-pointer select-none"
      style={{ width: isActive ? undefined : "1.5rem" }}  // collapsed = circle
      transition={{
        layout: { type: "tween"},
        default: { duration: 0.16 }
      }}
    >
      {/* Icon */}
      <div className="text-base ">⚙️</div>

      {/* Text appears only when active */}
      <AnimatePresence initial={true}>
        {isActive && (
          <motion.span
            key="label"
            layout
            className="whitespace-nowrap text-xs "
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.16 }}
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
