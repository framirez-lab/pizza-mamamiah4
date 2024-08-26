import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
//import Home from './Home';

function CardPizza({name,ingredients,price,img}) {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Card.Text>
                INGREDIENTES:
              </Card.Text>
              <ul>
              {Array.isArray(ingredients) ? (
              ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))
            ) : (
              <li>{ingredients}</li>
            )}
                {/* {ingredients.map((ingredient,i) => (
                  <li key={i}>{ingredient}</li>
                ))} */}
              </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Title>PRECIO: {price}</Card.Title>
                <Card.Link href="#" className=''>  <Button variant="primary" >Ver más 👀 </Button></Card.Link>
                <Card.Link href="#"  className=''>  <Button variant="dark">Añadir 🛒 </Button></Card.Link>
            </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardPizza;

/* import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'; */
/* import { FaEye, FaShoppingCart } from 'react-icons/fa'; */

/* const CardPizza = ({ foto, titulo, ingredients, valor }) => {
  return (
    <Card style={{ width: '17rem', margin: '5px', alignItems: 'center', }}>
      <Card.Img variant="top" src={foto} />
      <Card.Body style={{padding: '8px',}}>
        <Card.Title>Pizza {titulo}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush" style={{fontSize: 'small', alignItems: 'center',}}>
        <ListGroup.Item >
            <strong>Ingredientes:</strong>
            <br/> <img src='	https://web.whatsapp.com/emoji/v1/15/1/2/single/w/64/01f355.png' className='pizzaimg'/> {ingredients}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body style={{fontSize: '20px', alignItems: 'center',}}>
      <ListGroup.Item ><strong>Precio: ${valor} </strong></ListGroup.Item >
      <Button variant="outline-dark" className="me-2" style={{fontSize: 'small'}}>
            Ver más <FaEye style={{ marginLeft: '5px' }}/>
          </Button>
          <Button variant="dark" className="text-white" style={{fontSize: 'small'}}>
            Añadir <FaShoppingCart style={{ marginLeft: '5px' }} />
          </Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza; */