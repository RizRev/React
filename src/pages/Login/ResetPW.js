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
      <h5 className='d-flex mt-5 justify-content-center' >Reset Password</h5>
      <Form>
    <Form.Group className=' d-flex justify-content-center'>
      <Form.Control className='mt-5' style={{width: 400}} type="email" placeholder="Email" />
    </Form.Group>
    <div className=' d-flex justify-content-center mt-3'>
    <Button  className='rounded-pill mt-5' style={{width: 400}}variant="danger" type="submit">
      Reset
    </Button>
    </div>
    
    {/* <p className=' d-flex justify-content-center mt-4' >Don't have a Blanja account? <a className='text-danger' href="">Register</a> </p> */}
    
  </Form>
    </Container>
    
  )
}
