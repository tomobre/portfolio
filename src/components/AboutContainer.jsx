"use client";
import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Brain from "./brain";

export default function AboutContainer({ children }) {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {children}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}
