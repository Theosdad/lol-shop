import { useState, useEffect } from 'react'

import { Preloader } from '../components/Preloader';
import { ItemsList } from '../components/ItemsList';
import { Cart } from '../components/Cart';
import { CartList } from '../components/CartList';
import { Alert } from '../components/Alert'

function Shop() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartShow, setCartShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToCart = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                } else {
                    return orderItem;
                }
            })

            setOrder(newOrder);
        }
        setAlertName(item.name);
    };

    const removeFromCart = (itemId) => {
        const newOrder = order.filter(el => el.id !== itemId);
        setOrder(newOrder);
    }

    const incQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            } else {
                return el;
            }
        })
        setOrder(newOrder);
    }

    const decQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return el;
            }
        })
        setOrder(newOrder);
    }

    const handleCartShow = () => {
        setCartShow(!isCartShow);
    }

    const closeAlert = () => {
        setAlertName('');
    }

    useEffect(function getItems() {
        fetch('https://gist.githubusercontent.com/Theosdad/4c3363c4ec506ae9f3090178d5a51435/raw/360a00d4673a6bee4ad502e18e554692889f36f6/items.json')
            .then(response => response.json())
            .then((data) => {
                data && setItems(data.items);
                setLoading(false);
            })
    }, [])

    return (
        <main className="content">
            <Cart quantity={order.length} handleCartShow={handleCartShow} />
            {loading ? <Preloader /> : <ItemsList items={items} addToCart={addToCart} />}
            {
                isCartShow &&
                <CartList
                    order={order}
                    handleCartShow={handleCartShow}
                    removeFromCart={removeFromCart}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                />
            }
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert} />
            }
        </main>
    );
}

export { Shop };