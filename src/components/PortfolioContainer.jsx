"use client"
import React from 'react'
import { motion } from "framer-motion";
import ScrollPortfolio from './ScrollPortfolio'
import HireBtnPortfolio from './HireBtnPortfolio';

export default function PortfolioContainer({scrollBtn, scrollTitle, projects, hireTitle, hireBtn, hireSubtitle, locale}) {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <ScrollPortfolio
        title={scrollTitle}
        seeBtn={scrollBtn}
        projects={projects}
      />
      <HireBtnPortfolio
        locale={locale}
        title={hireTitle}
        subtitle={hireSubtitle}
        btn={hireBtn}
      />
    </motion.div>
  );
}
