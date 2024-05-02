"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import BiographyScroll from "./BiographyScroll";

export default function Biography({ title, description, quote }) {
  return (
    <div className="flex flex-col gap-12 justify-center">
      {/* BIOGRAPHY IMAGE */}
      <p>
        <span className="text-VSPink"> import</span>{" "}
        <span className="text-VSYellow">{"{"}</span>
        <span className="text-VSLightBlue">Biography, Skills, Experience</span>
        <span className="text-VSYellow">{"}"}</span>{" "}
        <span className="text-VSPink">from</span>
        <span className="text-VSBrown"> "./Biography";</span>
      </p>
      <p>
        <span className="text-VSLightBlue">Biography</span>
        <span className="text-VSYellow">.show()</span>
      </p>
      <Image
        src="/me.png"
        alt=""
        width={112}
        height={112}
        className="w-28 h-36 rounded-full object-cover"
      />
      {/* BIOGRAPHY TITLE */}
      <h1 className="font-bold text-2xl text-VSLightBlue">{title}</h1>
      {/* BIOGRAPHY DESC */}
      <p className="text-lg text-VSPink">{description}</p>
      {/* BIOGRAPHY QUOTE */}
      <span className="italic text-VSPink">{quote}</span>
      {/* BIOGRAPHY SIGN SVG*/}
      <Image src="/signature.png" width={500} height={500} alt="signature to" />
      {/* BIOGRAPHY SCROLL SVG */}
      <BiographyScroll/>
    </div>
  );
}
