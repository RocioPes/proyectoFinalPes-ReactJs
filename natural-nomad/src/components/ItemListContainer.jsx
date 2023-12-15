import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { getFirestore, getDocs, collection, query,where } from "firebase/firestore"

import { ItemList } from "../components/ItemList";
import { Loading } from "./Loading";

export const ItemListContainer = () => {
const [ items, setItems] = useState ([]);
const [ loading, setLoading] = useState (true);

const {id} = useParams();

useEffect (() => {
    setLoading(true);
     const db= getFirestore();
    const refCollection = id? query(collection(db, "items"), where("category", "==", id)): collection(db, "items");
  
    getDocs(refCollection).then((snapshot)=> {
    setItems(snapshot.docs.map((doc) =>{
            return { id: doc.id,...doc.data(),};
        })); setLoading(false);});}, [id]) ;

return (
    <>
<Container>
    {loading? (
    <Container>
        <Loading/>
    </Container>): 
    (<ItemList items={items}/>)}
</Container>
</>)
}

