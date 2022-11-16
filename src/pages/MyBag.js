import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function checkout() {
  return (
    <div>
      <Container  >
        <h2>My Bag</h2>
        <div className='card mb-3'style={{width: 800}}>
            <h5>Select all items</h5>
            <a href='' className='text-danger'>Delete</a>
        </div>
      </Container>
      <Container>
    <div className='card' style={{width: 800}}>
        <Col>Men's formal suit - Black</Col>
        <Col>Zalora Cloth</Col>
        <p>$ 20.0</p>
    </div>
    <div className='card mt-3' style={{width: 800}}>
        <Col>Men's formal suit - Black</Col>
        <Col>Zalora Cloth</Col>
        <p>$ 20.0</p>
    </div>
    <div className='card mt-3' style={{width: 400}}>
        <Container>
        <h5 className='mb-4 mt-3'>Shopping summary</h5>
        <p className='text-secondary mb-1'>Total price</p>
        <div className='d-flex justify-content-center mt-3'>
        <Button className=' rounded-pill mb-3 ' style={{width: 250}}variant="danger" type="submit">
        Buy
        </Button>
        </div>
        
        </Container>
        
    </div>
      </Container>
    </div>
  )
}
