import { useState } from "react";
import { Link } from "react-router-dom";

export const ItemCount = ({stock, initial, addItem}) => {
    const [count, setCount] = useState(initial)

    const handleAdd = () => {
        addItem(count)
        setCount(initial)
    }
   
    const handleReduce = () =>{ 
    if (count > initial ) setCount((c) => c - 1)}
    
    const handleIncrease = () => {
    if (stock > count ) setCount((c) => c + 1)  
    }

    return(
        <>
        <br />
        <div>
        <button onClick={handleReduce}>-</button>
        <mark>{count}</mark>
        <button onClick={handleIncrease}>+</button></div>
        <br />
        <div><button className="button-cart" onClick={handleAdd}>Agregar viaje</button></div>
        <br />
        <br />
        <div><button className="button-detail"><Link to='/'>Volver al menú principal</Link></button></div><div><Link to="/cart">
         <br />
        <button className="button-detail"> Finalizar compra</button></Link></div>
        </>
    )
}