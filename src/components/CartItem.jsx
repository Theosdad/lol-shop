function CartItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromCart = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props
    return <li className="collection-item">
        <span>{name}</span>
        <span>
            <i className="material-icons cart-quantity" onClick={() => decQuantity(id)}>remove</i>
            x {quantity}
            <i className="material-icons cart-quantity" onClick={() => incQuantity(id)}>add</i>
        </span> = {price.total * quantity}&nbsp;₴
        <span className="secondary-content">
            <i className="material-icons cart-delete" onClick={() => removeFromCart(id)}>clear</i>
        </span>
    </li>
}

export { CartItem };