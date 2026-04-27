'use client'
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

const TodaysHighlight = () => {
  return (
    <div className='w-full md:w-3/4 mx-auto'>
      <CldVideoPlayer 
        width="480"
        height="270"
        className='rounded-md mx-auto'
        src="highlighted-vid_iwai3k"
      />
    </div>
  )
}

export default TodaysHighlight