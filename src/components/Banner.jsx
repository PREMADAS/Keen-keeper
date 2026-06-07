import React from 'react'

const Banner = () => {
    return (
        <div className="hero bg-gray-100">
            <div className="hero-content text-center mt-6 md:mt-10 px-4 md:px-8 w-full"> {/* ✅ CHANGED: mt-10 → mt-6 md:mt-10, added px-4 md:px-8, w-full */}
                <div className="w-full">
                    <h1 className="text-2xl md:text-4xl text-[#1f2937] font-bold"> {/* ✅ CHANGED: text-4xl → text-2xl md:text-4xl */}
                        Friends to keep close in your life
                    </h1>
                    <p className="py-4 md:py-6 text-[#64748b] text-[12px]"> {/* ✅ CHANGED: py-6 → py-4 md:py-6 */}
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the{' '}
                        <br className="hidden sm:block" /> {/* ✅ CHANGED: br → hidden on mobile */}
                        relationships that matter most.
                    </p>
                    <button className="btn bg-[#244d3f] text-white border-none px-2">
                        <i className='fa-solid fa-plus'></i>
                        Add a Friend
                    </button>

                    <div className="w-full p-2 md:p-4 mt-3"> {/* ✅ CHANGED: p-4 → p-2 md:p-4 */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5"> {/* ✅ CHANGED: grid-cols-1 sm:grid-cols-2 → grid-cols-2, gap-5 → gap-3 md:gap-5 */}

                            <div className="bg-white border border-gray-100 rounded-xl p-4 md:p-6 shadow-sm flex flex-col justify-center items-center min-h-[100px] md:min-h-[130px]"> {/* ✅ CHANGED: p-6 → p-4 md:p-6, min-h-[130px] → min-h-[100px] md:min-h-[130px] */}
                                <h2 className="text-2xl md:text-3xl font-bold text-[#244d3f] mb-1">10</h2> {/* ✅ CHANGED: text-3xl → text-2xl md:text-3xl */}
                                <p className="text-xs md:text-sm font-medium text-slate-500 text-center">Total Friends</p> {/* ✅ CHANGED: text-sm → text-xs md:text-sm */}
                            </div>

                            <div className="bg-white border border-gray-100 rounded-xl p-4 md:p-6 shadow-sm flex flex-col justify-center items-center min-h-[100px] md:min-h-[130px]"> {/* ✅ CHANGED */}
                                <h2 className="text-2xl md:text-3xl font-bold text-[#244d3f] mb-1">3</h2> {/* ✅ CHANGED */}
                                <p className="text-xs md:text-sm font-medium text-slate-500 text-center">On Track</p> {/* ✅ CHANGED */}
                            </div>

                            <div className="bg-white border border-gray-100 rounded-xl p-4 md:p-6 shadow-sm flex flex-col justify-center items-center min-h-[100px] md:min-h-[130px]"> {/* ✅ CHANGED */}
                                <h2 className="text-2xl md:text-3xl font-bold text-[#244d3f] mb-1">6</h2> {/* ✅ CHANGED */}
                                <p className="text-xs md:text-sm font-medium text-slate-500 text-center">Need Attention</p> {/* ✅ CHANGED */}
                            </div>

                            <div className="bg-white border border-gray-100 rounded-xl p-4 md:p-6 shadow-sm flex flex-col justify-center items-center min-h-[100px] md:min-h-[130px]"> {/* ✅ CHANGED */}
                                <h2 className="text-2xl md:text-3xl font-bold text-[#244d3f] mb-1">12</h2> {/* ✅ CHANGED */}
                                <p className="text-xs md:text-sm font-medium text-slate-500 text-center">Interactions This Month</p> {/* ✅ CHANGED */}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner;