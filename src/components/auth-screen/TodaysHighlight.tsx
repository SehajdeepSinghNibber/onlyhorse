'use client'
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

const TodaysHighlight = () => {
  return (
    <div className='w-full md:wd-3/4 mx-auto'>
      <CldVideoPlayer 
      width={"960"}
      height={"540"}
      className='rounded-md'
      src="highlighted-vid_iwai3k"
      />
    </div>
  )
}

export default TodaysHighlight
