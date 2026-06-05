import React from 'react'
import { useLoaderData, useParams } from 'react-router';
import Footer from './Footer';

const CardDetails = () => {

    const { id } = useParams();


    const cards = useLoaderData();


    const expectedFriends = cards.find(card => card.id == id);
    console.log(expectedFriends, "expectedFriends");
    return (
        <div>
            <div className="grid grid-cols-[1fr_2fr] gap-4 p-4 bg-gray-50 ">

                {/* Left Column */}
                <div className="flex flex-col gap-3">

                    {/* Profile Card */}
                    <div className=" bg-white rounded-xl p-5 shadow-sm text-center">
                        <img src={expectedFriends.picture} alt="image"
                            className="w-20 h-20 rounded-full object-cover mx-auto mb-3" />
                        <p className="font-medium text-base mb-2">{expectedFriends.name}</p>
                        <span className="bg-red-100 text-red-600 text-xs font-medium px-3 py-1 rounded-2xl uppercase">{expectedFriends.status}</span>
                        <br />
                        <div className="flex flex-wrap gap-2 justify-center mt-1">
                            {expectedFriends.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs bg-green-100 text-green-700 px-3 py-1 mt-2 rounded-full font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-xs text-[#64748b] mt-3">{expectedFriends.bio}</p>
                        <p className="text-xs text-gray-400 mt-1">{expectedFriends.email}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                        <button className="w-full px-4 py-3 text-[16px] text-center text-[#1f2937] bg-white rounded-xl p-5 shadow-sm"><i className='fa-solid fa-bell'></i> {expectedFriends.snooze}</button>
                        <button className="w-full px-4 py-3 text-[16px] text-center text-[#1f2937] bg-white rounded-xl p-5 shadow-sm"><i className='fa-solid fa-box'></i> Archive</button>
                        <button className="w-full px-4 py-3 text-[16px] text-center text-[#1f2937] bg-white rounded-xl p-5 shadow-sm"><i className='fa-solid fa-trash'></i> Delete</button>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-3">

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 text-[#244d3f] ">
                        {[
                            { label: "Days Since Contact", value: expectedFriends.day },
                            { label: "Goal (Days)", value: expectedFriends.goal },
                            { label: "Next Due", value: expectedFriends.next_due_date },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-white shadow-sm rounded-xl p-4 text-center">
                                <p className="text-2xl font-medium">{stat.value}</p>
                                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Relationship Goal */}
                    <div className="bg-white shadow-sm rounded-xl p-4">
                        <div className="flex justify-between items-center mb-2">
                            <p className=" text-[#64748b] font-semibold">Relationship Goal</p>
                            <button className="text-sm bg-white shadow-sm px-3 py-1 rounded-md cursor-pointer">Edit</button>
                        </div>
                        <p className="text-sm text-gray-500">Connect every <strong>{expectedFriends.goal}</strong> days</p>
                    </div>

                    {/* Quick Check-In */}
                    <div className="bg-white shadow-sm rounded-xl p-4">
                        <p className="text-[#64748b] font-semibold mb-3">Quick Check-In</p>
                        <div className="grid grid-cols-3 gap-3 text-[#64748b]">
                            {[
                                { label: "Call", icon: <i className='fa-solid fa-phone'></i> },
                                { label: "Text", icon: <i className='fa-solid fa-message'></i> },
                                { label: "Video", icon: <i className='fa-solid fa-video'></i> },
                            ].map((item) => (
                                <button key={item.label} className=" rounded-xl shadow-sm py-4 flex flex-col items-center gap-2 hover:bg-gray-50">
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="text-sm">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                </div>


            </div>
            <Footer />
        </div>

    )
}

export default CardDetails;