import React from "react";
import {motion} from 'framer-motion'


interface Info{
name: string,
src: string

}

interface Props {
  info: Info,

}

const Card: React.FC<Props> = ({ info }) => {
  const child = {
    hidden: { opacity: 0, y:30, scale:0.9 }
    , show: { opacity : 1 , y: 0, scale:1,
      transition:{ duration:.4, delay:.5 , ease:"easeOut" }
    }
    }
  const src  = info.src; 
  return (
    <motion.div variants={child} viewport={{once:true}} initial='hidden' whileInView='show'   className=" w-[100%] h-[400px] bg-zinc-200 max-w-[100%] rounded-[5%]  overflow-hidden  lg:h-[500px] md:h-[600px] "   >
  
      <div className="w-full rounded-[5%] bg-cover bg-center h-full hover:scale-[1.1] transition-all duration-[1s] ease-in-out" style={{backgroundImage: `url('${src}')` }}  > 



      </div>
      
        </motion.div>
  );
};

export default Card;
