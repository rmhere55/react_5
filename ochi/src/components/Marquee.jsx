import { motion } from "framer-motion";
// import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speeed=".2"
      className="w-full pt-10 py-15 rounded-t-3xl bg-[#004d43] text-white leading-none"
    >
      
      <div className="movingText border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap leading-none ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[17.5vw] leading-none font-[fantasy] pr-20 pt-10 -mb-[7vw]"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[17.5vw] leading-none font-[fantasy] pr-20 pt-10 -mb-[0vw]"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
