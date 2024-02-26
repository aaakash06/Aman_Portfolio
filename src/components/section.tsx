"use client"; 
import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import imagesCollect from "@/images/image";
import { Inter, Poppins } from "next/font/google";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200"] });
import { motion} from 'framer-motion';


const parent = {
hidden: { opacity: 0 }
, show: { opacity : 1
, transition: {
  delay: 0.2, duration: 1, staggerChildren: .5
}
}
}
const child = {
hidden: { opacity: 0 , y: 30}
, show: { opacity : 1, y:0
, transition: {
   duration: 1, 
}
}
}

const Hero = () => {
  return (
    <motion.section initial="hidden" animate="show" variants={parent}  className="grid  gap-4 min-h-[40%] grid-cols-[2.5fr_1fr] max-md:grid-cols-1 ">
      <motion.div variants={child} className={` p-10 rounded-[20px] bg-[url('/gradient-bg.jpg')] bg-cover min-h-[30rem]`}>
        <div className="text-area ">
          <h1
            className={`${poppins.className} text-[40px] leading-tight font-extrabold tracking-tighter mb-10`}
          >
            Hello, I’m Aman, a product Designer With 7 years of experience.
          </h1>

          <p className="mb-10 ">
            I care a lot about using design for positive impact. and enjoy
            creating user-centric, delightful, and human experiences.
          </p>
        </div>

        <div className="clickables flex mt-20 mb-10  p-3 max-md:p-0 gap-8">
          <div className="button">
          <button className=" f bg-black text-white rounded-[20px] font-md max-md:text-[.7em] px-6 py-2 max-md:px-4 max-md:py-2.5 hover:bg-zinc-800 transistion-all duration-200 ease-in-out ">
        
            Contact me
          </button>
          </div>

<div className="icons  flex items-center gap-10 max-md:gap-5 text-[1.7em] max-md:text-[1.1em] ">
          <span className="bg-white p-[7px] max-md:p-[4px] rounded-full hover:bg-insta transistion-all duration-200 ease-in-out span"> <a href='instagram.com'><FaInstagramSquare  className="lugo"/> </a></span>
          <span className="bg-white p-[7px] max-md:p-[4px] rounded-full hover:bg-twitter transistion-all duration-200 ease-in-out span "> <a  href='instagram.com' ><FaTwitter  className="lugo"/> </a></span>
          <span className="bg-white p-[7px] max-md:p-[4px] rounded-full hover:bg-fb  transistion-all duration-200 ease-in-out span"> <a href='instagram.com'><FaFacebook  className="lugo"/> </a></span>
          </div>
        </div>


        
      </motion.div>




      <motion.div variants={child} className="right rounded-[20px] overflow-hidden relative bg-[url('/amanProfil1.jpg')] bg-cover bg-center min-h-[30rem]">
      
      </motion.div>
    </motion.section>
  );
};

export default Hero;
