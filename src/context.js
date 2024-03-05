import { createContext, useReducer } from 'react';
import { reducer } from './reducer'

export const ShopContext = createContext();

const initialState = {
    items: [],
    loading: true,
    order: [],
    isCartShow: false,
    alertName: '',
    selectedTag: null,
}

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' });
    };

    value.addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    value.removeFromCart = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId } });
    };

    value.incQuantity = (itemId) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: itemId } });
    };

    value.decQuantity = (itemId) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: itemId } });
    };

    value.handleCartShow = () => {
        dispatch({ type: 'TOGGLE_CART' });
    };

    value.handleTagSelection = (tag) => {
        dispatch({ type: 'SET_TAG', payload: tag });
    };

    value.resetFilter = () => {
        dispatch({ type: 'RESET_TAG' });
    }

    value.setItems = (data) => {
        dispatch({ type: 'SET_ITEMS', payload: data });
    };

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}