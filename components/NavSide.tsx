"use client"

import React, { useEffect, useState } from 'react'
import {MdHomeFilled } from "react-icons/md"
import { BiCog } from 'react-icons/bi'
import {IoAppsSharp, IoBookmarksOutline, IoListOutline, IoRadioButtonOffOutline} from "react-icons/io5"
import Link from 'next/link'
import { connectToDB } from '@/utils/database'
import { useRouter } from 'next/navigation'

export const NavSide = () => {

  const router = useRouter()

  return (
    <aside>
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
  )
}
