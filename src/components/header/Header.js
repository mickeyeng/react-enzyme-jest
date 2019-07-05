import React from 'react'
import '../../styles/header/header.scss'
import logo from '../../assets/img/logo.png'

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </header>
    )
}


export default Header