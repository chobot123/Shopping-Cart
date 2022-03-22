import React from 'react';
import { Link } from 'react-router-dom';
import Header from './app-components/main-header/Header';
import Content from './app-components/main-content/Content';
import './styles/normalize.css'

const App = () => {

    const mainStyle = {
        backgroundColor: 'black',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    }
    return (
        <div className='main' style={mainStyle}>
            <Header />
            <Content />
            <div className='footer'>
                <div id='game-title'></div>
                <div className='publisher-info'>
                    <div className='legality'>
                        <div id='legal'></div>
                        <div id='privacy'></div>
                        <div id='cookies'></div>
                    </div>
                    <div id='copyright'></div>
                </div>
                <div className='social-media'>
                    <div id='rating'></div>
                    <div className='media-links'>
                        <div id='twitch'></div>
                        <div id='twitter'></div>
                        <div id='facebook'></div>
                        <div id='youtube'></div>
                        <div id='instagram'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;