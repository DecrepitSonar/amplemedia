
import "../styles/globals.scss"
import { HeaderNav } from "@/components/HeaderNav"
import { LoginModal } from "@/components/LoginModal"
import { NavSide } from "@/components/NavSide"

export const metadata = {
  title: 'Ample',
  description: ' ',
}

export default async  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return ( 
    <html lang="en">
      <body>
          <HeaderNav/>
          <NavSide/>
          <main>
            {children}  
          </main>
      </body>
    </html>
  )
}
