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
      <h5 className='d-flex mt-5 justify-content-center' >Reset password</h5>
      <p className='text-danger d-flex mt-5 justify-content-center'>You need to change your password to activate your account</p>
      <Form>
    <Form.Group  className=' d-flex justify-content-center'>
    <Form.Control className='mt-3' type="password" style={{width: 400}} placeholder="Password" />
    </Form.Group>
    <Form.Group  className=' d-flex justify-content-center'>
    <Form.Control className='mt-3' type="password" style={{width: 400}} placeholder="Confirm New Password" />
    </Form.Group>
    <div className=' d-flex justify-content-center mt-3'>
    <Button  className='rounded-pill' style={{width: 400}}variant="danger" type="submit">
        Reset
    </Button>
    </div>
  </Form>
    </Container>
    
  )
}
