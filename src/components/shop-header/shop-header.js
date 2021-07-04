import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './shop-header.css';

const ShopHeader = ({numItems, total}) => {
    return(
        <header className="shop-header">
            <Link className="logo" to="/">Store</Link>
            <Link className="shopping-cart" to="/card">
                <i className="cart-icon fa fa-shopping-cart"/>
                {numItems} items (${total})
            </Link>
        </header>
    )
}
const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return{
        numItems: cartItems.length,
        total: orderTotal
    }
}
export default connect(mapStateToProps)(ShopHeader);