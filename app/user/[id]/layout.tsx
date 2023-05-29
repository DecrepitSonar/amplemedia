'use client'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { use, useEffect, useState } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import { UserTypes } from '@/utils/types'
import { profile } from 'console'

// const ActiveLinke = ({children, href}) => {
//     const router = useRouter() 
//     const style = {
      
//     }
//     return() 
//   }
  
const Nav = () => {

const [ activeLink, setActiveLink ] = useState("")
const params = useParams()
const path = usePathname().split('/')

useEffect(() => {
    setActiveLink(path[3])
},[path])

  return (
    <div className='nav'>
        <ul>
            <li 
            className={activeLink == undefined ? "active": ""}
            ><Link href={`user/${params.id}`}>Videos</Link></li>
            <li
            className={activeLink == "playlists" ? "active": ""}
            ><Link href={`user/${params.id}/playlists`}>Playlists</Link></li>
            <li
            className={activeLink == "subscribers" ? "active": ""}
            ><Link href={`user/${params.id}/subscribers`}>Subscribers</Link></li>
            <li
            className={activeLink == "about" ? "active": ""}
            ><Link href={`user/${params.id}/about`}>About</Link></li>
        </ul>
    </div>
  )
}

export default function layout({children} : {  children: React.ReactNode }) {

  return (
    <div>
        <ProfileHeader/>
        <div className="profile_body">
            <Nav/>
            {children}
        </div>    
    </div>
  )
}

const ProfileHeader = () => {
    const [ profileData, setProfileData ] = useState<UserTypes>()
    const params = useParams()

    const getProfileData = async () => {
        
        const response = await fetch(`/api/user/${params.id}`)
        const userdata = await response.json()

        setProfileData(userdata)
        
    }

    useEffect(() => {
        getProfileData()
    },[])

  return (
        <header className="profileHeader" style={{"backgroundImage": `url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${profileData?.imageURL}.jpg)`}}>
            <div className="profileHeader_overlay">
                <div className="profileHeader_subscribe">
                    <h1>{profileData?.name}</h1>
                    <span> {profileData?.subscribers} Subscribers </span>
                    <button>Subscribe</button>
                </div>
            </div>
        </header>
  )
}
