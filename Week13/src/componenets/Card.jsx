import React from 'react'

const Card = (props) => {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-xl font-bold text-slate-800 mb-3">
                {props.title}
            </div>
            <div className="text-slate-600 leading-relaxed">
                {props.body}
            </div>
        </div>
    )
}

export default Card