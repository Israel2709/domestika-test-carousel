import React from 'react'

export default function Control(props) {
    let { type, handler, label } = props
    return (
        <div
            className={`slide-control ${type}`}
            onClick={handler}>
                {label || ''}
        </div>
    )
}