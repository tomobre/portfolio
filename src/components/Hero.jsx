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
        <div className=" h-auto lg:h-full flex flex-col gap-8 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48  pb-10">
          <div className="h-1/2 lg:h-full lg:w-1/2  h-auto rounded-full mr-4">
            <Image
              src="/profile4.png"
              alt=""
              height={400}
              width={400}
              className="object-contain relative rounded-xl "
            />
          </div>

          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              {title}
            </h1>

            <p className="md:text-xl text-black">{description}</p>

            <div className="w-full flex gap-4">
              <Link
                href={`${locale}/portfolio`}
                className=" m-4 uppercase ring-black text-black underline"
              >
                {workBtn}
              </Link>
              <Link
                href={`${locale}/contact`}
                className="m-4 underline text-black uppercase"
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
