'use client'
import { useEffect } from 'react';
import { IoHeart } from 'react-icons/io5';

export default function Watch() {

  return (
    <div className='videoPageContainer'>
        <div className="videoPlayerContainer">
            <div className="videoSection">
                <div className="videoSection_header">
                    <div className="videoSection_header_overlay">
                        <div className="videoPlayerContainer">
                            <div className="videoPlayer"/>
                            <div className="videoPlayer_description">
                                <div className="videoPlayer_description_author">
                                    <div className="channelAvi"/>
                                    <div className="videoPlayer_description_author_title">
                                        <span>This is a placeholder for video title </span>
                                        <span>Username</span>
                                    </div>
                                </div>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Consectetur quos facilis impedit necessitatibus minima
                                    asperiores non, perspiciatis harum quam unde laboriosam
                                    sapiente iste. Rem cupiditate unde dignissimos veritatis
                                    dolores consequuntur!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className="sideSection">
                <div className="recommendations">
                    <span>You may like</span>
                    <div className="recommendations_videoCollection">
                    </div>
                </div>
            </div>
        </div>
  )
}