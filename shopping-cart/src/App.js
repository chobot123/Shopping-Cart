import React from 'react';
import { Link } from 'react-router-dom';
import Header from './app-components/main-header/Header';
import './styles/normalize.css'

const App = () => {
    return (
        <div className='main'>
            <Header />
            <div className='content'>
                <div id='trailer'></div>
                <div id='news'></div>
                <div id='about'></div>
                <div id='shop'></div>
                <div id='newsletter'></div>
            </div>
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