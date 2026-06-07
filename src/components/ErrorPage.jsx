import React from 'react'
import { useNavigate } from 'react-router'

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-6xl font-bold text-[#244d3f]">404</h1>
            <p className="text-gray-500 mt-3">Page not found!</p>
            <button
                onClick={() => navigate('/')}
                className="mt-6 bg-[#244d3f] text-white px-6 py-2 rounded-xl">
                Go back to Home
            </button>
        </div>
    )
}

export default ErrorPage