import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-8 px-6 mt-auto">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-sm">© {new Date().getFullYear()} Hiba Sahar. All rights reserved.</p>
                <div className="flex space-x-6 text-sm">
                    <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="/contact" className="hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer