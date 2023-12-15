import { useContext, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import { getFirestore, doc, updateDoc, collection, addDoc } from "firebase/firestore";

import { CartContext } from "../context/CartContext";

const clearBuyer = {name: "", phone: "", email: ""}

export const Cart = () => {
  const { clear, items, removeItem} = useContext(CartContext)
  const [buyer, setBuyer]= useState(clearBuyer)
  const  total = items.reduce((acc,currentValue)=> { 
    return acc + currentValue.price * currentValue.quantity},0)

  const handleSendOrder = () => {
    
  const order = {buyer, items, total}
  const db = getFirestore();
  const orderCollection = collection(db, "orders")

addDoc(orderCollection, order).then(({id}) => {
  if (id) {
    Toastify({

      text: "Su pedido: " + id + "ha sido realizado con éxito",
      duration: 2000
      }).showToast();
      clear();
      setBuyer(clearBuyer)
  }
})}

 const handleChange = (e) => {
  const { name, value} = e.target
  setBuyer(prev => {
    return {
      ...prev,
      [name]: value,
    };
  }) }

       return(
         <Container>
          {items.length===0?(
            <>
          <h2>Aún no tiene viajes agregados a su carrito</h2>
          <button className="button-cart"><Link to="/">Volver a la página principal</Link></button>
          </>)
          :(
            <>{items.map((item) => (
        <div key={item.id}><h1 className="title-detail">{item.title}</h1>
        <div className="text">
        <h3>Estadia: {item.description}</h3>
        <h4>U$$ {item.price}</h4>
        <h5>Pasajeros: {item.quantity}</h5>
        <img src={item.pictureUrl} width={300} alt={item.title} /></div>
        <br />
        <br/>
        <button className="button-cart" onClick={() => removeItem(item.id, item.title)}>Eliminar viaje</button>
        <hr />
        </div>
        ))}
        <h6 className="text"><b>Total: U$$ {total}</b></h6><br />
        <br />
        <div><button className="button-cart" onClick={clear}>Vaciar carrito</button></div>
        <hr />
        <br />
        <form className="text">
        <div className="input-group">
        <label>Nombre </label><input type="text" value={buyer.name} onChange={handleChange} required name="name"/>
        </div>
        <br />
        <div className="input-group">
        <label>Teléfono </label><input type="text" value={buyer.phone} onChange={handleChange} required name="phone" />
        </div>
        <br />
        <div className="input-group">
        <label>Email</label><input type="email" value={buyer.email} onChange={handleChange} required name="email" />
        </div>
        <br />
        <br />
        <div><button className="button-cart" onClick={handleSendOrder}>Terminar mi compra</button></div>
        </form>
        <hr />
        
        <br />
        </>
          )}
        </Container>
 )  
}