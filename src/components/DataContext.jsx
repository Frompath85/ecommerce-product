//creer le contexte
//il faut lui indiquer la forme des données qui dois porter
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const [panier, updatePanier] = useState(0);

    return (
        <CartContext.Provider value={{panier, updatePanier} }>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext);
}