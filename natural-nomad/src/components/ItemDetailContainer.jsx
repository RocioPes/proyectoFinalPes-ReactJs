import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { ItemDetail } from "./ItemDetail";
import { CartContext } from "../context/CartContext";
import { Loading } from "./Loading";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState (true);
    const {id} = useParams();
    const { addItem } = useContext(CartContext)

useEffect (() => {
   const db= getFirestore();
  const refDoc = doc(db, "items", id);
  getDoc(refDoc).then((snapshot)=> {
  setItem({ id: snapshot.id,...snapshot.data()});
      setLoading(false)});
   }, [id]);

const add = (quantity) =>{
   if (item) {
addItem(item, quantity)}
};

return (
<>
{loading? (
  <> <Container>
      <Loading/>
   </Container> </>
   ):
(<Container className="mt-4">
    {item && <ItemDetail item={item} addItem={add}/>}
   </Container>)}
   </>
   )
}


