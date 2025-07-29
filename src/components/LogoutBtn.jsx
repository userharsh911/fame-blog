import React from 'react'
import { logout as authLogout } from '../features/authSlice'
import authService from '../services/authService'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const LogoutBtn = ({className,toggleSidebar}) => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = ()=>{
      toggleSidebar && toggleSidebar()
        authService.logout()
        .then(()=>{
          console.log("logout successfully ")
            dispatch(authLogout())
            navigate('/login')
        })
        .catch((err)=>{
            console.log("err while logout user ",err)
        })
    }
  return (
    <button className={`${className}`} onClick={logout}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <path d="M10 17l5-5-5-5" />
      <path d="M15 12H3" />
    </svg>

    </button>
  )
}

export default LogoutBtn