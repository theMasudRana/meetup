import React from 'react'
import { Link } from 'react-router-dom'

function MainNavigation() {
    return (
        <header className='flex align-middle justify-around bg-white py-6'>
            <div className="logo"><Link to='/' >Site Logo</Link></div>
            <nav>
                <ul className='flex gap-8'>
                    <li>
                        <Link to='/' >All Meetup</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup' >Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites' >Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation