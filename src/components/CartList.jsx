import { CartItem } from './CartItem';

function CartList(props) {
    const { order = [],
        handleCartShow = Function.prototype,
        removeFromCart = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    const overallPrice = order.reduce((sum, el) => {
        return sum + el.price.total * el.quantity
    }, 0)
    return (
        <>
            <div className='cart-overlay' onClick={handleCartShow}>
            </div>
            <ul className="collection cart-list">
                <li className="collection-item active">Your Order
                    <i className='material-icons cart-close' onClick={handleCartShow}>close</i>
                </li>
                {
                    order.length ? (
                        order.map((item) =>
                            <CartItem
                                key={item.id}
                                {...item}
                                removeFromCart={removeFromCart}
                                incQuantity={incQuantity}
                                decQuantity={decQuantity}
                            />)
                    ) : (
                        <li className="collection-item">Your Cart is Empty</li>
                    )
                }
                <li className="collection-item active">Overall Price: {overallPrice} ₴</li>
            </ul>
        </>
    );
}

export { CartList }