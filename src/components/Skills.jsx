"use client";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BiographyScroll from "./BiographyScroll";

export default function Skills({title}) {
  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Typescript",
    "React.js",
    "React Native",
    "Next.js",
    "Gatsby.js",
    "Electron.js",
    "SCSS",
    "Tailwind CSS",
    "Bootstrap",
    "MongoDB",
    "PostgreSQL",
    "Node.js",
    "Express.js",
    "GraphQL",
    "VTEX IO",
    "Redux",
    "Framer Motion",
    "Webpack",
    "Vite",
    "AWS",
    "Firebase",
    "Git",
    "Figma",
    "Solidity (basic)",
    "Python (basic)"
  ];

  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  return (
    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
      {/* SKILL TITLE */}
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl text-VSLightBlue"
      >
        {title}
      </motion.h1>
      {/* SKILL LIST */}
      <motion.div
        initial={{ x: "-300px" }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        className="flex gap-4 flex-wrap"
      >
        {skills.map((skill) => {
          return (
            <div className="rounded  p-2 text-sm cursor-pointer bg-black hover:bg-white hover:text-black text-VSPink">
              {skill}
            </div>
          );
        })}
      </motion.div>
      {/* SKILL SCROLL SVG */}
      <BiographyScroll></BiographyScroll>
    </div>
  );
}
