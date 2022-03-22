import React from "react";
import '../../styles/fonts.css'
import Trailer from "./components/Trailer";
import About from "./components/About";
import Catalog from "./components/Catalog";
import Info from "./components/Info";
import ShopPreview from "./components/ShopPreview";

const Content = () => {

    const contentStyle = {
        zIndex: 0,
    }

    const infoContainerStyle = {
        display: 'flex',
        color: 'white',
        fontFamily: 'ITC Bauhaus',
        fontSize: '3em'
    }

    return (
        <div className='content' style={contentStyle}>
            <Trailer />
            <About />
            <div className="info-container" style={infoContainerStyle}>
                <Catalog />
                <Info />
            </div>
            <ShopPreview />
        </div>
    )
}

export default Content;