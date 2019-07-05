import React from 'react'
import '../../styles/header/header.scss'
import logo from '../../assets/img/logo.png'

const Header = () => {
    return (
        <header className="header-component">
            <div className="wrapper">
                <div className="logo">
                    <img className="logo-img" src={logo} alt="logo" />
                </div>
            </div>
        </header>
    )
}


export default Header