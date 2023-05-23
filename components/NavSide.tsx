"use client"

import React, { useEffect, useState } from 'react'
import {MdHomeFilled } from "react-icons/md"
import {IoAppsSharp, IoBookmarksOutline, IoListOutline, IoRadioButtonOffOutline} from "react-icons/io5"
import Link from 'next/link'
import { connectToDB } from '@/utils/database'

export const NavSide = () => {


  return (
    <aside>
        <ul>
            <li><Link href="/"><MdHomeFilled /> <span>Featured</span></Link></li>
            <li><Link href="/live"><IoRadioButtonOffOutline></IoRadioButtonOffOutline> <span>Live</span></Link></li>
            <li><Link href="/browse"><IoAppsSharp /> <span> Browse</span></Link></li>
        </ul>
        <label>Library</label>
        <ul>
            <li><Link href="/"><IoBookmarksOutline /> <span>Saved</span></Link></li>
            <li><Link href="/live"><IoListOutline/> <span>History</span></Link></li>
        </ul>
        <label>Online</label>

    </aside>
  )
}
