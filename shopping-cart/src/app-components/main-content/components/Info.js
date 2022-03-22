import React from "react";
import infoImg from "./media/info.jpg" //https://www.google.com/url?sa=i&url=https%3A%2F%2Fsteamlists.com%2Fscp-pandemic-dave%2F&psig=AOvVaw3Kd9Gfb4hnohyt6XQcElf0&ust=1647983416552000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMim2qeQ2PYCFQAAAAAdAAAAABAW
// import monster from "./media/monster.png"

const Info = () => {

    const infoStyle = {
        backgroundImage: `url(${infoImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '20% 0% 5%',
        flex: 1,
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


    return (
        <div className="info" style={infoStyle}>
            <div className="text-container" style={textContainerStyle}>
                <span id="title">Explore the Nightmares</span>
                <nav id="learn-more" style={buttonStyle}>Learn More</nav>
            </div>
        </div>
    )
}

export default Info;