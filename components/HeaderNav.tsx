"use client"
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IoCloseCircleOutline, IoCogOutline, IoSearch } from 'react-icons/io5';
import Link from 'next/link';
import path from 'path';
import { useRouter } from 'next/navigation';
import { LoginModal } from './LoginModal';

export const HeaderNav = () => {

    // const authState = useSelector( (state: RootState) => state.auth )
    // const dispatch = useDispatch()

    const [authState , setAuthState ] = useState(false)
    const router = useRouter()
    const [ modalOpen, toggleModal ] = useState(false)
    const [ formType, setForm ] = useState("login")
    
  return (

    <nav>
        <LoginModal 
        setForm={setForm} 
        toggleModal={toggleModal} 
        modalOpen={modalOpen} 
        formType={formType}
        />
        <h1 className='Logo'> Logo</h1>
            
        <div className="side">
            <div className="inputContainer">
                 <i>
                    <IoSearch/>
                </i>
                <input 
                    type="text" 
                    placeholder="Search"
                    onChange={(e: React.SyntheticEvent) => {router.replace("/search")}}/>
                        <i><IoCloseCircleOutline/></i>
            </div>
            { 
                authState ? 
                <div className="userAuth">
                    <Link href="/user">
                    <span>Username</span>
                    </Link>
                    <Link href="/user"><div className="channelAvi"/></Link>
                    
                    {/* {<button onClick={() => navigate(`/user/settings/${authState.user.id}`) className='btn_notification'><HiOutlineBell/></button>} */}
                    <Link href={"/settings"} className='btn_notification'><IoCogOutline/></Link>
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
