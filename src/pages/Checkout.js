import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function checkout() {
  return (
    <div>
      <Container  >
        <h2>Checkout</h2>
        <h5>Shipping Address</h5>
        <div className='card mb-3'style={{width: 800}}>
            <h5>Andreas Jane</h5>
            <p className='mb-0'>Perumahan Saphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah,</p>
            <p>53181 [Blanja Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
            <Button  className='rounded-pill mb-3' style={{width: 250}}variant="outline-secondary" type="submit">
            Choose another address
            </Button>
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
        <h5 className='mb-4'>Shopping summary</h5>
        <p className='text-secondary mb-1'>Order</p>
        <p className='text-secondary'>Delivery</p>
        <hr />
        <h5 >Shopping summary</h5>
        <div className='d-flex justify-content-center'>
        <Button className=' rounded-pill mb-3 ' style={{width: 250}}variant="danger" type="submit">
        Choose another address
        </Button>
        </div>
        
        </Container>
        
    </div>
      </Container>
    </div>
  )
}
