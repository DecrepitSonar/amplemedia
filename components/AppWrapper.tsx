'use client'
import { Provider } from "react-redux"
import { store } from '@/utils/Store'
import { useState } from "react"

export const AppWrapper = ({children}) => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <Provider store={store}> {children} </Provider>
  )
}
