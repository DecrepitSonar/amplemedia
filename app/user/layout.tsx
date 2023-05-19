'use client'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export const Nav = () => {

let searchParams = useSearchParams()
let params = useParams()

useEffect(() => {
    for( const item in searchParams.entries()){
        console.log(item) 
    }
    console.log( params)
},[])

  return (
    <div className='nav'>
        <ul>
            <li 
                // {onClick={() => navigate(`/user/${path[2]}`)}}
            ><Link href="user/">Videos</Link></li>
            <li
            // className={activeLink == "playlists" ? "active": ""}
                // {onClick={() => navigate(`/user/${path[2]}/playlists`)}}
            ><Link href="user/playlist">Playlists</Link></li>
            <li
                // {className={activeLink == "subscribers" ? "active": ""}}
                // {onClick={() => navigate(`/user/${path[2]}/subscribers`)}}
            ><Link href="user/subscribers">Subscribers</Link></li>
            <li
                // {className={activeLink == "about" ? "active": ""}}
                // {onClick={() => navigate(`/user/${path[2]}/about`)}}
            ><Link href="user/about">About</Link></li>
        </ul>
    </div>
  )
}

export default function layout({children} : {  children: React.ReactNode }) {

  return (
    <div>
            <header className="profileHeader" style={{"backgroundImage": `url(assets/kendrick-lamar-variety-hitmakers.webp)`}}>
                    <div className="profileHeader_overlay">
                    
                        <div className="profileHeader_subscribe">
                            <h1>username</h1>
                            <span> 11,000 Subscribers </span>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </header>
                <div className="profile_body">
                    <Nav/>
                    {children}
                </div>    
            </div>
  )
}
