import React from 'react'
import "./Header.css"
import { NavBar } from "../components"
import banner from '../assets/images/1.png'

const Header = () => {
    return (
        <div className='header-container'>
            <header>
                <div className="banner" style={{backgroundImage: `url(${banner})`}}></div>
                <NavBar /> 
            </header>
        </div>
    )
}

export default Header
