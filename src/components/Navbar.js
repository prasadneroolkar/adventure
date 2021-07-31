import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [nvbar, setnav] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobilemenu = () => {
        setClick(false);

    }

    const changeBackhround = () => {
        console.log(window.scrollY);

          if(window.scrollY >= 80){
              setnav(true);
          }
          else{
              setnav(false);
          }
    }

    window.addEventListener('scroll',changeBackhround);

    return (
        <div>
            <nav className= {nvbar? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    <NavLink to="/" className="navbar-logo" onClick={closeMobilemenu}>
                        TREK<img src="/new-logo.png"/>
                    </NavLink>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-links" onClick={closeMobilemenu}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className="nav-links" onClick={closeMobilemenu}>Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-links" onClick={closeMobilemenu}>Products</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
