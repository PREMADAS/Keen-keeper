import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#244d3f] text-gray-100 py-10 px-6">
                <div className="max-w-6xl mx-auto space-y-8">

                    <div>
                        <h2 className="text-3xl font-bold text-center">KeenKeeper</h2>
                        <p className="mt-2 text-gray-300 text-[13px]  text-center">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold text-center mb-4">Social Links</h3>
                        <div className="flex space-x-4 justify-center ">
                            <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full">

                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C17.9 2.5 12 2.5 12 2.5h-.1s-5.9 0-8.6.3c-.4.1-1.3.1-2.1 1-.6.7-.8 2.4-.8 2.4S0 8.1 0 10v4c0 1.9.2 3.8.2 3.8s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.6.3 7.6.3s5.9 0 8.6-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.2-1.9.2-3.8v-4c0-1.9-.2-3.8-.2-3.8zM9.6 14.5V9.5l6.4 2.5-6.4 2.5z" /></svg>
                            </a>
                            <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full">

                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7h-2.6v-2.9h2.6V9.8c0-2.6 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6v2h2.7l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z" /></svg>
                            </a>
                            <a href="#" className="bg-gray-800 hover:bg-blue-400 p-3 rounded-full">

                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.5 4.5c-.8.4-1.6.7-2.5.8.9-.6 1.6-1.4 1.9-2.5-.9.6-1.9 1-3 1.2-1.8-1.9-4.8-1.9-6.7 0-1.8 1.8-1.8 4.8 0 6.6-3.9-.2-7.4-2.1-9.7-5.1-1.3 2.3-.6 5.2 1.6 6.7-.7 0-1.4-.2-2-.5v.1c0 2.4 1.7 4.4 4 4.9-.7.2-1.4.2-2.1.1.6 1.9 2.4 3.3 4.5 3.3-1.7 1.3-3.8 2-6 2-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.1 7.4 2.1 8.9 0 13.8-7.4 13.8-13.8v-.6c.9-.6 1.6-1.4 2.2-2.3z" /></svg>
                            </a>
                        </div>
                    </div>


                    <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                        <div class="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Terms of Service</a>
                            <a href="#" className="hover:text-white">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer;