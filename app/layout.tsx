// 'use client'
import "../styles/globals.scss"
import { HeaderNav } from "@/components/HeaderNav"
import { NavSide } from "@/components/NavSide"
import { AppWrapper } from "@/components/AppWrapper"
import { Suspense } from "react"
// export const metadata = {
//   title: 'Ample',
//   description: ' ',
// }

export default async  function RootLayout({ children } : 
{ children: React.ReactNode}) {

  return ( 
    <html lang="en">
       <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body>
        <AppWrapper>
          <HeaderNav/>
          <NavSide/>
          <main>
            {children}  
          </main>
        </AppWrapper>
      </body>
    </html>
  )
}
