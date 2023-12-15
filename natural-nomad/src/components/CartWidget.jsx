import { Link } from "react-router-dom"
import cart from "../assets/cart.svg"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const CartWidget = () => {
    const {items} = useContext(CartContext);
return (
<div><Link to="/cart" style={{textDecoration: "none"}}><img src={cart} alt="Viajes comprados"/>{items.length}</Link></div>)
}