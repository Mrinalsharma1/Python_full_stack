import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='bg-dark text-white p-3' style={{ width: "200px", height: "100vh" }}>
            <h4>LOGO</h4>

            <ul className='nav flex-column mt-3'>
                <li className='nav-item'>
                    <Link className='nav-link text-white' to="/">Home</Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link text-white' to="/add">Add Student</Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link text-white' to="/edit/1">Edit Student</Link>
                </li>

            </ul>

        </div>
    )
}

export default Sidebar