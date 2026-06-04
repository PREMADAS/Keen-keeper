import React, { use } from 'react';

const friendsPromise = fetch('/friendsData.json').then(res => res.json())

const Friends = () => {
    const friends = use(friendsPromise)
    return (
        <div>
            <h2 className='mt-4 text-2xl font-semibold mx-auto'>Your Friends</h2>

            <div className='mx-auto my-10  container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1'>


                {friends.map(friend => {
                    return <div>
                        {
                            <div className="card bg-base-100 w-60 shadow-sm">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={friend.picture}
                                        alt="image"
                                        className="rounded-full w-32 h-32 object-cover" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-[#1f2937] mt-0">{friend.name}</h2>
                                    <p className='text-[#64748b] text-[14px] mt-0'>{friend.days_since_contact}</p>
                                    <div className="flex flex-wrap gap-2 justify-center mt-1">
                                        {friend.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className={`text-xs px-3 py-1 rounded-full font-bold uppercase ${friend.status.toLowerCase() === 'on track' ? 'bg-[#244d3f] text-white' :
                                        friend.status.toLowerCase() === 'overdue' ? 'bg-[#ef4444] text-white' :
                                            'bg-[#efad44] text-white'
                                        }`}>{friend.status}</p>
                                </div>
                            </div>
                        }
                    </div>
                })
                }

            </div>
        </div>
    );
};

export default Friends;