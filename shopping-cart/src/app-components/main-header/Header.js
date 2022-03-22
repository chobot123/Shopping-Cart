import React from "react";
import '../../styles/fonts.css'
import './nav.css'
import scpimg from './scpimg.jpg'

const Header = () => {

    const headerStyle = {
        // position: 'fixed',
        backgroundColor: 'black',
        color: 'white',
        margin: 0,
        fontFamily: 'ITC Bauhaus',
        width: '100%',
        position: 'fixed',
        zIndex: 1,
    }
    const titleStyle = {
        margin : 0,
        display: 'flex',
        alignItems: 'center',
    }

    const titleContainerStyle = {
        display: 'flex',
        padding: '0.2em',
        flexWrap: 'wrap',
        gap: '2em',
        position: 'relative',
    }

    const logoStyle = {
        height: '1.7em',
    }
 
    return (
        <div className="Header" style={headerStyle}>
            <div className="title-container" style={titleContainerStyle}>
                <h1 id="title" style={titleStyle}>
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