import React, {useState} from "react";
import uniqid from "uniqid";

const ShopPreview = () => {

    const [items, setItems] = useState([
                {
                    name: `Founder's Edition`,
                    price: 79.99,
                    imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Faminoapps.com%2Fc%2Frpgscp%2Frecent%2F&psig=AOvVaw0zPab0mCUab-AVV7ghEl-3&ust=1647993493141000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODd9ai02PYCFQAAAAAdAAAAABAJ',
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


    return (
        <div className="preview">
            <div className="item-container">
                {items.map((item, index) => {
                    return (
                        <div className={`item-${index}`} key={item.id}>
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