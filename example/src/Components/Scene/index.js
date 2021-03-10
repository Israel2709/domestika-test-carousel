import React from 'react'

export default function Scene(props) {
    const { width, sceneSrc, lazy } = props
    return (
        <div
            className='scene'
            style={{ width }}
        >
            <img src={sceneSrc} alt="" loading = { lazy ? 'lazy' : 'eager'} />
        </div>
    )
}