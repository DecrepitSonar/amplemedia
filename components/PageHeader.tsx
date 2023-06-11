import React, { ReactNode, SyntheticEvent, useEffect, useRef, useState } from 'react'
import { usePathname } from "next/navigation"
import { IoPauseCircleOutline, IoVolumeHighOutline, IoVolumeMuteOutline } from 'react-icons/io5'
import { HeaderTypes, VideoTypes } from '@/utils/types'

export const PageHeader =  ( props: {path: string} ) => {
    const [curretnVideoTime, setCurrentVideotime] = useState(0)

    const videoRef = useRef<HTMLVideoElement>()
    const videoContainerRef = useRef<HTMLDivElement>()
    const [ headerVideoIndex, setHeaderVideoIndex] = useState(0)
    const [ headerData, setHeaderData] = useState<HeaderTypes>()
    const [ headerVideMuted, toggleHeaderVideoVol] = useState<boolean>(true)
    const path = usePathname().split('/')[1]

    const getHeaderData = async () => {
        try {
            const response = await fetch(`/api/${path == '' ? "watch": path}/featured`)
            const data = await response.json()

            setHeaderData(data)
        }
        catch( err ) {
            console.log( err)
        }
    }

  const handleHeaderVideoChange = () => {

    const videoContainer = videoContainerRef.current
    if( headerVideoIndex == headerData!.videos.length -1 ){
        setHeaderVideoIndex(0)
        // handleVideoSelection(headerVideoIndex)
        videoContainer.scrollTo(0,0 )
        return
    }
    // videoContainer.scrollTo(0,videoContainer.clientHeight * headerVideoIndex)
    setHeaderVideoIndex(headerVideoIndex+1)
    handleVideoSelection(headerVideoIndex+1)
  }

  const handleVideoSelection = (index: number) => {

    setHeaderVideoIndex(index)
    const vid = videoRef.current
    
    if( index == headerVideoIndex && vid.src ) return 
    vid!.src = headerData!.videos[index].contentURL
    vid!.play()

    const videocontainer = videoContainerRef.current
    
    if( headerVideoIndex == 0){
        videocontainer.scrollTo(0, 0)
    }

    videocontainer.scrollTo(0, (videocontainer.scrollHeight / 4)*index) 

  }

  
  const toggleMute = () => {
    let video = videoRef.current
    if(headerVideMuted)  {
        video!.muted = false
        toggleHeaderVideoVol(false)
        return
    }  

    toggleHeaderVideoVol(true)
    video!.muted  = true
  }
  const updatetime  = () => {
    const video = videoRef.current

    if( video.currentTime != Number.NaN){
        const duration = Math.floor(video.duration)
        const currentTime = Math.floor(video.currentTime)
        setCurrentVideotime( Math.ceil(( currentTime /  duration )  * 100  ) )    
    }

    return
  }

  const progressBarStyle = {
    width: `${curretnVideoTime}%`
  }

    useEffect(()=> { 
        if( headerData ){
            handleVideoSelection(headerVideoIndex)
        }else{
            getHeaderData()
        }
    },[headerData])


    return( 

        <header style={ headerData?.videos ? {'backgroundImage': `url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${headerData.videos[headerVideoIndex].posterURL}.jpg)`} : null}>
            <div className="headerPoster">
                <button onClick={ () => toggleMute() }><i>{headerVideMuted? <IoVolumeMuteOutline/> : <IoVolumeHighOutline/> }</i></button>
                <video 
                    ref={videoRef} 
                    autoPlay={true}  
                    muted 
                    onEnded={() => handleHeaderVideoChange()}
                    onTimeUpdate={() => updatetime() } 
                    className="headerPosterVideo">
                    <source  type='video/mp4'/>
                </video>
                <div className="headerPosterOverlay"/>
                <div className="progressbarContainer">
                        <div className="progressbar" style={progressBarStyle}/>
                </div>
            </div>
            <section className='headerSection'>
                <div className="sectionHeader">
                    <span className="sectionHeaderTitle">{headerData?.title}</span>
                    <span className="sectionHeaderSubTitle">{headerData?.subtitle}</span>
                </div>
                <div className="sectionHeaderCollection">
                    <div ref={videoContainerRef} className="itemWrapper">
                    {
                        headerData?.videos && (
                            
                            headerData.videos.map( (item: VideoTypes, index: number ) : ReactNode => {
                                return(
                                 <div  
                                 onClick={() => handleVideoSelection(index)} 
                                 key={item.id} 
                                 className='videoCardContainer'>
                                    <div className='videoCard' style={{"backgroundImage": `url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${item.posterURL}.jpg)`}}>
                                        <div className={`videoCardOverlay ${headerVideoIndex == index ? "videoCardActive" : ""}`}><i><IoPauseCircleOutline/></i></div>
                                    </div>
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
                    <div className="itemPagerContainer">
                        {
                            headerData?.videos && ( 
                                headerData.videos.map((video, index: number ) : ReactNode => {
                                    return( <div  onClick={() => handleVideoSelection(index) } key={index.toString()} className={`itemPagerSelectorDot ${headerVideoIndex == index ? `itemPagerContainer_active`: ``}` }></div>   )
                                })
                                )
                            }
                    </div>
                   
                </div>
            </section>
        </header>
    )
}
