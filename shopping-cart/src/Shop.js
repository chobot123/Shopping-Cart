import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import uniqid from "uniqid";
import goldImg from "./shop-imgs/gold.jpg"
import standardImg from "./shop-imgs/standard.png"
import foundersImg from "./shop-imgs/founders.jpg"
import standAloneImg from "./shop-imgs/standAlone.jpg"
import darkestNight from "./shop-imgs/darkestNight.jpeg"
import './styles/fonts.css'
import './shop-styles/shopEffects.css'
import './app-components/main-header/nav.css'
import ShopModal from "./ShopModal";

const Shop = () => {

    const shopStyle = {
        display: 'flex',
        flexDirection: 'column',
    }

    const titleStyle = {
        display: 'flex',
        fontSize: '2.5em',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5em',
    }

    const headerStyle = {
        display: 'flex',
        color: 'white',
        backgroundColor: 'black',
        padding: '0.5em 10%',
        fontFamily: `'Special Elite', cursive`,
        fontSize: '2em',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

    const itemContainerStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
        gap: '1em',
        flexWrap: 'wrap',
        padding: '10%',
    }

    const navStyle = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '0.5em',
    }

    const imgStyle = {
        height: '20em',
        width: '20em',
    }

    const itemStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2em',
        border: '0.2em solid black',
        fontFamily: 'ITC Bauhaus',
        fontSize: '1.25em'
    }

    const buyButtonStyle = {
        margin: '0.5em',
        backgroundColor: 'black',
        padding: '0.25em',
        borderRadius: '10px',
        color: 'white',
    }

    //------------------------------------------//

    const [items, setItems] = useState([

                {
                    name: `Founder's Edition`,
                    price: 79.99,
                    imgUrl: foundersImg,
                    quantity: 0,
                    id: uniqid(),
                },
                {
                    name: `Gold Edition`,
                    price: 49.99,
                    imgUrl: goldImg,
                    quantity: 0,
                    id: uniqid(),
                },
                {
                    name: `Standard Edition`,
                    price: 29.99,
                    imgUrl: standardImg,
                    quantity: 0,
                    id: uniqid(),
                },
                {
                    name: `Stand Alone DLC`,
                    price: 19.99,
                    imgUrl: standAloneImg,
                    quantity: 0,
                    id: uniqid(),
                },
                {
                    name: `Darkest Night DLC`,
                    price: 29.99,
                    imgUrl: darkestNight,
                    quantity: 0,
                    id: uniqid(),
                },
                {
                    name: `Reckoning DLC`,
                    price: 29.99,
                    imgUrl: darkestNight,
                    quantity: 0,
                    id: uniqid(),
                },
                {
                    name: `Shadows Linger DLC`,
                    price: 29.99,
                    imgUrl: darkestNight,
                    quantity: 0,
                    id: uniqid(),
                },
                {
                    name: `Christmas Weapons Pack`,
                    price: 9.99,
                    imgUrl: darkestNight,
                    quantity: 0,
                    id: uniqid(),
                },
                {
                    name: `St. Patricks Revenge Pack`,
                    price: 29.99,
                    imgUrl: darkestNight,
                    quantity: 0,
                    id: uniqid(),
                },  
    ]);

    const [itemCount, setItemCount] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    const updateItemQuantity = (item, incrementer) => {
        (incrementer) ? item.quantity += 1 :
                        item.quantity -= 1;
    }

    const updateTotalCost = (item, incrementer) => {
        (incrementer) ? setTotalCost(Math.round((totalCost + item.price) * 100)/100) :
                        setTotalCost(Math.round((totalCost - item.price) * 100)/100);
    }
    
    const updateTotalItemCount = (incrementer) => {
        if(incrementer) {
            setItemCount(itemCount + 1);
        }
        else {setItemCount(itemCount - 1);}
    }

    const updateCart = (name, incrementer) => {
        const temp = [...items].map((item) => {
            if(item.name === name){
                updateItemQuantity(item, incrementer);
                updateTotalCost(item, incrementer);
                updateTotalItemCount(incrementer);
            }
            return item;
        });
        setItems(temp);
    }

    return (
        <div className="Shop" style={shopStyle}>
            <div className="header" style={headerStyle}>
                <span className="shop" style={titleStyle}>SCP Armory
                    <nav id="home">
                        <Link to="/" style={navStyle}>Home</Link>
                    </nav>
                    <nav id="contact">
                        <Link to="/" style={navStyle}>Contact</Link>
                    </nav>
                </span>
                <ShopModal items = {items}
                           updateCart = {updateCart}
                           itemCount = {itemCount}
                           totalCost = {totalCost}
                />
            </div>
            <div className="products">
            <div className="item-container" style={itemContainerStyle}>
                {items.map((item, index) => {
                    return (
                        <div className={`item ${index}`} key={item.id} style={itemStyle}>
                            <img src={item.imgUrl} alt="gold scp logo" style={imgStyle}></img>
                            <span id='item-name'>{item.name}</span>
                            <span id='item-price'>{item.price}</span>
                            <button id="buy-button" style={buyButtonStyle} onClick={() => updateCart(item.name, true)}>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default Shop;