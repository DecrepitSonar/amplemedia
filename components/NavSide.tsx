"use client"

import React, {useRef } from 'react'
import {MdHomeFilled } from "react-icons/md"
import {IoAppsSharp, IoBookmarksOutline, IoListOutline, IoRadioButtonOffOutline} from "react-icons/io5"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/utils/Store'

export const NavSide = () => {

  const navRef = useRef()
  const router = useRouter()
  const navOpen = useSelector( ( state: RootState) => state.navigationSlice.navOpen)

  const openNav = {
    left: '0'
  }

  const closeNav = { 
    left: `-200px`
  }

  return (
    <>
    <aside className="aside_natural ">
        <ul>
            <li><Link href="/"><MdHomeFilled /> <span>Home</span></Link></li>
            <li><Link href="/live"><IoRadioButtonOffOutline></IoRadioButtonOffOutline> <span>Live</span></Link></li>
            <li><Link href="/browse"><IoAppsSharp /> <span> Browse</span></Link></li>
        </ul>
        <label>Library</label>
        <ul>
            <li><Link href="/profile"><IoBookmarksOutline /> <span>Saved</span></Link></li>
            <li><Link href="/profile/history"><IoListOutline/> <span>History</span></Link></li>
        </ul>
        <label>Channels</label>

        <div className="aside_user_model">
            <div className="aside_user_avi"></div>
            <span >Username</span>
        </div>
        <div className="aside_user_model">
            <div className="aside_user_avi"></div>
            <span >Username</span>
        </div>
        <div className="aside_user_model">
            <div className="aside_user_avi"></div>
            <span >Username</span>
        </div>
        <div className="aside_user_model">
           <div className="aside_user_avi"></div>
            <span >Username</span>
        </div>
        <div className="aside_user_model">
            <div className="aside_user_avi"></div>
            <span >Username</span>
        </div>
        <div className="aside_user_model">
            <div className="aside_user_avi"></div>
            <span >Username</span>
        </div>
        <div className="aside_user_model">
            <div className="aside_user_avi"></div>
            <span >Username</span>
        </div>
        <div className="aside_user_model">
           <div className="aside_user_avi"></div>
            <span >Username</span>
        </div>
        <div className="aside_user_model">
           <div className="aside_user_avi"></div>
            <span >Username</span>
        </div>
        <div className="aside_user_model">
           <div className="aside_user_avi"></div>
            <span >Username</span>
        </div>
        <div className="aside_user_model">
           <div className="aside_user_avi"></div>
            <span >Username</span>
        </div>

    </aside>

    <aside className='mobile_aside' ref={navRef} style={navOpen ? openNav : closeNav}>
        <ul>
            <li><Link href="/"><MdHomeFilled /> <span>Home</span></Link></li>
            <li><Link href="/live"><IoRadioButtonOffOutline></IoRadioButtonOffOutline> <span>Live</span></Link></li>
            <li><Link href="/browse"><IoAppsSharp /> <span> Browse</span></Link></li>
        </ul>
        <label>Library</label>
        <ul>
            <li><Link href="/profile"><IoBookmarksOutline /> <span>Saved</span></Link></li>
            <li><Link href="/profile/history"><IoListOutline/> <span>History</span></Link></li>
        </ul>
        <label>Channels</label>

    </aside>

  </>
  )
}
