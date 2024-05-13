"use client";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Experience({ title, experiences }) {
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <div
      className="flex flex-col gap-12 justify-center pb-48"
      ref={experienceRef}
    >
      {/* EXPERIENCE TITLE */}
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isExperienceRefInView ? { x: "0" } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
        {title}
      </motion.h1>
      {/* EXPERIENCE LIST */}
      <motion.div
        initial={{ x: "-300px" }}
        animate={isExperienceRefInView ? { x: "0" } : {}}
        className=""
      >
        {/* EXPERIENCE LIST ITEM */}
        {experiences.map((experience, index) => {
          const renderJob = (index) => {
            return (
              <div className="text-black ">
                <div
                  className={`p-3 font-semibold  border-4 border-double ${
                    index % 2 !== 0 && index !== 0
                      ? "rounded-e-lg rounded-b-lg border-VSPink"
                      : "rounded-b-lg rounded-s-lg  border-VSGreen"
                  }`}
                >
                  <span> {experience.title}</span>
                  <br />
                  <span className="text-xs">{experience.company}</span>
                </div>
                <div className="p-3 text-sm italic">
                  {experience.description}
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  {experience.years}
                </div>
              </div>
            );
          };

          return (
            <div className="flex justify-between">
              {/* LEFT */}
              <div className="w-2/3 ">
                {(index === 0 || index % 2 === 0) && renderJob(index)}
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-2/3">
                {index % 2 !== 0 && index !== 0 && renderJob(index)}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
