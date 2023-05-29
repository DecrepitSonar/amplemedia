'use client'
import React, { useEffect } from 'react'
import { usePathname, useRouter } from "next/navigation"

const SettingsSideNav = () => {
    const path = usePathname().split('/')
    const currentPath = path[path.length-1]
    const router = useRouter() 

    useEffect(() => {
        console.log( path )
    })

    return (
      <div className="settings_side_nav">
              <ul>
                  <li onClick={() => router.push('profile')} className={`${ currentPath == "profile" ? "settings_side_nav_active" : 'settings_side_nav_inActive'}`}>Profile</li>
                  <li onClick={() => router.push('profile/settings')} className={`${ currentPath == "settings" ? "settings_side_nav_active" : 'settings_side_nav_inActive'}`}>Settings</li>
                  <li onClick={() => router.push('profile/account')} className={`${ currentPath == "account" ? "settings_side_nav_active" : 'settings_side_nav_inActive'}`}>Account</li>
              </ul>
      </div>
    )
  }

  
export default function layout({children}) {
  return (
    <div className="settings_Page_container">
        <SettingsSideNav/>
        <div className="settings_main_content">{children}</div>
    </div>
  )
}

