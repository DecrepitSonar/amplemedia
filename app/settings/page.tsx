'use client'
import { RootState } from '@/utils/Store'
import React from 'react'
import { useSelector } from 'react-redux'
import { TfiNewWindow } from "react-icons/tfi"
import { UserAuthType } from '@/utils/types'

export default function Profile() {

  const auth = useSelector( ( state: RootState) => state.auth.user)<UserAuthType>

  return (
    <div className="library_profile_container">
      <h1>Profile</h1>
      <div className="library_profile_header" style={{"backgroundImage": `url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${auth.headerPosterURL}.jpg)`}}>
        <div className="library_profile_header_avi_container" >
          <div className="library_profile_header_avi" style={{"backgroundImage": `url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${auth.imageURL}.jpg)`}}>
            <div className='user_avi_edit'>
              <button><i><TfiNewWindow/></i>Edit </button>
            </div>
          </div>
          <span className="library_profile_header_avi_username">{auth.username}</span>
        </div>
      </div>
      <div className="library_profile_nav">
      </div>
    </div>
  )
}
