import React from 'react'
import GetAllCards from '../components/GetAllCards/GetAllCards'
import { Lock, UserPlus } from 'lucide-react';
import { useSelector } from 'react-redux'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const authStatus = useSelector(state=> state.isAuthenticated)
    const navigate = useNavigate()
  return (

    <div className="min-h-screen mt-10 px-2 md:px-4 lg:px-8">
    <div className="min-h-screen  px-0 md:px-8">
      {!authStatus ? (
        <div className="max-w-2xl mx-auto my-8 p-6">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center border border-blue-100 dark:border-gray-600 shadow-lg">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
            <Lock className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Main Text */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
          Login Required
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          Please login to read full posts and create your own content.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Join our community and start your blogging journey!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            onClick={() => navigate('/login')}
            className="bg-gradient-to-r cursor-pointer from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" />
            Login
          </button>
          
          <button 
            onClick={() => navigate('/signup')}
            className="border border-gray-300 cursor-pointer dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            Register
          </button>
        </div>
      </div>
    </div>
      ):''}
      <GetAllCards path={'home'}/>
    </div>
    </div>
  )

}

export default Home
