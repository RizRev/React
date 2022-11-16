import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



export default function Home() {
  return (
    // <div style={{width: 100}}>
    //   <input className="form-control" type="email" name="email" placeholder="email"/>
    //   <input  className="form-control" type="password" name="password" placeholder="password"/>
    // </div>
    <Container>
      <h3 className='text-danger d-flex mt-5 justify-content-center'>Blanja</h3>
      <h5 className='d-flex mt-5 justify-content-center' >Please login with your account</h5>
      <Container style={{width: 300}}>
      <ButtonGroup className='text-danger d-flex mt-5 justify-content-center'>
        <button className='btn btn-light btn-sm' >customer</button>
        <button className='btn btn-danger btn-sm' >seller</button>
      </ButtonGroup>
      </Container>
      <Form>
    <Form.Group className=' d-flex justify-content-center'>
      <Form.Control className='mb-3 mt-3' style={{width: 400}} type="email" placeholder="email" />
    </Form.Group>
    <Form.Group  className=' d-flex justify-content-center'>
    <Form.Control type="password" style={{width: 400}} placeholder="Password" />
    </Form.Group>
    <a className='text-danger mt-5 d-flex justify-content-center' href="">Forgot password?</a>
    {/* <p className='text-danger d-flex justify-content-center'>Forgot password?</p> */}
    <div className=' d-flex justify-content-center mt-3'>
    <Button  className='rounded-pill' style={{width: 400}}variant="danger" type="submit">
      Submit
    </Button>
    </div>
    
    <p className=' d-flex justify-content-center mt-4' >Don't have a Blanja account? <a className='text-danger' href="">Register</a> </p>
    
  </Form>
    </Container>
    
  )
}
