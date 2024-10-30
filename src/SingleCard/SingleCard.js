import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './SingleCard.module.css';
import { Button } from 'react-bootstrap';

const SingleCard = ({ product, onKnowMore }) => {
  return (     
    <Card style={{ width: '18rem' }}>
      <Card.Img className={styles.images} variant="top" src={product.image} />
      <Card.Body>
        <Card.Title className={styles.title}>{product.title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='price'>Price: ${product.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary" onClick={() => onKnowMore(product)}>Know more</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
