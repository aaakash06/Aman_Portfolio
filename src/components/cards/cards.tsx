import React from 'react'
import Card from './card'
import { motion } from 'framer-motion'
const Cards = () => {

const cardInfo= [ { name: 'burger' , src: '/burger.jpg'},
{ name: 'lady' , src: '/lady.jpg'},{ name: 'pizza' , src: '/pizza.jpg'}
,{ name: 'man' , src: '/image4.jpg'}
 ]
 const parent = {
  hidden: { opacity: 0}
    , show: { opacity : 1 , 
    transition: {
      duration:.4,
      delay:.5,
      staggerChildren: 2
       }
     
  }

  }


  // initial='hidden'  viewport={{once:true}} whileInView='show' variants={parent}

  return ( 
    <motion.section  initial='hidden'  viewport={{once:true}} whileInView='show' variants={parent} className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10 w-[100%] place-content-center 
     place-items-center'>
{

cardInfo.map( (card) => {

return( <Card  key={card.name} info={card}></Card> )

} )

}


    </motion.section>
  )
}

export default Cards