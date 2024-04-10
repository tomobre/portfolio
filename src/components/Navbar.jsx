"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "./navLink";
import Image from "next/image";
import { motion } from "framer-motion";
import LocalSwitcher from "./LocalSwitcher";

export default function Navbar({ locale, translations}) {
  const [open, setOpen] = useState(false);

  const links = [
    { url: `/${locale}/`, title: translations.home },
    { url: `/${locale}/about/`, title: translations.about },
    { url: `/${locale}/portfolio/`, title: translations.portfolio },
    { url: `/${locale}/contact/`, title: translations.contact },
  ];

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg text-white">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link
          href="https://github.com/tomobre"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src="/github.png" alt="github logo" width={24} height={24} />
        </Link>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/tomobre/"
        >
          <Image src="/instagram.png" alt="instagram logo" width={24} height={24} />
        </Link>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/tomobre/"
        >
          <Image src="/linkedin.png" alt="linkedin logo" width={24} height={24} />
        </Link>
      </div>
      <LocalSwitcher translations={translations.locales} />
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div>
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {links.map((link) => (
                <motion.div
                  variants={listItemVariants}
                  className=""
                  key={link.title}
                >
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
