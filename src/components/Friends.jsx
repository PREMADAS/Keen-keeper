import React, { use } from 'react';
import { Link } from 'react-router';

const friendsPromise = fetch('/friendsData.json').then(res => res.json())

const Friends = () => {
    const friends = use(friendsPromise)
    return (
        <div className='bg-gray-50 shadow-sm rounded-xl px-4 md:px-6'> {/* ✅ CHANGED: added px-4 md:px-6 */}
            <h2 className='mt-4 text-xl md:text-2xl font-semibold mx-auto'> {/* ✅ CHANGED: text-2xl → text-xl md:text-2xl */}
                Your Friends
            </h2>

            <div className='mx-auto my-6 md:my-10 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4'> {/* ✅ CHANGED: container → w-full, grid-cols-1 sm:grid-cols-2 → grid-cols-2, my-10 → my-6 md:my-10, gap-1 → gap-3 md:gap-4 */}

                {friends.map(friend => {
                    return <Link to={`/cardDetails/${friend.id}`} key={friend.id}>
                        {
                            <div className="card bg-white w-full shadow-sm"> {/* ✅ CHANGED: w-60 → w-full */}
                                <figure className="px-6 pt-6 md:px-10 md:pt-10"> {/* ✅ CHANGED: px-10 pt-10 → px-6 pt-6 md:px-10 md:pt-10 */}
                                    <img
                                        src={friend.picture}
                                        alt="image"
                                        className="rounded-full w-20 h-20 md:w-32 md:h-32 object-cover" /> {/* ✅ CHANGED: w-32 h-32 → w-20 h-20 md:w-32 md:h-32 */}
                                </figure>
                                <div className="card-body items-center text-center p-3 md:p-6"> {/* ✅ CHANGED: added p-3 md:p-6 */}
                                    <h2 className="card-title text-[#1f2937] mt-0 text-sm md:text-base">{friend.name}</h2> {/* ✅ CHANGED: added text-sm md:text-base */}
                                    <p className='text-[#64748b] text-[11px] md:text-[14px] mt-0'>{friend.days_since_contact}</p> {/* ✅ CHANGED: text-[14px] → text-[11px] md:text-[14px] */}
                                    <div className="flex flex-wrap gap-1 md:gap-2 justify-center mt-1"> {/* ✅ CHANGED: gap-2 → gap-1 md:gap-2 */}
                                        {friend.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="text-[10px] md:text-xs bg-green-100 text-green-700 px-2 md:px-3 py-1 rounded-full font-medium" /* ✅ CHANGED: text-xs → text-[10px] md:text-xs, px-3 → px-2 md:px-3 */
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className={`text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full font-bold uppercase ${friend.status.toLowerCase() === 'on track' ? 'bg-[#244d3f] text-white' : /* ✅ CHANGED: text-xs → text-[10px] md:text-xs, px-3 → px-2 md:px-3 */
                                        friend.status.toLowerCase() === 'overdue' ? 'bg-[#ef4444] text-white' :
                                            'bg-[#efad44] text-white'
                                        }`}>{friend.status}</p>
                                </div>
                            </div>
                        }
                    </Link>
                })
                }

            </div>
        </div>
    );
};

export default Friends;