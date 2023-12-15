import { ItemCount } from "./ItemCount";

import Container from "react-bootstrap/esm/Container";

export const ItemDetail = ({item, addItem}) => {
if (!item) {
    return <p>Cargando...</p>;
}
return(
<>
<Container className="mt-4">
    <h1 className="title-detail">{item.title}</h1>
    <img src={item.pictureUrl} width={300} alt={item.description} />
    <div className="text"><p><b>Estadía: </b>{item.description}</p>
    <p><b>Precio:</b> U$$ {item.price}</p>
    <p><b>Viajes disponibles: </b>{item.stock}</p></div>
<ItemCount initial={1} stock={item.stock} addItem={addItem} />
</Container>
</>)}


