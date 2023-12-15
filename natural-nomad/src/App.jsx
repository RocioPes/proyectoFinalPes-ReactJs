import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import { NavBar } from './components/NavBar'; 
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartProvider } from "../src/context/CartContext"
import { Cart } from './components/Cart';

import './App.css'

function App() {
   return (
    <>
   <CartProvider>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/> 
        <Route path='/category/:id' element={<ItemListContainer/>}/> 
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<>404 - Page not found</>}/>
        
      </Routes>
    </BrowserRouter>
    </CartProvider>
   </> )
}

export default App
