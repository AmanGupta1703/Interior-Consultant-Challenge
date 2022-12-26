import React from 'react'

export default function Navbar() {
    
    const [showMenuBar, setShowMenuBar] = React.useState(false)
    
    function showNavbar() {
        setShowMenuBar(prevShowMenuBar => !prevShowMenuBar)
        document.getElementById('header-navbar').style.display = 'block'
        document.getElementById('card').style.zIndex = '-1'
    }
    
    const style = {
        display: showMenuBar ? 'block' : 'none'
    }
    
    return (
        <header className="header">
            <span className="header-title">This Interior</span>
            <div className="hamburger" onClick={showNavbar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav style={  style } className="header-navbar" id="header-navbar">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Collection</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}