import Container from 'react-bootstrap/Container';

import {Item} from "../components/Item"

export const ItemList = ({items}) => 
   <Container className='d-flex'>
    {items.length>0 && items.map((item) => (
        <Item key={item.id} item={item}/>
    ))}
   </Container>  
            
      
    
