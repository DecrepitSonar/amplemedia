'use client'
import { MdChevronRight } from 'react-icons/md';
import Link from "next/link";
import { useParams, useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import {PageDatatypes, UserTypes, VideoTypes } from '@/utils/types';
import { VideoCard } from '@/components/VideoCard';
import { PageHeader } from '@/components/PageHeader';

export default function Home() {
  const [ pageData, setPageData ] = useState<PageDatatypes>()
  const params = useParams()
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

  return (
    <div>
            { pageData && ( <PageHeader path={"watch/featured"}/>) }
            {
                pageData && (
                    pageData.body.map( (section) : ReactNode => {
                        switch( section.type){
                            case "users": 
                            return(
                                <section className="aviSection">
                                <div className="sectionHeader">
                                    <span className="sectionHeaderSubTitle">{section.title} <Link href={`/${section.title.toLocaleLowerCase()}`}><i><MdChevronRight/></i></Link></span>
                                </div>
                                <div className="sectionCollection ">
                                    <div className="aviiCollectionContainer">
                                        <div className="aviCollection">
                                        {  section.items.map( (user: UserTypes ) : ReactNode => {
                                                return ( 
                                                
                                                    <div key={user.id} className="largeAviComponentContainer" onClick={() => {router.push(`/user/${user.id}`)} }>
                                                        <div className="largeAvi" style={{"backgroundImage": `url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${user.imageURL}.jpg)`}}/>
                                                        <span>{user.name} </span>
                                                    </div>
                                                )
                                            })}
                                            </div>
                                        </div>
                                    </div>
                                </section>)
                            break;
                            default: 
                                return(
                                    <section>
                                        <div className="sectionHeader">
                                            <span className="sectionHeaderSubTitle">{section.title} <Link href={`${section.title.toLocaleLowerCase()}`}><i><MdChevronRight/></i></Link></span>
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
