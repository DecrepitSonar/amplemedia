'use client'
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { LoginFormTypes, SignupFormTypes, UserAuthType } from './types'
import axios from 'axios'

const initialState = {
    navOpen: false
}

const navigationSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        toggleNav: (state) => {
            state.navOpen = !state.navOpen
        }
    }
})

export const { toggleNav } = navigationSlice.actions
export default navigationSlice.reducer