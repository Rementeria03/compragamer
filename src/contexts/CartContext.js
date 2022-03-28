import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);
    console.log(cart)

    const agregarAlCarrito = (item) => {
        setCart([...cart, item]);
    }

    const estaEnCarrito = (id) => {
        return cart.some(prod => prod.id === id);
    }

    const vaciarCarrito = () => {
        setCart([]);
    }

    const borrarDelCarrito = (id) => {
        setCart(cart.filter( prod => prod.id !== id));
    };

    const cantidadCarrito = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
    };

    const totalCarrito = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }


    return(
        <CartContext.Provider
            value={{
                cart,
                setCart,
                cantidadCarrito,
                agregarAlCarrito,
                borrarDelCarrito,
                estaEnCarrito,
                vaciarCarrito,
                totalCarrito
            }}
        >
            {children}
        </CartContext.Provider>
    );
};


