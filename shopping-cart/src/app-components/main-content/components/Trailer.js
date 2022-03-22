import React from "react";
import myTrailer from "./media/trailer-clip.mp4"

const Trailer = () => {

    const trailerStyle = {
        position: 'relative',
    }

    const videoStyle = {
        pointerEvents: 'none',
        objectFit: 'cover',
        width: '100%',
    }

    const overlayStyle = {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
        color: 'white',
        fontFamily: `'Special Elite', cursive`,
        fontSize: '6em',
        margin: '1em',
    }

    const buttonContainerStyle = {
        display: 'flex',
        fontSize: '0.4em',
        gap: '0.5em'
    }

    const downloadStyle = {
        backgroundColor: 'red',
        padding: '0.2em',
        borderRadius: '0.5em'
    }

    const watchStyle = {
        backgroundColor: 'white',
        padding: '0.2em',
        borderRadius: '0.5em',
        color: 'black'
    }    

    return (
        <div className='trailer' style={trailerStyle}>
            <video autoPlay muted loop id="clip" disablePictureInPicture
                controlsList="nodownload" style={videoStyle}>
                <source src={myTrailer} type="video/mp4"/>
            </video>
            <div className="trailer-overlay" style={overlayStyle}>
                <span id="game-name">Secure Contain Protect</span>
                <div className="buttons" style={buttonContainerStyle}>
                    <nav id="download" style={downloadStyle}>Download Demo</nav>
                    <nav id="watch-trailer" style={watchStyle}>Watch Trailer</nav>
                </div>
            </div>
        </div>
    )
}

export default Trailer;