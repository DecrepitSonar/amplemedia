'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import { MdChevronRight } from 'react-icons/md';
import { PageDatatypes, VideoTypes } from '@/utils/types';
import { VideoCard } from '@/components/VideoCard';
import { PageHeader } from '@/components/PageHeader';

export default function Live() {

    const [ pageData, setPageData] = useState<PageDatatypes>()

    const getPageData = async () => {
        try{
            const response = await fetch( '/api/live')
            const data = await response.json()
            console.log( data )
            setPageData(data)
        }
        catch( err){
            console.log( err )
        }
    }

    useEffect(() => {
        getPageData()
    },[])
  return (
    <div>
        {pageData && ( <PageHeader path={"live"}/>) }

        { 
            pageData && (
            pageData.body.map( (section, index) : ReactNode=> {
               return(
                <section key={index}>
                <div className="sectionHeader">
                    <span className="sectionHeaderSubTitle">{section.title} <i><MdChevronRight/></i></span>
                </div>
                <div className="sectionCollection">
                {
                    section.items.map( (item: VideoTypes) : ReactNode => {
                        return(  <VideoCard key={item.id} video={item}/> )
                    })
                }
                  
                </div>    
            </section>
               )

            }))
        }
    </div>
  )
}