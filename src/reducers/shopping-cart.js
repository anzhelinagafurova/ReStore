const updateShoppingCart = (state, action) => {
    if (state === undefined){
        return {
            cartItems: [],
            orderTotal: 0
        }
    }
    switch (action.type){
        case "DO_ITEM_DECREASE":
            return updateOrder(action.payload, state, -1)
                    
        case "DO_ITEM_DELETE":
            const bookInCart = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
            return updateOrder(action.payload, state, -bookInCart.count)

        case "BOOK_ADDED_TO_CART": 
            return updateOrder(action.payload, state, 1)
               
        default:
            return state.shoppingCart;
    }
}
const updateCartItems = (cartItems, item, index) => {
    if(item.count === 0){
        return [
            ...cartItems.slice(0, index),
            ...cartItems.slice(index + 1)
        ]
    }
    if(index === -1){
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0, index),
        item,
        ...cartItems.slice(index + 1)
    ]
}
const updateCartItem = (item = {}, book, quantity) => {
    const {id = book.id, count = 0, title = book.title, total = 0} = item;
     return {
        id,
        count: count + quantity,
        title,
        total: total + quantity * book.price
    }
}
const updateOrder = (bookId, state, quantity = null) => {
    const {bookList: {books}, shoppingCart: {cartItems} } = state;
    const book = books.find(({id}) => id === bookId);
    const bookInCart = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[bookInCart];
    const newItem = updateCartItem(item, book, quantity);
    
    const cartItemsArray = updateCartItems(cartItems, newItem, bookInCart);
    const totalSum = cartItemsArray.reduce((sum, item) => {
        return sum + item.total;
    }, 0)
    return{
        orderTotal: totalSum,
        cartItems: cartItemsArray
    } 
}
export default updateShoppingCart;