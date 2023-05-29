import { VideoTypes } from '@/utils/types'
import React from 'react'
import { IoRadioOutline } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

export const VideoCard = (props: any ) => {
    const router = useRouter() 
    const video = props.video as VideoTypes

  return (
        <div className="videoCardContainer" onClick={() => { router.push(`watch/${video.id}`)}}>
            <div className="videoCard" style={{"backgroundImage":`url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${video.posterURL}.jpg)`}}/>
            <div className="videoCardHeader" >
                <div className="headerAvi" style={{"backgroundImage":`url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${video.userImageURL}.jpg)`}}/>
                <span>{video.user}</span>
            </div>
            <span className="videoCardDescription">
                {video.title}
            </span>
            {
                video.live ? 
                <span className='live-status'><i><IoRadioOutline/></i> {video.views} Watching</span> :
                <span className='live-status'> {video.views} Views</span>
            }
        </div>
  )
}
