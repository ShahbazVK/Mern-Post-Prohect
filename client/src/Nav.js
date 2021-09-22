import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
export default function Nav() {
    return (
        <div>
            <nav className="nav nav-pills flex-column flex-sm-row">
            <NavLink activeClassName='active_class' className="flex-sm-fill text-sm-center nav-link"  to='/'>Home</NavLink>
            <NavLink activeClassName='active_class' className="flex-sm-fill text-sm-center nav-link" to='/create'>Create</NavLink>
            </nav>
        </div>
    )
}
