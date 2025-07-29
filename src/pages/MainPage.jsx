import React from 'react'
import { Sparkles, ArrowRight, Heart, Star, Zap, Globe } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <Sparkles className="w-4 h-4 text-white opacity-30" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Hero section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8 animate-bounce">
            <Zap className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-6 animate-pulse">
            Welcome to the Future
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of digital innovation. Where creativity meets technology, and dreams become reality.
          </p>
          
          <button onClick={()=> navigate('home')} className="cursor-pointer group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Get Started
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Explore Features</h3>
            <p className="text-gray-300 leading-relaxed">
              Discover powerful tools and capabilities designed to enhance your experience and unlock new possibilities.
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Premium Quality</h3>
            <p className="text-gray-300 leading-relaxed">
              Experience excellence in every detail with our carefully crafted interface and seamless user experience.
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300 leading-relaxed">
              Our dedicated team is always here to help you succeed. Get assistance whenever you need it.
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-gray-300 text-lg mb-6">
              Join thousands of users who have already discovered the power of our platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30">
                ✨ Innovative Design
              </span>
              <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30">
                🚀 Lightning Fast
              </span>
              <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm border border-pink-500/30">
                💎 Premium Quality
              </span>
              <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/30">
                🛡️ Secure & Reliable
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MainPage