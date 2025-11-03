import { createSlice } from "@reduxjs/toolkit";
import type { FormValues } from "../types";




export const registeredUsers = {name : 'Ali-Mohammadi' , email : "jgfbhfg@gmail.com" , password : "12345678"}

  interface AuthState {
    user: FormValues | null;
    error: string | null;
    isLogin: boolean;
  }


const initialState : AuthState = {
    user : null ,
    error : null,
    isLogin : false,
}




const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        register : (state , action) =>{
            state.user = action.payload;
            state.error = null;
            state.isLogin = true;
        },
          login: (state, action) => {
            const { email, password } = action.payload;
            if (email === registeredUsers.email && password === registeredUsers.password) {
                state.user = registeredUsers;
                state.error = null;
                state.isLogin = true;
                alert("You Are Logedin")
                
            } else {
                state.isLogin = false;
                alert("Email or Password is wrong")
            }
        },
            logout: (state) => {
            state.user = null;
            state.isLogin = false;
        },
    }
})

export const {
 register,
 logout,
 login,
} = authSlice.actions;

export default authSlice.reducer;