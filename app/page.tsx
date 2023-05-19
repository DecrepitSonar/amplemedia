'use client'
import { MdChevronRight } from 'react-icons/md';
import { IoRadioOutline, } from 'react-icons/io5';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

type videoTypes = {
    id: string, 
    videoURL: string, 
    title: string, 
    artist: string, 
    albumId: string, 
    views: number,
    releaseDate: Date,
    artistImageURL: string, 
    imageURL: string, 
    type: string
}

type userTypes = {
    id: string, 
    name: string,
    type: string, 
    isVerified: boolean,
    imageURL: string, 
    joinDate: string, 
    subscribers: number
}

export default function Home() {
    const [ featuredContent, setFeaturedContent ] = useState<videoTypes[]>([])
    const [ users, setUsers] = useState([])
    const [ headerVideo, setHeaderVideo] = useState('')

  const router = useRouter()

  const getFeaturedData = async () => {
    try {
        const response = await fetch('/api/watch')
        const data = await response.json()
        setFeaturedContent(data)
      }
      catch( err ){
        console.log( "Error", err )
      }
  }

  const getUsers = async () => {
    try{
        const response = await fetch('/api/user')
        const data = await response.json()
        console.log( data )
        setUsers(data)
    }
    catch( err){
    console.log( err )
    }
  }

  useEffect(() => {
    getFeaturedData() 
    getUsers()
  },[])
//   style={{"backgroundImage": `url(/assets/unnamed-20-e1654195589670-1280x720.jpg)`}
  return (
    <div>
        <header>
            <div className="headerPoster">
                <video autoPlay controls className="headerPoster" poster='/assets/unnamed-20-e1654195589670-1280x720.jpg'>
                    <source src={ headerVideo} type='video/mp4'/>
                </video>
                <div className="headerPosterOverlay"></div>
            </div>
            <section>
                <div className="sectionHeader">
                    <span className="sectionHeaderTitle">Watch</span>
                    <span className="sectionHeaderSubTitle">New Release</span>
                </div>
                <div className="sectionCollection">
                    
                    {
                        featuredContent && (
                            featuredContent.map( (item: videoTypes ) : ReactNode => {
                                
                                return(
                                    <div onMouseEnter={() => setHeaderVideo(item.videoURL)} key={item.id} className="videoCardContainer" onClick={() => router.push("/watch")}>
                                    <div className="videoCard" style={{"backgroundImage": `url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${item.imageURL}.jpg)`}}/>
                                    <div className="videoCardHeader">
                                        <div className="headerAvi" style={{"backgroundImage": `url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${item.artistImageURL}.jpg)`}}/>
                                        <span>{item.artist}</span>
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
        <section>
            <div className="sectionHeader">
                <span className="sectionHeaderSubTitle">Discover Channels</span>
            </div>

            <div className="discoverAviSection">


            {
                users && (
                    users.map( (user: userTypes) => {
                        return ( 
                        <div key={user.id} className="largeAviComponentContainer" onClick={() => {router.push('/user')} }>
                            <div className="largeAvi" style={{"backgroundImage": `url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${user.imageURL}.jpg)`}}/>
                            <span>{user.name} </span>
                        </div>
                        )
                    })
                )
            }
            
              
            </div>

        </section>

        <section>
            <div className="sectionHeader">
                <span className="sectionHeaderSubTitle">On Air <Link href={"/live"}><i><MdChevronRight/></i></Link></span>
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
                    <span className='live-status'><i><IoRadioOutline/></i> 12312 Watching</span>
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
                    <span className='live-status'><i><IoRadioOutline/></i> 12312 Watching</span>
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
                    <span className='live-status'><i><IoRadioOutline/></i> 12312 Watching</span>
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
                    <span className='live-status'><i><IoRadioOutline/></i> 12312 Watching</span>
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
                    <span className='live-status'><i><IoRadioOutline/></i> 12312 Watching</span>
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
                    <span className='live-status'><i><IoRadioOutline/></i> 12312 Watching</span>
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
                    <span className='live-status'><i><IoRadioOutline/></i> 12312 Watching</span>
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
                    <span className='live-status'><i><IoRadioOutline/></i> 12312 Watching</span>
                </div>
            </div>
        </section>

        <section>
            <div className="sectionHeader">
                <span className="sectionHeaderSubTitle">Music <i><MdChevronRight/></i></span>
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
                <span className="sectionHeaderSubTitle">Podcasts <i><MdChevronRight/></i></span>
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
                <span className="sectionHeaderSubTitle">Gaming<i><MdChevronRight/></i></span>
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