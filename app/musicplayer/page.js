"use client"

import React, { useEffect, useState ,useRef} from 'react'
import Image from 'next/image'
import { tracks } from '../_data/data'
import BGimg from '@/public/images/headphones.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay ,faPause ,faForward ,faBackward } from '@fortawesome/free-solid-svg-icons'


const MusicPlayer = () => {
    const musicref =useRef(null)
    const [Playing ,setPlaying] =useState(false)
    const [currentTrack ,setCurrentTrack] =useState(0)
    const [progress,setProgress] =useState(0)

    
  
    useEffect(()=>{
      if (Playing) {
        const interval = setInterval(() => {
          setProgress(
            (musicref.current.currentTime / musicref.current.duration) * 100
          );
        }, 1000);
  
        return () => clearInterval(interval);
      }


    },[Playing])
    const playandPause  =()=>{
      if (Playing) {
        
        musicref.current.pause()
      }else{
        musicref.current.play()
      }
      setPlaying(!Playing)
    }
    const handleTrack =(val)=>{
if (val ==='next'){
  setCurrentTrack((prev)=>(prev+1)%tracks.length)
} else if (val==='back'){
  setCurrentTrack((prev)=>(prev-1+tracks.length)%tracks.length)
}setProgress(0)
setPlaying(false)
    }
  return (
    <div>
     <Image src={BGimg} 
     fill 
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
     className='-z-1 relative'z
     />   
     <div className='flex justify-center items-center m-auto mt-[300px] '>


     <div className='absolute border p-6 bg-white bg-opacity-50 rounded-2xl shadow-lg blur-4x  text-red-800 flex flex-col gap-2 items-center font-semibold'>
     <h1 className='text-4xl mb-10 md:text-6xl lg:text-7xl'>Music Player</h1>
<h3 className='text-white mb-5'>Title : {tracks[currentTrack].title} </h3>
<Image src={tracks[currentTrack].image} alt="music track "height={300} width={300 } className='rounded-2xl '/>

<audio ref={musicref} src={tracks[currentTrack].source} ></audio>


  {/* <div className={`w-[${progress}%] bg-[${Playing?"red":"blue"}] h-[15px]`}> </div> */}
  


  <div style={{  width: `${progress}%`,
            background: Playing ? "white" : "red",
            height: '15px' ,zIndex:"5" ,display:"flex",justifyContent:"flex-start", borderRadius:"10px"}}></div>

 
<div className=' flex p-2 bg-black text-white rounded-3xl opacity-80 gap-[100px] justify-between' > 
  <button onClick={()=>handleTrack('next')}> <FontAwesomeIcon icon={faBackward}/> </button>
  <button onClick={playandPause}>{Playing?<FontAwesomeIcon icon={faPause} />:<FontAwesomeIcon icon={faPlay}/>} </button>
  <button onClick={()=>handleTrack('back')}> <FontAwesomeIcon icon={faForward}/> </button>
</div>
     </div>
     </div>

    </div>
  )
}

export default MusicPlayer