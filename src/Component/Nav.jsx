import React from 'react'
import { Link } from 'react-router'

function Nav() {
    return (
        <div className='navbar flex gap-5'>
            <Link to="/">Home</Link>
            <Link to="/create">
                <button>Create Task</button>
            </Link>
            <Link to="/completed">Completed Task</Link>
            <Link to="/active">Active Task</Link>
        </div>
    )
}

export default Nav
