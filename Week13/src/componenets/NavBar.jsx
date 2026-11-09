import React from 'react'

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white shadow-md">
            <div className="flex-shrink-0">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Rwj-0BUP3iJo9zFkJ_JLUXLmwBNXtpHwnu_UlglJNQ&s=10"
                    alt="Logo"
                    className="h-12 w-12 rounded-full object-cover border-2 border-slate-700"
                />
            </div>
            <div>
                <ul className="flex space-x-6 text-sm font-medium">
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">About</li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">Portfolio</li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar