import React from 'react'

const Card = (props) => {
    return (
        <>
            <div>{props.title}</div>
            <div>{props.body}</div>
        </>
    )
}

export default Card