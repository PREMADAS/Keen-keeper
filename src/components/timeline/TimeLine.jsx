import React from 'react'
import Footer from '../Footer';

const iconMap = {
    Call: <i className="fa-solid fa-phone text-red-500"></i>,
    Text: <i className="fa-regular fa-message text-blue-500"></i>,
    Video: <i className="fa-solid fa-video text-gray-500"></i>,
}

const TimeLine = () => {
    const interactions = JSON.parse(localStorage.getItem('interactions') || '[]');

    return (
        <div className=" mx-auto px-4 py-6">
            <h2 className="text-2xl font-bold mb-4">Timeline</h2>

            <div className="flex flex-col gap-2 mb-10">
                {interactions.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">
                            {iconMap[item.type]}
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[#1f2937]">
                                {item.type} <span className="font-normal">with {item.with}</span>
                            </p>
                            <p className="text-xs text-gray-400">{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    )
}

export default TimeLine;