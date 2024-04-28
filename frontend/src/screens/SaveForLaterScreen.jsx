import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { moveToCart, removeSavedItem } from '../slices/saveForLaterSlice';

const SaveForLaterScreen = () => {
  const dispatch = useDispatch();
  const savedItems = useSelector((state) => state.saveForLater.savedItems);

  const handleMoveToCart = (id) => {
    const item = savedItems.find(item => item._id === id);
    if (item) {
      dispatch(moveToCart(item));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeSavedItem(id));
  };


  return (
    <Row>
      <Col md={12}>
        <h1>Saved Items</h1>
        <ListGroup variant='flush'>
          {savedItems.map((item) => (
            <ListGroup.Item key={item._id}>
              <Row>
                <Col md={6}>
                  <Link to={`/product/${item._id}`}>{item.name}</Link>
                </Col>
                <Col md={3}>
                  <Button variant='primary' onClick={() => handleMoveToCart(item._id)}>
                    Move to Cart
                  </Button>
                </Col>
                <Col md={3}>
                  <Button variant='danger' onClick={() => handleRemove(item._id)}>
                    Remove
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default SaveForLaterScreen;