import React from "react";
import '../../styles/fonts.css'
import './nav.css'
import scpimg from './scpimg.jpg'

const Header = () => {

    const headerStyle = {
        margin : 0,
        display: 'flex',
        alignItems: 'center',
    }

    const titleStyle = {
        margin: 0,
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        fontFamily: 'ITC Bauhaus',
        padding: '0.2em',
        flexWrap: 'wrap',
        gap: '2em',
    }

    const logoStyle = {
        height: '1.7em',
    }
 
    return (
        <div className="Header">
            <div className="title-container" style={titleStyle}>
                <h1 id="title" style={headerStyle}>
                    <img src={scpimg} alt="scp" style={logoStyle}/>
                    <span id="name">SCP</span>
                </h1>
                <div className='nav-container'>
                    <div className="left">
                        <nav>News</nav>
                        <nav>About</nav>
                        <nav>Shop</nav>
                    </div>
                    <div className="right">
                        <nav>Play Game</nav>
                        <nav>Buy Founder's Pack</nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;