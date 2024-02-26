import React from "react";
import Link from "next/link";
import { easeOut, motion } from "framer-motion";


interface Props{
handleOnClick : ()=> void

}

const NavBar:React.FC<Props> = ({ handleOnClick }) => {

const navBarAnimation = {
hidden: { y:-30 , opacity: 0 },
show: { y: 0 , opacity: 1 , transition: { duartion: 1 , ease: easeOut  }}

}
  
  return (
    <motion.nav initial='hidden' animate="show" variants={navBarAnimation} className="flex justify-between py-8 ">
      <div className="left flex gap-3 ">
        <div
          className="avatar ring-2 shadow-xl w-[23px] h-[23px] rounded-full bg-yellow-600 cursor-pointer "
          onClick={handleOnClick}
        ></div>
        <span className="tracking-wider font-extrabold max-sm:hidden dark:text-white">
          AMAN&apos;S PORTFOLIO
        </span>
      </div> 
      <div className="right flex gap-6 max-sm:text-sm max-sm:gap-2">
        <Link
          href="#"
          className="text-slate-900 font-[500]  dark:text-yellow-900"
        >
          Home
        </Link>
        <Link href="#" className="text-slate-500 dark:text-slate-400  ">
          Projects
        </Link>
        <Link href="#" className="text-slate-500  dark:text-slate-400">
          Contact
        </Link>
      </div>
    </motion.nav>
  );
};

export default NavBar;
