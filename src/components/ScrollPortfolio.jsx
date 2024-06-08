import React from 'react'
import { motion , useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";






export default function ScrollPortfolio({title, seeBtn, projects}) {
   const ref = useRef();

   const { scrollYProgress } = useScroll({ target: ref });
   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95.9%"]);

  return (
    <div className="h-[600vh] relative" ref={ref}>
      <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl  md:text-5xl lg:text-8xl text-center ">
        {title}
      </div>
      <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden bg-gradient-to-r from-[#614385] to-[#516395]">
        <motion.div style={{ x }} className="flex">
          <div className="h-screen w-screen flex items-center justify-center " />
          <div className="h-screen w-screen flex items-center justify-center " />
          <div className="h-screen w-screen flex items-center justify-center " />
          <div className="h-screen w-screen flex items-center justify-center " />
          {projects.map((item) => (
            <div
              className={`h-screen w-screen flex items-center justify-center`}
              key={item.id}
            >
              <div className="flex flex-col items-start justify-between gap-8 text-white">
                <h1 className="text-md font-bold md:text-3xl lg:text-5xl xl:text-7xl">
                  {item.title}
                </h1>
                <div className="relative w-64 h-36 md:w-96 md:h-52 lg:w-[500px]  lg:h-[279px] xl:w-[400px] xl:h-[230px] 2xl:h-[500px] 2xl:w-[800px]">
                  <Image className='rounded-xl border-2 shadow-xl border-white' src={item.img} alt={item.title} fill />
                </div>
                <p className="w-64 sm:w-32 md:w-96 lg:w-[500px] text-xs lg:text-lg xl:w-[600px]">
                  {item.description}
                </p>
                <Link
                  target="_blank"
                  href={item.link}
                  className="flex justify-end"
                >
                  <button className="p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                    {seeBtn}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
