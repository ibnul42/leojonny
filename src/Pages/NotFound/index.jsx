import React from 'react'
import { useLocation } from 'react-router-dom'

const NotFound = () => {
    const path = useLocation()
    return (
        <div>
            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-5">
                <p className='text-red-400 text-4xl font-bold'>Oops!</p>
                <p>Sorry, an unexpected error has occured.</p>
                <p>Cannot acces the route: "{path.pathname.toString().slice(1)}"</p>
            </div>
        </div>
    )
}

export default NotFound