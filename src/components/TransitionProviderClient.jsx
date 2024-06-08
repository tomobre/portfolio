"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {useEffect} from 'react'

const TransitionProviderClient = ({ children, locale, translations}) => {
  const pathName = usePathname();
  const routes = pathName.slice(4) === "" ? translations.home : translations[pathName.slice(4)]

  const platform = typeof window !== "undefined" && window?.navigator?.userAgent;

  const isIOS = /iPad|iPhone|iPod/.test(platform) && !window.MSStream;
  


  let bg;
  switch (routes) {
    case "[Home]":
      bg = "lg:bg-[url('/fondo.jpg')] bg-[url('/fondo_m.jpg')]";
      break;
    case "[About]":
      bg = isIOS ? "bg-none" : "bg-[url('/fondo_2.jpg')] bg-fixed bg-no-repeat";
      break;
    case "[Portfolio]":
      bg =
        " bg-fixed lg:bg-no-repeat  bg-repeat-round lg:bg-[url('/fondo_3.jpg')] bg-[url('/fondo_3_m.jpg')]";
      break;
    case "[Contact]":
        bg = "lg:bg-[url('/fondo.jpg')] bg-[url('/fondo_m.jpg')]";
      break;
    default:
      bg = " bg-fixed bg-no-repeat bg-[url('/fondo.jpg')]";
  }


  
  
  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className={"w-screen " + bg}>
        <motion.div
          className="h-auto lg:h-screen w-screen fixed  rounded-b-[100px] z-40 bg-white"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-black text-5xl lg:text-8xl cursor-default z-40 w-fit h-fit "
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {routes}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed rounded-t-[100px] bottom-0 z-30 bg-white"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar translations={translations} locale={locale} />
        </div>
        <div className="h-auto lg:h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProviderClient;
