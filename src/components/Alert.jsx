import { useEffect, useContext } from 'react'
import { ShopContext } from '../context';

export const Alert = () => {
    const { alertName, closeAlert } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 1500);

        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line
    }, [alertName])

    return <div id="toast-container">
        <div className="toast">
            {alertName} has added to cart
        </div>
    </div>
}
