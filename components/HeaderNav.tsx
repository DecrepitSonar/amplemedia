"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IoCloseCircleOutline, IoCogOutline, IoSearch } from 'react-icons/io5';
import {RxHamburgerMenu } from 'react-icons/rx'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LoginModal } from './LoginModal';
import { RootState, useAppDispatch } from '@/utils/Store';
import { validateSession } from '@/utils/authSlice';

export const HeaderNav = () => {
    
    const auth = useSelector( ( state: RootState) => state.auth)

    const router = useRouter()
    const [ modalOpen, toggleModal ] = useState(false)
    const [ formType, setForm ] = useState("login")
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        console.log('validating session ')
        dispatch(validateSession())
    },[])

  return (

    <nav>
        <LoginModal 
        setForm={setForm} 
        toggleModal={toggleModal} 
        modalOpen={modalOpen} 
        formType={formType}
        />
        <div className='Logo'>
        <button id='headerMenu'><i><RxHamburgerMenu/></i></button>
        <h1 >Logo</h1>
        </div>
        
            
        <div className="side">
            <div className="inputContainer">
                 <i><IoSearch/></i>
                <input 
                    type="text" 
                    placeholder="Search"
                    onChange={(e: React.SyntheticEvent) => {router.replace("/search")}}/>
                        <i><IoCloseCircleOutline/></i>
            </div>
            { 
                auth.LoggedIn ? 
                <div className="userAuth">
                    <span>{auth.user.username}</span>
                    <div onClick={() => router.push('/profile')} style={{"backgroundImage": `url(https://prophile.nyc3.cdn.digitaloceanspaces.com/images/${auth.user.imageURL}.jpg)`}} className="channelAvi"/>
                </div>
                :
            <div className="userAuth">
                <button  className="buttonOutline" onClick={() => {
                    toggleModal(true)
                    setForm("login")
                }}>Login</button>
                <button  className="buttonHighlight"
                onClick={() => {
                    toggleModal(true)
                    setForm("register")
                }}
                >Sign up</button>
            </div>
            }
        </div>
    </nav>
  )
}
