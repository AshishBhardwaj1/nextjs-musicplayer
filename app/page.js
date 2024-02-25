"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Home = () => {
  const router  = useRouter()
  useEffect(()=>{
    setTimeout(()=>{
router.push('/musicplayer')
    },5000)
  },[])
  return (
    
    <div className='bg-gray-600 h-[100vh] flex justify-center items-center m-auto  flex-col gap-6' > 
    
     <h1 className='text-2xl md:text-4xl lg:text-6xl text-white' > Hello!  </h1>
     <p className='text-white text-md'>Welcome to Music Player</p>
    </div>
  )
}

export default Home