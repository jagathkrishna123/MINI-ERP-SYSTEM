import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
      <h1 className="text-5xl font-bold mb-4">Welcome to Mini ERP</h1>
      <p className="text-xl mb-8 text-blue-100 max-w-md text-center">
        The ultimate solution for managing students, teachers, and courses efficiently.
      </p>
      <button
        onClick={() => navigate('/login')}
        className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
      >
        Go to Login
      </button>
    </div>
  )
}

export default Hero