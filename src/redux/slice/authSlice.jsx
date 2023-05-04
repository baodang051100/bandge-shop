import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  issLogIn: false,
  email: null,
  userName: null,
  userId: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      console.log(action.payload)
      const {email, userName, userId} = action.payload
      state.issLogIn = true
      state.email = email
      state.userName = userName
      state.userId = userId
      sessionStorage.setItem("user", JSON.stringify(state.issLogIn));
    },
    REMOVE_ACTIVE_USER: (state) => {
      state.issLogIn = false
      state.email = null
      state.userName = null
      console.log(state.issLogIn)
      sessionStorage.setItem("user", JSON.stringify(state.issLogIn));
    },
  }
});

export const {SET_ACTIVE_USER, REMOVE_ACTIVE_USER} = authSlice.actions

export const selectIsLogin = (state) => state.auth.issLogIn;

export const selectEmail = (state) => state.auth.email;

export const selectUserName = (state) => state.auth.userName;

export const selectUserId = (state) => state.auth.userId;


export default authSlice.reducer