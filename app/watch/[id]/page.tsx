'use client'
import { useEffect, useState } from 'react';
import { BiPaperPlane } from 'react-icons/bi';
import { MdChevronRight } from 'react-icons/md';
import { usePathname} from 'next/navigation'

type Video = {
    catagory: string,
    contentURL: string,
    id: string,
    live: Boolean,
    posterURL: string
    releaseDate: string,
    title: string,
    user: string
    userId: string,
    userImageURL: string,
    views: string,
    _id: string
}
export default function Watch() {

    const [ video, setVideo ] = useState<Video>(null)
    const path = usePathname().split('/')

    const getCurrentVideo = async() => {
        try{ 
            console.log( 'retrieving video ')
            const response = await fetch(`/api/watch/${path[2]}`)
            console.log( response )

            console.log('transforming reponse ')
            const data = await response.json()
            console.log( "response", data)
            setVideo( data )
        }
        catch( err ){
            console.log( err )
        }
    }

    useEffect(() => {
        getCurrentVideo()
    }, [])

  return (
    <div className='videoPageContainer'>
        <section className='section_watch_top'>
        <div className="videoPlayerContainer">
            <div className="videoSection">
                <div className="videoSection_header">
                    <div className="videoSection_header_overlay">
                        <div className="videoPlayerContainer">
                            { video != null ? 
                                   <video controls autoPlay className="videoPlayer">
                                        <source src={video.contentURL}/>
                                    </video>  : null  
                            }
                            <div className="videoPlayer_description">
                                <div className="videoPlayer_description_author">
                                    <div className="videoPlayer_description_author_title">
                                        <span>{video.title} </span>
                                        <span>{video.user}</span>
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
                <div className="comments_section_top">
                    <span>Comments</span>
                </div>
                <div className=" comments_sections">
                    <div className="comment_section_middle">

                        <div className="comment_item_container">
                                <span>username</span>
                                <span>This is a comment from a user</span>
                        </div>
                    </div>
                </div>
                <div className="comments_section_bottom">
                        <div className="comments_section_bottom_inputSection">
                            <button><i><BiPaperPlane/></i></button>
                            <input type="text" placeholder='Comment' />
                        </div>
                        <div className="comments_section_bottom_actions">
                            <button>button</button>
                            <button>button</button>
                            <button>button</button>
                            <button>button</button>
                            <button>button</button>
                            <button>button</button>
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
                            <div className="user_header_avi" style={{'backgroundImage':  `url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${video.userImageURL}.jpg)`}} />
                            <span className="user_header_avi_username">{video.user}</span>
                        </div>
                        
                    </div>
        </div>
  )
}