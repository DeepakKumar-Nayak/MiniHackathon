import React from 'react'
import { Link } from 'react-router'

function Nav() {
    return (
        <div className='navbar flex gap-5'>
            <Link className='bg-white text-black px-4 py-1 cursor-pointer rounded-xs' to="/">Home</Link>
            <Link className='bg-white text-black px-4 py-1 rounded-xs'  to="/create">
                <button className='cursor-pointer'>Create Task</button>
            </Link>
            <Link className='bg-white text-black px-4 py-1 cursor-pointer rounded-xs'  to="/completed">Completed Task</Link>
            <Link className='bg-white text-black px-4 py-1 cursor-pointer rounded-xs'  to="/active">Active Task</Link>
        </div>
    )
}

export default Nav
