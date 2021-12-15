import React from 'react'

import './Header.css'

export default function Header({ black }) {
    return (
        <header className={`header ${black ? 'black' : ''}`}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png' alt='logo'/>
                </a>
            </div>
            <div className='header--user'>
                <a href='/'>
                    <img src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png' alt='avatar'/>
                </a>
            </div>
        </header>
    )
}
