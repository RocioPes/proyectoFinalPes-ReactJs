import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

export const Item=({item}) => {
    
    return (
    <Container className="cards-container">
      <Card className="card" style={{ width: '18rem' }}>
        <Card.Img className="card-img" variant="top" src={item.pictureUrl} alt={item.title} />
        <Card.Body>
        <Card.Title className='card-title'>Viajes a {item.category}</Card.Title>
        <Card.Title className='card-title'>{item.title}</Card.Title>
        <Card.Text className='card-description'>U$$ {item.price}</Card.Text>
        <Link  to={`/item/${item.id}`}> <Button className="button-style">Más información</Button></Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Item;
