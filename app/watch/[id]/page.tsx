'use client'
import { useEffect } from 'react';
import { IoHeart, IoRadioOutline } from 'react-icons/io5';
import { MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Watch() {

  return (
    <div className='videoPageContainer'>
        <section className='section_watch_top'>
        <div className="videoPlayerContainer">
            <div className="videoSection">
                <div className="videoSection_header">
                    <div className="videoSection_header_overlay">
                        <div className="videoPlayerContainer">
                            <div className="videoPlayer"/>
                            <div className="videoPlayer_description">
                                <div className="videoPlayer_description_author">
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
            </section>
            <section >

                    <div className="sectionHeader">
                        <span className="sectionHeaderSubTitle"> You may also like <i><MdChevronRight/></i></span>
                    </div>
                    <div className="section_watch_bottom_recommendations">
                        <div className="videoCardContainer">
                            <div className="videoCard" />
                            <div className="videoCardHeader" >
                                <div className="headerAvi" />
                                <span>user</span>
                            </div>
                            <span className="videoCardDescription">title</span>
                        </div>

                        <div className="videoCardContainer">
                            <div className="videoCard" />
                            <div className="videoCardHeader" >
                                <div className="headerAvi" />
                                <span>user</span>
                            </div>
                            <span className="videoCardDescription">title</span>
                        </div>

                        <div className="videoCardContainer">
                            <div className="videoCard" />
                            <div className="videoCardHeader" >
                                <div className="headerAvi" />
                                <span>user</span>
                            </div>
                            <span className="videoCardDescription">title</span>
                        </div>

                        <div className="videoCardContainer">
                            <div className="videoCard" />
                            <div className="videoCardHeader" >
                                <div className="headerAvi" />
                                <span>user</span>
                            </div>
                            <span className="videoCardDescription">title</span>
                        </div>
                    </div>
                    
                </section>
                <div className="user_header">
                        <div className="user_header_avi_container" >
                            <div className="user_header_avi" />
                            <span className="user_header_avi_username">username</span>
                        </div>
                    </div>
        </div>
  )
}