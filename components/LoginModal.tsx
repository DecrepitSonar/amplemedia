'use client'
import Link from "next/link"
import { useState } from "react"
import { FaApple,
    FaGooglePlusG,
    FaFacebookF } from "react-icons/fa"

type AuthPropTypes = {
    modalOpen: boolean,
    formType: string,
    setForm: Function
    toggleModal: Function

}
type FormTypes = {
    setForm: Function
    toggleModal: Function
}
export const LoginModal = (props: AuthPropTypes) => {
    
    return (
      <div className="login_container" 
        style={props.modalOpen ?{"display" : "flex"} : {"display" : "none"}}
      >
        { props.formType == "login" ? <Login setForm={props.setForm} toggleModal={props.toggleModal} /> 
        : <RegisterModal setForm={props.setForm} toggleModal={props.toggleModal} />}
      </div>
    )
  }
  
  type LoginFormTypes = {
    email: string,
    password: string,
  }
  
  const Login = (props: FormTypes) => {
  
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
            
            const formData = {
              email: target.email.value, 
              password: target.password.value
            }

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
          <button>Sign in </button>
          {/* {<span className="errorMessage">{props.errorStatus} </spa}n> */}
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
  
    const [authData, setAuthData ] = useState({})
    const [passwordValidation, setPasswordValidation] = useState("")
  
    // const dispatch = useDispatch<any>()
  
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
  
      setAuthData({
          ...authData,
          [e.currentTarget.name]: e.currentTarget.value
        })
    }
  
  
    
    const handleSubmit = async ( e: React.SyntheticEvent) => {
      e.preventDefault()
  
      try{ 
        await verifyPasswords()
        // dispatch(register(authData))
      }
      catch( err){  
        console.log("")
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
              {/* {<span className="errorMessage">{props.errorStatus} </span>} */}
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
  