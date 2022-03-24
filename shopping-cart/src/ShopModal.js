import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import './shop-styles/shopModalStyles.css'
import "./styles/fonts.css"
const ShopModal = (props) => {

    const cartButtonStyle = {
        borderRadius: '50%',
        textAlign: 'center',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    }

    const cartStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    }

    const itemCountStyle = {
        position: 'absolute',
        top: '60%',
        left: '10%',
        fontSize: '0.65em'
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const setModalOpenToTrue = () => {
        setModalIsOpen(true);
    }

    const setModalOpenToFalse = () => {
        setModalIsOpen(false);
    }

    const getFilteredItems = () => {
        return [...props.items].filter((item) => item.quantity > 0);
    }

    useEffect(() => {
        Modal.setAppElement('#root');
        Modal.defaultStyles.overlay.background = 'rgba(0,0,0,0.7)';
        Modal.defaultStyles.overlay.fontFamily = 'ITC Bauhaus';
    }, [])

    return (
        <div className="cart" style={cartStyle}>
            <div id="itemCount" style={itemCountStyle}>{props.itemCount}</div>
            <button id="cart-button" style={cartButtonStyle} onClick={setModalOpenToTrue}>
                <span id="cart-icon">&#128722;</span>
            </button>
            <Modal isOpen={modalIsOpen} className="modal" onRequestClose={(e) => {e.stopPropagation(); setModalIsOpen(false)}} 
            shouldCloseOnOverlayClick={true}>
                <div className="modal-header">
                    <span id="title">Checkout List</span>
                </div>
                <div className="modal-body">
                    {getFilteredItems().map((item, index) => {
                        return (
                            <div className={`item-${index}`} key={item.id}>
                                <img src={item.imgUrl} alt={item.name}></img>
                                <div className="item-info">
                                    <div className="info-wrapper">
                                        <span id="name">{item.name}</span>
                                        <span id="item-cost">{item.price}</span>
                                    </div>
                                    <div className="counter-container">
                                        <button id="decrement" onClick={() => props.updateCart(item.name, false)}>&#8722;</button>
                                        <div id="counter">{item.quantity}</div>
                                        <button id="increment" onClick={() => props.updateCart(item.name, true)}>&#43;</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="modal-footer">
                    <span id="total-cost">Total: ${props.totalCost}</span>
                    <button id="checkout">Checkout</button>
                    <button onClick={setModalOpenToFalse}>Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default ShopModal;