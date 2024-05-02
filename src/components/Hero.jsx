"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero({ title, description, contactBtn, workBtn, locale }) {
  return (
    <div>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className=" h-auto lg:h-full flex flex-col gap-8 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 bg-black pb-10">
          <div className="h-1/2 lg:h-full lg:w-1/2  h-auto rounded-full mr-4">
            <Image
              src="/profile2.png"
              alt=""
              height={500}
              width={500}
              className="object-contain relative rounded-xl "
            />
          </div>

          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-VSLightBlue">
              {title}
            </h1>

            <p className="md:text-xl text-VSPink">{description}</p>

            <div className="w-full flex gap-4">
              <Link
                href={`${locale}/portfolio`}
                className="p-4 rounded-lg ring-1 ring-black text-VSYellow ring-VSYellow"
              >
                {workBtn}
              </Link>
              <Link
                href={`${locale}/contact`}
                className="p-4 rounded-lg ring-1 ring-VSYellow text-VSYellow"
              >
                {contactBtn}
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
