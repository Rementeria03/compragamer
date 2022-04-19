import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ItemCartTable } from "../ItemCartTable/ItemCartTable";

export const ItemListCartTable = () => {
  const { cart } = useContext(CartContext);
    return(
        <>
            {cart.map((prod) => {
                return <ItemCartTable key={prod.id} {...prod} />
            })}
        </>
    )
};
