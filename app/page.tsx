'use client'
import { MdChevronRight } from 'react-icons/md';
import { IoRadioOutline, IoVolumeMediumOutline, IoVolumeMuteOutline, } from 'react-icons/io5';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { PageDatatypes, UserTypes, VideoTypes } from '@/Models/types';
import { VideoCard } from '@/components/VideoCard';

export default function Home() {
  const [ pageData, setPageData ] = useState<PageDatatypes>()
  const [ headerVideo, setHeaderVideo] = useState<VideoTypes[]>([])
  const [headerVideMuted, toggleHeaderVideoVol] = useState<boolean>(true)
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>()

  const [ headerVideoIndex, setHeaderVideoIndex] = useState(0)

  const getPageData = async () => {
    try {
        const response = await fetch('/api/watch')
        await response.json()
        .then( (data : PageDatatypes) => {
            setPageData(data)
            console.log(data)
            console.log("setting header videos ")
            setHeaderVideo(data.header.videos)
            console.log( data.header.videos)
            handleHeaderVideoSelection(data.header.videos![headerVideoIndex])
            console.log("settings video")
        })
        
      }
      catch( err ){
        console.log( "Error", err )
      }

  }

  const handleHeaderVideoSelection = (video: VideoTypes) => {

    const vid = videoRef.current
    vid!.poster = video.posterURL
    vid!.src = video.contentURL
    vid!.play()
  }

  const handleHeaderVideoChange = () => {
    if( headerVideoIndex >= headerVideo!.length -1 ){
        setHeaderVideoIndex(0)
        handleHeaderVideoSelection(headerVideo![headerVideoIndex])
        return
    }

    setHeaderVideoIndex(headerVideoIndex+1)
    handleHeaderVideoSelection(headerVideo![headerVideoIndex])
  }
  const toggleMuteHeaderVideo = () => {
    let video = videoRef.current
    if(headerVideMuted)  {
        video!.muted = false
        console.log( "unmuted")
        toggleHeaderVideoVol(false)
        return
    }  
    console.log( "muting volume")
    toggleHeaderVideoVol(true)
    video!.muted  = true
  }
  
  useEffect(() => {
    console.log("getting page data ")
    getPageData()
  },[])

  
  useEffect(() => {
  
  }, [headerVideo])

  return (
    <div>
        <header>
            <div className="headerPoster">
                <video 
                    ref={videoRef} 
                    autoPlay={true}  
                    muted 
                    onEnded={() => handleHeaderVideoChange()}
                    className="headerPoster">
                    <source  type='video/mp4'/>
                </video>
                <div className="headerPosterOverlay"/>
            </div>
            <section>
                <div className="sectionHeader">
                    <span className="sectionHeaderTitle">Watch</span>
                    <span className="sectionHeaderSubTitle">{pageData?.header.title}</span>
                    <button onClick={ () => toggleMuteHeaderVideo() }><i>{headerVideMuted? <IoVolumeMuteOutline/> : <IoVolumeMediumOutline/> }</i></button>
                </div>
                <div className="sectionCollection">
                    
                    {
                        pageData && (
                            pageData.header.videos.map( (item: VideoTypes ) : ReactNode => {
                                
                                return(
                                 <div onClick={() => handleHeaderVideoSelection(item)} key={item.id} className="videoCardContainer" id='headerVideos'>
                                    <div className="videoCard" style={{"backgroundImage": `url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${item.posterURL}.jpg)`}}/>
                                    <div className="videoCardHeader">
                                        <div className="headerAvi" style={{"backgroundImage": `url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${item.userImageURL}.jpg)`}}/>
                                        <span>{item.user}</span>
                                    </div>
                                    <span className="videoCardDescription">
                                        {item.title}
                                    </span>
                                </div>
                                )

                            })
                        )
                    }
                </div>
            </section>
        </header>
            {
                pageData && (
                    pageData.body.map( (section) : ReactNode => {
                        switch( section.type){
                            case "users": 
                            return(
                                <section>
                                <div className="sectionHeader">
                                    <span className="sectionHeaderSubTitle">{section.title} <Link href={"/live"}><i><MdChevronRight/></i></Link></span>
                                </div>
                                <div className="sectionCollection">
                                  {  section.items.map( (user: UserTypes) : ReactNode => {
                                        return ( 

                                        <div key={user.id} className="largeAviComponentContainer" onClick={() => {router.push('/user')} }>
                                            <div className="largeAvi" style={{"backgroundImage": `url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${user.imageURL}.jpg)`}}/>
                                            <span>{user.name} </span>
                                        </div>
                                        )
                                    })}
                                    </div>
                                </section>)
                            break;
                            default: 
                                return(
                                    <section>
                                        <div className="sectionHeader">
                                            <span className="sectionHeaderSubTitle">{section.title} <Link href={"/live"}><i><MdChevronRight/></i></Link></span>
                                        </div>
                                        <div className="sectionCollection">
                                        {
                                            section.items.map( (item: VideoTypes) : ReactNode=> {
                                                return(
                                                <div key={item.id} className="videoCardContainer">
                                                    <div className="videoCard" style={{"backgroundImage":`url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${item.posterURL}.jpg)`}}/>
                                                    <div className="videoCardHeader" >
                                                        <div className="headerAvi" style={{"backgroundImage":`url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${item.userImageURL}.jpg)`}}/>
                                                        <span>{item.user}</span>
                                                    </div>
                                                    <span className="videoCardDescription">
                                                        {item.title}
                                                    </span>
                                                    {
                                                        item.live ? 
                                                        <span className='live-status'><i><IoRadioOutline/></i> {item.views} Watching</span> :
                                                        <span className='live-status'> {item.views} Views</span>
                                                    }
                                                </div>
                                                )

                                            })
                                        }
                                        </div>
                                    </section>)

                        }
                    })
                )
            }
    </div>
  )
}


                    // <div className="videoCardContainer">
                    //     <div className="videoCard"></div>
                    //     <div className="videoCardHeader">
                    //         <div className="headerAvi"/>
                    //         <span>Artist</span>
                    //     </div>
                    //     <span className="videoCardDescription">
                    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    //     </span>
                    // </div>

                    // <div className="videoCardContainer">
                    //     <div className="videoCard"></div>
                    //     <div className="videoCardHeader">
                    //         <div className="headerAvi"/>
                    //         <span>Artist</span>
                    //     </div>
                    //     <span className="videoCardDescription">
                    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    //     </span>
                    // </div>

                    // <div className="videoCardContainer">
                    //     <div className="videoCard"></div>
                    //     <div className="videoCardHeader">
                    //         <div className="headerAvi"/>
                    //         <span>Artist</span>
                    //     </div>
                    //     <span className="videoCardDescription">
                    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    //     </span>
                    // </div>