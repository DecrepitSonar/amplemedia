import React from 'react'
type videoCardPropTypes = {
    id: string, 
    artist: string, 
    description: string, 
    isLive: bool
}
export const VideoCard = (props:videoCardPropTypes ) => {

  return (
    <div>
        {
            props.isLive && (
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
             ) : (
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
