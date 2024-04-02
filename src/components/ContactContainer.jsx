"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactAnim from "./ContactAnim";
import ContactForm from "./ContactForm";

export default function ContactContainer({
  formMessageLabel,
  formEmailLabel,
  formBye,
  formBtn,
  formSuccess,
  formErr,
  textAnim,
}) {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <ContactAnim textAnim={textAnim} />
        <ContactForm
          formMessageLabel={formMessageLabel}
          formEmailLabel={formEmailLabel}
          formBye={formBye}
          formBtn={formBtn}
          formSuccess={formSuccess}
          formErr={formErr}
        />
      </div>
    </motion.div>
  );
}
