"use client"

import React, { useState } from 'react'
import {MdHomeFilled } from "react-icons/md"
import {IoAppsSharp, IoRadioButtonOffOutline} from "react-icons/io5"
import Link from 'next/link'

export const NavSide = () => {
    // const [navOpen, toggleNav] = useState(false)
    // const navigate = useNavigate()
  return (
    <aside>
        <ul>
            <li><Link href="/"><MdHomeFilled /> <span>Featured</span></Link></li>
            <li><Link href="/browse"><IoAppsSharp /> <span> Browse</span></Link></li>
            <li><Link href="/live"><IoRadioButtonOffOutline></IoRadioButtonOffOutline> <span>Live</span></Link></li>
        </ul>
    </aside>
  )
}
