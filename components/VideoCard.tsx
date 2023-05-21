import { VideoTypes } from '@/Models/types'
import React from 'react'

export const VideoCard = (props:VideoTypes ) => {

  return (
    <div>
        {
            props.live && (
                    <div className="videoCardContainer">
                        <div className="videoCard"/>
                        <div className="videoCardHeader">
                            <div  className="headerAvi"/>
                            <span>artist</span>
                        </div>
                        <span className="videoCardDescription">
                            video.title
                        </span>
                    </div>
             ) :  (
                    <div className="videoCardContainer">
                        <div className="videoCard"/>
                        <div className="videoCardHeader">
                            <div  className="headerAvi"/>
                            <span>artist</span>
                        </div>
                        <span className="videoCardDescription">
                            video.title
                        </span>
                    </div>
             )
        }
    </div>
  )
}
