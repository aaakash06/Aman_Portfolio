
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
hidden: { opacity: 0, x:-10 }
, show: { opacity : 1 , x: 0
, transition: {
  delay: 0.2, duration: 1
}
}
}


const Footer= () => {
  return (
    <motion.footer initial="hidden" viewport={{once:true}} whileInView="show" variants={parent}  className=" mt-15  mb-5">
      <motion.div className={` p-10 rounded-[20px] bg-[url('/gradient-bg.jpg')] bg-cover `}>
        <div className="text-area ">
          <h1
            className={`${poppins.className} text-[40px] leading-tight font-extrabold tracking-tighter mb-6`}
          >
           Want to work together?
          </h1>

          <p className="mb-5 ">
          Feel free to reach out for collaborations or just a friendly hello
          </p>
<p> <a href=""> amanpartel2004@gmail.com </a></p>

        </div>



        <div className=" clickables flex mt-8 mb-5  p-3 max-md:p-0 gap-8">
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




 
    </motion.footer>
  );
};

export default Footer;