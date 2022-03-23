import React from 'react';
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
        </div>
    )
}

export default App;