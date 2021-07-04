import React from 'react';
import { connect } from 'react-redux';
import {itemIncrease, itemDecrease, itemDelete} from '../../actions';
import './shopping-cart-table.css';

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item, index) => {
        const {id, title, count, total} = item;
        return(
            <tr key={id}>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total}$</td>
                <td>                    
                    <button onClick={() => onIncrease(id)}
                    className="btn btn-outline-success btn-small">
                        <i className="fa fa-plus-circle"/>
                    </button>
                    <button onClick={() => onDecrease(id)}
                    className="btn btn-outline-warning btn-small">
                        <i className="fa fa-minus-circle"/>
                    </button>
                    <button onClick={() => onDelete(id)}
                    className="btn btn-outline-danger btn-small">
                        <i className="fa fa-trash-o"/>
                    </button>
                </td>
            </tr>
        )
    }
    if(total > 0) {
        return(       
            <div className="shopping-cart-table">
                <h2>Your Order</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Count</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {
                            items.map(renderRow)
                        }
                    </tbody>
                </table>
    
                <div className="total">Total: {total}$</div>
            </div>
        )   
    }
    else {
        return <div className="message">Nothing is here. Add some books :)</div>
    }
}
const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return {
        items: cartItems,
        total: orderTotal,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(itemIncrease(id)),
        onDecrease: (id) => dispatch(itemDecrease(id)),
        onDelete: (id) => dispatch(itemDelete(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);