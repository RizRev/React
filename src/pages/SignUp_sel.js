import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



export default function Home() {
  return (
    <Container>
      <h3 className='text-danger d-flex mt-5 justify-content-center'>Blanja</h3>
      <h5 className='d-flex mt-5 justify-content-center' >Please sign up with your account</h5>
      <Container style={{width: 300}}>
      <ButtonGroup className='text-danger d-flex mt-5 justify-content-center'>
        <button className='btn btn-light btn-sm' >customer</button>
        <button className='btn btn-danger btn-sm' >seller</button>
      </ButtonGroup>
      </Container>
      <Form>
    <Form.Group className=' d-flex justify-content-center'>
      <Form.Control className='mt-3' style={{width: 400}} type="text" placeholder="Name" />
    </Form.Group>
    <Form.Group className=' d-flex justify-content-center'>
      <Form.Control className='mt-3' style={{width: 400}} type="email" placeholder="email" />
    </Form.Group>
    <Form.Group className=' d-flex justify-content-center'>
      <Form.Control className='mt-3' style={{width: 400}} type="integer" placeholder="Phone number" />
    </Form.Group>
    <Form.Group className=' d-flex justify-content-center'>
      <Form.Control className='mt-3 mb-3' style={{width: 400}} type="text" placeholder="Store name" />
    </Form.Group>
    <Form.Group  className=' d-flex justify-content-center'>
    <Form.Control type="password" style={{width: 400}} placeholder="Password" />
    </Form.Group>
    <div className=' d-flex justify-content-center mt-3'>
    <Button  className='rounded-pill' style={{width: 400}}variant="danger" type="submit">
      Sign Up
    </Button>
    </div>
    
    <p className=' d-flex justify-content-center mt-4' >Already have a Blanja account? <a className='text-danger' href="">Login</a> </p>
    
  </Form>
    </Container>
    
  )
}
