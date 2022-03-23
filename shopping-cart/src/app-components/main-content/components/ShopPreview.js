import React, {useState} from "react";
import uniqid from "uniqid";

const ShopPreview = () => {

    const [items, setItems] = useState([
                {
                    name: `Founder's Edition`,
                    price: 79.99,
                    id: uniqid(),
                },
                {
                    name: `Gold Edition`,
                    price: 49.99,
                    id: uniqid(),
                },
                {
                    name: `Standard Edition`,
                    price: 29.99,
                    id: uniqid(),
                },
    ]);

    const itemContainerStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }

    // const itemStyle = {
        
    // }

    return (
        <div className="preview">
            <div className="item-container" style={itemContainerStyle}>
                {items.map((item, index) => {
                    return (
                        <div className={`item-${index}`} key={item.id} >
                            <img src={item.imgUrl} alt="gold scp logo"></img>
                            <span id='item-name'>{item.name}</span>
                            <span id='item-price'>{item.price}</span>
                            <nav>Buy Now</nav>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ShopPreview;