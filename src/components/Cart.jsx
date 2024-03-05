import { useContext } from 'react';
import { ShopContext } from '../context';

export const Cart = () => {
    const { order, handleCartShow } = useContext(ShopContext);

    const quantity = order.length;

    return <div className="cart deep-purple darken-4 white-text" onClick={handleCartShow}>
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span className="cart__quantity deep-purple darken-4">{quantity}</span> : null}
    </div>
}