import React from "react";
import aboutBackground from "./media/lastLine.jpg"; //https://www.artstation.com/artwork/QzZex3

const About = () => {

    const aboutStyle = {
        background: `url(${aboutBackground})`,
        fontFamily: 'ITC Bauhaus',
        color: 'white',
        fontSize: '2.5em',
        backgroundSize: 'cover',
        backgroundPosition: 'inherit',
        padding: '15%'
    }

    const descriptionStyle = {
        textAlign: 'center',
        paddingLeft: '50%'
    }

    const textStyle = {
        fontSize: '0.4em',
        marginTop: '5%'
    }

    return (
        <div className='about' style={aboutStyle}>
            <div className="description" style={descriptionStyle}>
                <span id="hook">You are the Last Line.</span>
                <div id='text' style={textStyle}>Secure Contain Protect is a hardcore first-person PvE horror shooter
                                        set in the dark supernatural world of the SCP franchise. You are the last 
                                        line of defense for the horrors that lie waiting in the dark.
                </div>
            </div>
        </div>
    )
}

export default About;