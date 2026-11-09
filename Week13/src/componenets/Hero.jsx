import React from 'react'

const Hero = () => {
    return (
        <header className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 bg-slate-50">
            <div className="w-full md:w-1/2 flex flex-col items-start space-y-4 mt-8 md:mt-0">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Hiba Sahar</h1>
                <h2 className="text-2xl text-blue-600 font-semibold">Student</h2>
                <h4 className="text-lg text-slate-600 max-w-md">
                    I am a 3rd year BS Comp Sci student at Sukkur IBA University.
                </h4>
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                    Connect With Me
                </button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <img
                    src="https://media.istockphoto.com/id/1164538944/vector/woman-with-laptop-studying-or-working-concept-table-with-books-lamp-coffee-cup-vector.jpg?s=612x612&w=0&k=20&c=VhUj_AZoUnilUKdRessjsK6JQUjXCfum7RQyuzOr6_0="
                    alt="hero img"
                    className="max-w-xs md:max-w-md rounded-2xl shadow-lg"
                />
            </div>
        </header>
    )
}

export default Hero