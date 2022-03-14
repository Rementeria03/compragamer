import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([{cantidad: 5}]);

    const cantidadCarrito = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
    };


    return(
        <CartContext.Provider
            value={{
                cart,
                setCart,
                cantidadCarrito
            }}
        >
            {children}
        </CartContext.Provider>
    );
};


