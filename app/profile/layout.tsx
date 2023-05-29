'use client'
import { RootState } from '@/utils/Store'
import { UserAuthType } from '@/utils/types'
import React, { useEffect } from 'react'
import { TfiNewWindow } from "react-icons/tfi"
import { useSelector } from 'react-redux'
import { useRouter, usePathname} from 'next/navigation'

export const ProfileNavHeader = () => {
    const auth: UserAuthType = useSelector( ( state: RootState) => state.auth.user)
    const router = useRouter()
    const path = usePathname().split('/')
    const currentPath = path[path.length -1 ]
  
  return (
    <>
      <h1>Profile</h1>
      <div className="library_profile_header" style={{"backgroundImage": `url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${auth.headerPosterURL}.jpg)`}}>
        <div className="library_profile_header_avi_container" >
        <div className="library_profile_header_avi" style={{"backgroundImage": `url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${auth.imageURL}.jpg)`}}>
        </div>
        <span className="library_profile_header_avi_username">{auth.username}</span>
      </div>
      </div>
      
    <div className="library_nav">
        <ul>
            <li className={currentPath == "profile" ? "library_profile_active": ""} onClick={() => router.push('profile')}>Saved</li>
            <li className={currentPath == "channels" ? "library_profile_active": ""} onClick={() => router.push('profile/channels')}>Channels</li>
            <li className={currentPath == "history" ? "library_profile_active": ""} onClick={() => router.push('profile/history')}>History</li>
        </ul> 
    </div>
    </>
  )
}

export default function layout({children}) {
  return (
      <div className="library_profile_container">
          <ProfileNavHeader/>
          <div className="library_body">{children}</div>
    </div>
  )
}