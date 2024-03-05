import { useEffect, useContext } from 'react'

import { ShopContext } from '../context';

import { Preloader } from '../components/Preloader';
import { ItemsList } from '../components/ItemsList';
import { Cart } from '../components/Cart';
import { CartList } from '../components/CartList';
import { Alert } from '../components/Alert'

export const Shop = () => {
    const { setItems, loading, order, isCartShow, alertName } = useContext(ShopContext);

    useEffect(function getItems() {
        fetch('https://gist.githubusercontent.com/Theosdad/4c3363c4ec506ae9f3090178d5a51435/raw/360a00d4673a6bee4ad502e18e554692889f36f6/items.json')
            .then(response => response.json())
            .then((data) => {
                setItems(data.items);
            });
        //eslint-disable-next-line
    }, [])

    return (
        <main className="content">
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <ItemsList />}
            {
                isCartShow &&
                <CartList />
            }
            {
                alertName && <Alert />
            }
        </main>
    );
}
