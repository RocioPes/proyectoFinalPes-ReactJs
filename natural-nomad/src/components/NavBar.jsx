import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { getFirestore, getDocs, collection } from "firebase/firestore"
import { NavLink }  from 'react-router-dom';
import { CartWidget } from './CartWidget';

import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {

  const [categories, setCategories] = useState([])

  useEffect (() => {
    const db= getFirestore();
   const refCollection = collection(db, "items");
 
   getDocs(refCollection).then((snapshot)=> {
const uniqueCategories = [...new Set (snapshot.docs.map((doc) => doc.data().category))];
    setCategories(uniqueCategories);
});},[]); 

  return (
    
    <Navbar>
        <Container>
         <NavLink to="/" className="navbar"><Navbar.Brand>Natural Nomad</Navbar.Brand></NavLink>
          <Nav className="navbar me auto">
        {categories.map(category => <NavLink className="navbar-category" as={NavLink} key= {category} to={`/category/${category}`}>{category}</NavLink> )}
            </Nav><CartWidget/>     
        </Container>
      </Navbar>
      
    )
  }