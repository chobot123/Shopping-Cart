import React from "react";
import catalogImg from "./media/armory.jpeg" //https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fcollections%2F4622982%2Farmy&psig=AOvVaw1PbwL5fDDHg2FXxqR2jdCG&ust=1647983547383000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCr9qGP2PYCFQAAAAAdAAAAABAD
import './flicker.css'

const Catalog = () => {


    const catalogStyle = {
        backgroundImage: `url(${catalogImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '20% 0% 5%',
        flex: 1,
        animation: 'flicker 2s linear reverse infinite',
    }

    const textContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.4em',
    }

    const buttonStyle = {
        backgroundColor: 'red',
        fontSize: '0.5em',
        padding: '0.2em',
        borderRadius: '0.5em',
        fontFamily: `'Special Elite', cursive`,
    }

    const stopFlickerEffect = (e) => {
        e.target.style.animation = 'none';
    }

    const startFlickerEffect = (e) => {
        e.target.style.animation = 'flicker 2s linear reverse infinite';
    }

    return( 
        <div className="catalog" style={catalogStyle} 
                                onMouseOver={(e) => stopFlickerEffect(e)}
                                onMouseLeave={(e)=> startFlickerEffect(e)}>

            <div className="text-container" style={textContainerStyle}>
                <span id="title">Enter the Armory</span>
                <nav id="learn-more" style={buttonStyle}>Learn More</nav>
            </div>
        </div>
    )
}

export default Catalog;