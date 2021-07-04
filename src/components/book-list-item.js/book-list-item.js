import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, imgSrc } = book;
    return(
        <div className="book-container">
            <img className="book-img" alt="book" src={imgSrc}></img>
            <div className="book-desc">
                <p className="book-title">{title}</p>
                <p className="book-sign">{author}</p>
                <p className="book-sign">{price}$</p>
                <button onClick={onAddedToCart}
                className="btn btn-lg adding-btn">Add to cart</button>
            </div>           
        </div>
    )
}

export default BookListItem;