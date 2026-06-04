import React from 'react'

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content text-center mt-10">
                <div className="">
                    <h1 className="text-4xl text-[#1f2937] font-bold">Friends to keep close in your life</h1>
                    <p className="py-6 text-[#64748b] text-[12px]">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                        relationships that matter most.
                    </p>
                    <button className="btn btn-primary bg-[#244d3f] px-2">
                        <i className='fa-solid fa-plus'></i>
                        Add a Friend</button>


                    <div className="w-full p-4 mt-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col justify-center items-center min-h-[130px]">
                                <h2 className="text-3xl font-bold text-[#244d3f] mb-1">10</h2>
                                <p className="text-sm font-medium text-slate-500 text-center">Total Friends</p>
                            </div>

                            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col justify-center items-center min-h-[130px]">
                                <h2 className="text-3xl font-bold text-[#244d3f] mb-1">3</h2>
                                <p className="text-sm font-medium text-slate-500 text-center">On Track</p>
                            </div>

                            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col justify-center items-center min-h-[130px]">
                                <h2 className="text-3xl font-bold text-[#244d3f] mb-1">6</h2>
                                <p className="text-sm font-medium text-slate-500 text-center">Need Attention</p>
                            </div>

                            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col justify-center items-center min-h-[130px]">
                                <h2 className="text-3xl font-bold text-[#244d3f] mb-1">12</h2>
                                <p className="text-sm font-medium text-slate-500 text-center">Interactions This Month</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>




    )
}

export default Banner;