'use client'
import { RootState, useAppDispatch } from "@/utils/Store"
import { login, register } from "@/utils/authSlice"
import { AuthPropTypes, FormTypes, LoginFormTypes, SignupFormTypes } from "@/utils/types"
import Link from "next/link"
import { useState } from "react"
import { FaApple,
    FaGooglePlusG,
    FaFacebookF } from "react-icons/fa"
import { useSelector } from "react-redux"


export const LoginModal = (props: AuthPropTypes) => {
  const auth = useSelector( ( state: RootState) => state.auth)
    
    return (
      <div className="login_container" 
        style={props.modalOpen && !auth.LoggedIn ? {"display" : "flex"} : {"display" : "none"}}
      >
        { props.formType == "login" ? <Login setForm={props.setForm} toggleModal={props.toggleModal} /> 
        : <RegisterModal setForm={props.setForm} toggleModal={props.toggleModal} />}
      </div>
    )
  }  

  const Login = (props: FormTypes) => {
    
    const dispatch = useAppDispatch() 
    const auth = useSelector( ( state: RootState) => state.auth)

    return(
      <div className="modal">
      <div className="form_container">
      <span className="form_title"> Login </span>
  
        <form 
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
              email: { value: string };
              password: { value: string };
            };
            
            const formData: LoginFormTypes = {
              email: target.email.value, 
              password: target.password.value
            }

            console.log( "sending login inputs")
            dispatch(login(formData))
        
            props.toggleModal(!auth.LoggedIn)

          }}  
        >
          <input 
            type="email" 
            name="email"
            placeholder="Email"
          />
          <input 
            type="password" 
            name="password"
            placeholder="Password "
          />
          <Link href="reset"><span> Forgot password?</span></Link>
          <button type="submit">Sign in </button>
          <span className="errorMessage">{auth.error} </span>
        </form>
        <div className="seperator_container">
          <hr/> Or <hr/>
        </div>
  
        <div className="Other_auth_options">
          <div className="register_button_container"><div className="register_button"><FaApple/><button> Login With Apple </button></div></div>
          <div className="register_button_container"><div className="register_button"><FaGooglePlusG/><button>Login With Google </button></div></div>
          <button className="register_button_container register register_button"  
          onClick={() => props.setForm("register")}>Sign Up </button>
          <button className="btn_close"
          onClick={() => props.toggleModal(false)}
          >close</button>
        </div>
      </div>
      
     </div>
    )
  }
  
  const RegisterModal = (props: FormTypes) => {
  
    const [authData, setAuthData ] = useState<SignupFormTypes>()
    const [passwordValidation, setPasswordValidation] = useState("")
  
    const dispatch = useAppDispatch()
    const auth = useSelector( ( state: RootState) => state.auth)
  
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
  
      const {name, value } = e.currentTarget

      setAuthData( {
          ...authData,
          [name]: value
        })
    }
  
    const handleSubmit = async ( e: React.SyntheticEvent) => {
      e.preventDefault()
  
      try{ 
        await verifyPasswords()
        dispatch(register(authData))
      }
      catch( err){  
        console.log(err)
      }
     
    }
  
    const verifyPasswords = async() => {
      if(passwordValidation != authData.password){
        throw false 
      }
  
      return
    }
    return(
      <div className="modal">
          <div className="form_container">
          <span className="form_title"> Sign Up </span>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input 
              type="text" 
              required={true}
              placeholder="Username"
              name="username"
              onChange={(e) => handleChange(e)}/>
              <input 
              type="email" 
              required={true}
              placeholder="Email"
              name="email"
              onChange={(e) => handleChange(e)}/>
              <input 
              type="password" 
              required={true}
              placeholder="Password "
              name="password"
              onChange={(e) => handleChange(e)}/>
              <input type="password" 
              required={true}
              placeholder="Confirm Password"
              name="passwordValidation"
              onChange={(e) => setPasswordValidation(e.target.value)}/>
  
              <br/>
              <button type="submit">Sign up </button>
              {<span className="errorMessage">{auth.error} </span>}
            </form>
            <div className="seperator_container">
              <hr/> Or <hr/>
            </div>
  
            <div className="Other_auth_options">
              <div className="register_button_container"><div className="register_button"><FaApple/><button> Login With Apple </button></div></div>
              <div className="register_button_container"><div className="register_button"><FaGooglePlusG/><button>Login With Google </button></div></div>
              <button className="register_button_container register register_button"  onClick={() =>  props.setForm("login")}>Sign In </button>
              <button className="btn_close"
              onClick={() => props.toggleModal(false)}
              >close</button>
            </div>
          </div>
  
        </div>
    )
  }
  