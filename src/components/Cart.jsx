function Cart(props) {
    const { quantity = 0, handleCartShow = Function.prototype } = props;
    return <div className="cart deep-purple darken-4 white-text" onClick={handleCartShow}>
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span className="cart__quantity deep-purple darken-4">{quantity}</span> : null}
    </div>
}

export { Cart }