'use client'
import React from 'react'
import { MdChevronRight } from 'react-icons/md'
import { useSearchParams } from "next/navigation";

export default function ProfileVideos() {
const searchParams = useSearchParams() 

  return (
        <div>
            <section>
                <div className="sectionHeader">
                    <span className="sectionHeaderSubTitle">Streams <i><MdChevronRight/> </i></span>
                </div>
                <div className="sectionCollection">

                    <div className="videoCardContainer">
                        <div className="videoCard"></div>
                        <div className="videoCardHeader">
                            <div className="headerAvi"/>
                            <span>Artist</span>
                        </div>
                        <span className="videoCardDescription">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </span>
                    </div>

                        <div className="videoCardContainer">
                        <div className="videoCard"></div>
                        <div className="videoCardHeader">
                            <div className="headerAvi"/>
                            <span>Artist</span>
                        </div>
                        <span className="videoCardDescription">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </span>
                    </div>

                    <div className="videoCardContainer">
                        <div className="videoCard"></div>
                        <div className="videoCardHeader">
                            <div className="headerAvi"/>
                            <span>Artist</span>
                        </div>
                        <span className="videoCardDescription">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </span>
                    </div>

                    <div className="videoCardContainer">
                        <div className="videoCard"></div>
                        <div className="videoCardHeader">
                            <div className="headerAvi"/>
                            <span>Artist</span>
                        </div>
                        <span className="videoCardDescription">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </span>
                    </div>
                    
                    
                </div>
            </section>

            <section>
                <div className="sectionHeader">
                    <span className="sectionHeaderSubTitle">Saved <i><MdChevronRight/></i></span>
                </div>
                <div className="sectionCollection">

                <div className="videoCardContainer">
                    <div className="videoCard"></div>
                    <div className="videoCardHeader">
                        <div className="headerAvi"/>
                        <span>Artist</span>
                    </div>
                    <span className="videoCardDescription">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </span>
                </div>

                <div className="videoCardContainer">
                    <div className="videoCard"></div>
                    <div className="videoCardHeader">
                        <div className="headerAvi"/>
                        <span>Artist</span>
                    </div>
                    <span className="videoCardDescription">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </span>
                </div>

                <div className="videoCardContainer">
                    <div className="videoCard"></div>
                    <div className="videoCardHeader">
                        <div className="headerAvi"/>
                        <span>Artist</span>
                    </div>
                    <span className="videoCardDescription">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </span>
                </div>
                    
                <div className="videoCardContainer">
                    <div className="videoCard"></div>
                    <div className="videoCardHeader">
                        <div className="headerAvi"/>
                        <span>Artist</span>
                    </div>
                    <span className="videoCardDescription">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </span>
                </div>
                    
                </div>
            </section>
        </div>
  )
}
