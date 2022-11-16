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
      <h5 className='d-flex mt-5 justify-content-center' >Please login with your account</h5>
      <p className='text-secondary d-flex mb-0 mt-5 justify-content-center'>We have sent an email containing a password reset instruction to your email.</p>
      <p className='text-secondary d-flex justify-content-center'>please check your email.</p>
      <Form>
    <Form.Group  className=' d-flex justify-content-center'>
    <Form.Control className='mt-5' type="email" style={{width: 400}} placeholder="Email" />
    </Form.Group>
    <Form.Group  className=' d-flex justify-content-center'>
    <Form.Control className='mt-3' type="password" style={{width: 400}} placeholder="Password" />
    </Form.Group>
    <a className='text-danger mt-5 d-flex justify-content-center' href="">Forgot password?</a>
    <div className=' d-flex justify-content-center mt-3'>
    <Button  className='rounded-pill' style={{width: 400}}variant="danger" type="submit">
        Login
    </Button>
    </div>
  </Form>
    </Container>
    
  )
}
