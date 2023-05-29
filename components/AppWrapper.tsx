'use client'
import { Provider } from "react-redux"
import { store } from '@/utils/Store'

export const AppWrapper = ({children}) => {
  return (
    <Provider store={store}> {children} </Provider>
  )
}
