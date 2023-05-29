'use client'
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { LoginFormTypes, SignupFormTypes, UserAuthType } from './types'
import axios from 'axios'

const initialState = {
  isLoading: false,
  LoggedIn: false,
  user: <UserAuthType>{},
  error: ""
}

const handleLogin = createAsyncThunk('auth/handleLogin',  (credentials: LoginFormTypes)  => {
  return axios.post('http://localhost:8000/api/v1/auth/login', credentials)
   .then( response => { 
     return response
   })
})

const handleRegister = createAsyncThunk('auth/handleRegister', (formData: SignupFormTypes) => {
  return axios.post("http://localhost:8000/api/v1/auth/signup", formData)
  .then( response => {
    return response 
  })
})

const validateUserSession = createAsyncThunk('auth/validateUserSession' , () => {
  console.log("validating token ")
  // return axios.get("http://localhost:8000/api/v1/auth/verify")
  // .then( response => {
  //   return response 
  // })
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleLogin.pending, state => {
      state.isLoading = true 
      state.error = ""
    })
    builder.addCase(handleLogin.fulfilled, ( state, action) => {
      state.isLoading = false
      state.LoggedIn = true
      state.user = action.payload.data
    })
    builder.addCase( handleLogin.rejected, (state, action) => {
      state.isLoading = false

      switch( action.error.code){
        case "ERR_BAD_REQUEST":
            state.error = "Username or Password incorrect"
            break;
            default: 
            state.error = "Network error"
      }
    })
    builder.addCase(handleRegister.pending, state => {
      state.isLoading = true 
      state.error = ""
    })
    builder.addCase(handleRegister.fulfilled, (state, action ) => {
      state.isLoading = false 
    })
    builder.addCase( handleRegister.rejected, (state, action) => {
      state.isLoading = false

      switch( action.error.code){
        case "ERR_BAD_REQUEST":
            state.error = "User Already Exist"
            break;
            default: 
            state.error = "Network error"
      }
    }),
    builder.addCase(validateUserSession.pending, (state, action) => {
      console.log('pending session')
    }),
    builder.addCase(validateUserSession.fulfilled, (state, action) => {
      console.log( "session validated ")
    }),
    builder.addCase(validateUserSession.rejected, (state, action ) => {
      console.log( "session invalid ")
    })
  }
})

export const auth = authSlice.reducer
export const login = handleLogin 
export const register = handleRegister
export const validateSession = validateUserSession