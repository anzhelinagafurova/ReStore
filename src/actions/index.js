
const booksLoaded = (newBooks) => {
    return {
        type: "FETCH_BOOKS_SUCCESS",
        payload: newBooks
    }
}
const booksRequested = () => {
    return {
        type: "FETCH_BOOKS_REQUEST",
    }
}
const booksError = (error) => {
    return {
        type: "FETCH_BOOKS_ERROR",
        payload: error
    }
}
const itemIncrease =  (bookId) => {
    return{
        type: "BOOK_ADDED_TO_CART",
        payload: bookId
    }
}
const itemDecrease = (bookId) => {
    return {
        type: "DO_ITEM_DECREASE",
        payload: bookId
    }
}
const itemDelete = (bookId) => {
    return {
        type: "DO_ITEM_DELETE",
        payload: bookId
    }
}
const bookAddedToCart = (bookId) => {
    return{
        type: "BOOK_ADDED_TO_CART",
        payload: bookId
    }
}
const fetchBooks = (bookstoreService) => () => (dispatch) => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksError(error)))
}
export {
    fetchBooks,
    itemIncrease,
    itemDecrease,
    itemDelete,
    bookAddedToCart
}