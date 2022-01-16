import React from 'react'

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <img src='images/ml-logo.png'/>
            </div>
            <div className="nav-item">
                <a href="#">Home</a>
                <a href="#">About</a>
            </div>
        </nav>
    )
}

export default NavBar
