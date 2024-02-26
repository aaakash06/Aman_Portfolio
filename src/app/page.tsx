"use client"

import React, { useEffect, useState } from 'react'
import NavBar from '@/components/navbar'
import Image from 'next/image'
import imagesCollect from '@/images/image'
import { Inter, Poppins } from "next/font/google";
import Hero from '@/components/section';
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ['latin'], weight: ['100','200']})
import Cards from '@/components/cards/cards'
import Footer from '@/components/footer'


const HomePage = () => {
  let [mode, setMode]=useState(true)
  const handleOnClick=()=>{

setMode(!mode )


  }

useEffect(()=>{
  if (mode){
    document.documentElement.classList.remove('dark')
  }
  else{
    document.documentElement.classList.add('dark')
  }

},[mode])

  return (

<>
 
<NavBar handleOnClick={handleOnClick}></NavBar>
<Hero></Hero>
<Cards></Cards>
<Footer></Footer>
</>
  )
}

export default HomePage