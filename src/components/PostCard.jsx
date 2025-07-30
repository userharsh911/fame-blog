import React from 'react'
import articleService from '../services/articles'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
const PostCard = ({$id, title, featuredImage,path}) => {
        const authStatus = useSelector(state => state.isAuthenticated)
    const navigate = useNavigate();
return (
    <div className="max-w-sm w-full rounded-lg mx-auto hover:-translate-y-3 transition overflow-hidden shadow-xl hover:shadow-gray-950 bg-white bg-gradient-to-r dark:from-gray-900 hover:dark:from-gray-950 dark:via-gray-800 dark:hover:via-gray-700 dark:to-gray-900 hover:dark:to-gray-950 duration-200">
            <div className="relative h-48 overflow-hidden">
                    <img 
                            src={articleService.getFilePreview(featuredImage)} 
                            alt={title} 
                            className="w-full hover:brightness-100 brightness-80 h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
            </div>
            <div className="px-6 py-4 ">
                    <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">{title}</h2>
            </div>
            <div className="px-6 pb-4 relative inline-block group">
    <button
        onClick={() => {
            if(authStatus) navigate(`/${path}/${$id}`)
            else navigate('/login')
        }}
        className={`
            bg-blue-500 hover:bg-blue-600 hover:-rotate-5 shadow hover:shadow-blue-600 text-white font-semibold py-2 px-4 rounded-lg 
            transition-all duration-200 dark:bg-blue-700 dark:hover:bg-blue-600
            ${authStatus ? 'cursor-pointer shadow-md hover:shadow-lg' : 'cursor-not-allowed opacity-75 hover:opacity-60'}
        `}
    >
        Read More
    </button>
    
    {!authStatus && (
        <span className="
            absolute left-1/2 -translate-x-1/2 bottom-full mb-3
            opacity-0 group-hover:opacity-100 invisible group-hover:visible
            bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-xl
            transition-all duration-200 ease-out whitespace-nowrap z-50
            transform group-hover:translate-y-0 translate-y-1
            backdrop-blur-sm
            after:content-[''] after:absolute after:top-full after:left-1/2 
            after:-translate-x-1/2 after:border-l-[6px] after:border-r-[6px] 
            after:border-t-[6px] after:border-l-transparent after:border-r-transparent 
            after:border-t-gray-800
        "
        style={{
            background: 'rgba(31, 41, 55, 0.95)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
        >
            🔒 Login first
        </span>
    )}
</div>
    </div>
)
}

export default PostCard
