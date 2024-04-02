import React from "react";
import { motion } from "framer-motion";

export default function ContactAnim({ textAnim }) {
  return (
    <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
      <div>
        {textAnim.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.1,
            }}
          >
            {letter}
          </motion.span>
        ))}
        😊
      </div>
    </div>
  );
}
