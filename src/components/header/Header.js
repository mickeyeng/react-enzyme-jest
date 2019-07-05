import React from 'react'
import '../../styles/header/header.scss'
import logo from '../../assets/img/logo.png'

const Header = () => {
    return (
        <header data-test="header-component">
            <div className="wrapper">
                <div className="logo">
                    <img data-test="logo-img" src={logo} alt="logo" />
                </div>
            </div>
        </header>
    )
}


export default Header