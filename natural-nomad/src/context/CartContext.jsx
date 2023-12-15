import { createContext, useState } from "react";

import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])
    
    const clear = () => setItems ([])

    const addItem = (item, quantity) => {
        const isInCart = items.some( i => i.id === item.id)
        if (isInCart) { const updateCart = items.map ( (i) => {
           if (i.id === item.id) {return {...i, quantity: i.quantity + quantity};
        } 
        else {
            return i;
        }}) 
        setItems(updateCart);
    } else {
        setItems((prev) => {
            return[...prev, {...item, quantity}];
        })
    }
    Toastify({

        text: `Viaje a ${item.title} se ha añadido a su compra`,
        
        duration: 2000
        
        }).showToast();
    }

    const removeItem = (id, title) => {
        const eraseItem = items.filter ((item) => item.id !== id);
        setItems(eraseItem);

        Toastify({

            text: `Viaje a ${title} se ha eliminado de su compra`,
            
            duration: 2000
            
            }).showToast();
    };
      
    return <CartContext.Provider value={{addItem, clear, items, removeItem}}>{children}</CartContext.Provider>
 }