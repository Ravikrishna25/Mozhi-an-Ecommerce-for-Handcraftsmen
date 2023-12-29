import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        loading: true,
        isAuthenticated:false
    },
    reducers: { //how it changes is given in reducer
        loginRequest(state,action){
          return {
            ...state,
            loading:true,

          }
        },
        loginSuccess(state,action){
            return {
                loading:false,
                isAuthenticated:true,
                user:action.payload.user   //to store the data in get request 
            }
        },
        loginFail(state,action){
            return {
                ...state,//copy all field from initial state
                loading:false, 
                error: action.payload
            }
        },
        clearError(state,action){
            return {
                ...state,//copy all field from initial state
                error: null
            }
        },
        registerRequest(state,action){
            return {
              ...state,
              loading:true,
  
            }
          },
          registerSuccess(state,action){
              return {
                  loading:false,
                  isAuthenticated:true,
                  user:action.payload.user   //to store the data in get request 
              }
          },
        registerFail(state,action){
              return {
                  ...state,//copy all field from initial state//isAutheniticated false
                  loading:false, 
                  error: action.payload
              }
          },
        loadUserRequest(state,action){
            return {
              ...state,
              isAuthenticated:false,
              loading:true
  
            }
          },
          loadUserSuccess(state,action){
              return {
                  loading:false,
                  isAuthenticated:true,
                  user:action.payload.user   //to store the data in get request 
              }
          },
        loadUserFail(state,action){
              return {
                  ...state,//copy all field from initial state//isAutheniticated false
                  loading:false, 
                  // error: action.payload
              }
          },
          logoutSuccess(state,action){
              return {
                  loading:false,
                  isAuthenticated:false,
                  
              }
          },
        logoutFail(state,action){
              return {
                  ...state,//copy all field from initial state//isAutheniticated false
                  
                  error: action.payload
              }
          },

          updateProfileRequest(state,action){
            return {
              ...state,
              loading:true,
  
              isUpdated:false,
            }
          },
          updateProfileSuccess(state,action){
              return {
                ...state,
                  loading:false,
                  user:action.payload.user,   //to store the data in get request 
                  isUpdated:true,
              }
          },
        updateProfileFail(state,action){
              return {
                  ...state,//copy all field from initial state//isAutheniticated false
                  loading:false, 
                  error: action.payload
              }
          },
        clearUpdateProfile(state,action){
              return {
                  ...state,//copy all field from initial state//isAutheniticated false
                 isUpdated:false
              }
          },
          updatePasswordRequest(state,action){
            return {
              ...state,
              loading:true,
  
              isUpdated:false,
            }
          },
          updatePasswordSuccess(state,action){
              return {
                ...state,
                  loading:false,
                  isUpdated:true,
              }
          },
        updatePasswordFail(state,action){
              return {
                  ...state,//copy all field from initial state//isAutheniticated false
                  loading:false, 
                  error: action.payload
              }
          },
          forgotPasswordRequest(state,action){
            return {
              ...state,
              loading:true,
              message:null
  
            }
          },
          forgotPasswordSuccess(state,action){
              return {
                ...state,
                  loading:false,
                message : action.payload.message
              }
          },
        forgotPasswordFail(state,action){
              return {
                  ...state,//copy all field from initial state//isAutheniticated false
                  loading:false, 
                  error: action.payload
              }
          },
          resetPasswordRequest(state,action){
            return {
              ...state,
              loading:true,
  
            }
          },
          resetPasswordSuccess(state,action){
              return {
                ...state,
                  loading:false,
                isAuthenticated:true,
                user: action.payload.user
              }
          },
        resetPasswordFail(state,action){
              return {
                  ...state,//copy all field from initial state//isAutheniticated false
                  loading:false, 
                  error: action.payload
              }
          },

        
        
    }
});

//we need to create a actioncreator to use 
const {actions,reducer} = authSlice;

export const {
    loginRequest,
    loginSuccess,
    loginFail,
    clearError,
    registerRequest,
    registerSuccess,
    registerFail,
    loadUserRequest,
    loadUserSuccess,
    loadUserFail,
    logoutSuccess,
    logoutFail,
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFail,
    clearUpdateProfile,
    updatePasswordRequest,
    updatePasswordSuccess,
    updatePasswordFail,
    forgotPasswordRequest,
    forgotPasswordSuccess,
    forgotPasswordFail,
    resetPasswordRequest,
    resetPasswordSuccess,
    resetPasswordFail

} = actions

export default reducer;