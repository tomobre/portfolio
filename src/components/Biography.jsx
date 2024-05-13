"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import BiographyScroll from "./BiographyScroll";

export default function Biography({ title, description, quote }) {
  return (
    <div className="flex flex-col gap-12 justify-center text-black">
      {/* BIOGRAPHY IMAGE */}
      <Image
        src="/me.png"
        alt=""
        width={112}
        height={112}
        className="w-28 h-36 rounded-full object-cover"
      />
      {/* BIOGRAPHY TITLE */}
      <h1 className="font-bold text-2xl ">{title}</h1>
      {/* BIOGRAPHY DESC */}
      <p className="text-lg ">{description}</p>
      {/* BIOGRAPHY QUOTE */}
      <span className="italic ">{quote}</span>
      {/* BIOGRAPHY SIGN SVG*/}
      {/* BIOGRAPHY SCROLL SVG */}
      <BiographyScroll/>
    </div>
  );
}
