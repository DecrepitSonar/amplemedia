'use client'
import { MdChevronRight } from 'react-icons/md';
import { IoPauseCircleOutline, IoRadioOutline, IoVolumeMediumOutline, IoVolumeMuteOutline, } from 'react-icons/io5';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { HeaderTypes, PageDatatypes, UserTypes, VideoTypes } from '@/Models/types';
import {usePathname } from 'next/navigation'
import { VideoCard } from '@/components/VideoCard';

export const PageHeaderVideoComponent = ( props: {path: string} ) => {
    const videoRef = useRef<HTMLVideoElement>()
    const [ headerVideoIndex, setHeaderVideoIndex] = useState(0)
    const [ headerData, setHeaderData] = useState<HeaderTypes>()
    const [ headerVideMuted, toggleHeaderVideoVol] = useState<boolean>(true)
    const path = usePathname().split('/')[1]

    const getHeaderData = async () => {
        try {
            const response = await fetch(`/api/${path == '' ? "watch": path}/featured`)
            const data = await response.json()
            // console.log( path )
            setHeaderData(data)
        }
        catch( err ) {
            console.log( err)
        }
    }

  const handleHeaderVideoChange = () => {

    if( headerVideoIndex == headerData!.videos.length -1 ){
        setHeaderVideoIndex(0)
        handleVideoSelection(headerVideoIndex)
        return
    }
    setHeaderVideoIndex(headerVideoIndex+1)
    handleVideoSelection(headerVideoIndex+1)
  }

  const handleVideoSelection = (index: number) => {
    setHeaderVideoIndex(index)
    console.log( headerData)
    const vid = videoRef.current
    
    if( index == headerVideoIndex && vid.src ) return 
    vid!.src = headerData!.videos[index].contentURL
    vid!.play()
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

    useEffect(()=> { 
        if( headerData ){
            handleVideoSelection(headerVideoIndex)
        }else{
            getHeaderData()
        }
    },[headerData])


    return( 
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
                    <span className="sectionHeaderTitle">{headerData?.title}</span>
                    <span className="sectionHeaderSubTitle">{headerData?.subtitle}</span>
                    <button onClick={ () => toggleMute() }><i>{headerVideMuted? <IoVolumeMuteOutline/> : <IoVolumeMediumOutline/> }</i></button>
                </div>
                <div className="sectionCollection">
                    
                    {
                        headerData?.videos && (
                            
                            headerData.videos.map( (item: VideoTypes, index: number ) : ReactNode => {
                            console.log( 4)    
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
            </section>
        </header>
    )
}
export default function Home() {
  const [ pageData, setPageData ] = useState<PageDatatypes>()
  const router = useRouter()
  
  const getPageData = async () => {
    try {
        const response = await fetch('/api/watch')
        const data = await response.json()
         setPageData(data)
      }
      catch( err ){
        console.log( "Error", err )
      }
  }

  useEffect(() => {
    getPageData()
  },[])

  const path = "watch/featured"
  return (
    <div>
            {
            
             pageData && ( <PageHeaderVideoComponent path={"watch/featured"}/>) }
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
                                  {  section.items.map( (user: UserTypes ) : ReactNode => {
                                        return ( 
                                        <div key={user.id} className="largeAviComponentContainer" onClick={() => {router.push(`/user/${user.id}`)} }>
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
                                                return( <VideoCard key={item.id} video={item}/> )
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
