import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function checkout() {
  return (
    <div>
      <Container  >
        <div className='card mb-3'style={{width: 800}}>
            <h5 className='card-header'>Inventory</h5>
            <div className='card-body'>
            <p className='text-secondary mt-3 mb-0'>Name of goods</p>
            <Form>
                <Form.Control className='mt-1' style={{width: 300}} type="text" placeholder="" />
            </Form>
            </div>
        </div>
        <div className='card mb-3'style={{width: 800}}>
            <h5 className='card-header'>Item details</h5>
            <div className='card-body'>
            <p className='text-secondary mt-3 mb-0'>Unit Price</p>
            <Form>
                <Form.Control className='mt-1' style={{width: 300}} type="text" placeholder="" />
            </Form>
            <p className='text-secondary mt-3 mb-0'>Stock</p>
            <Form>
                <Form.Control className='mt-1' style={{width: 300}} type="text" placeholder="" />
            </Form>
            </div>
        </div>
        <div className='card mb-3'style={{width: 800}}>
            <h5 className='card-header'>Photo of goods</h5>
            <div className='card-body'>
            </div>
        </div>
        <div className='card mb-3'style={{width: 800}}>
            <h5 className='card-header'>Description</h5>
            <div className='card-body'>
            </div>
        </div>
        <div className='d-flex justify-content-center'>
        <Button  className='rounded-pill' style={{width: 150}}variant="danger" type="submit">
        Jual
        </Button>
        </div>
        
      </Container>
    </div>
  )
}
