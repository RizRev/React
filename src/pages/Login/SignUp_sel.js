/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React,{useState} from 'react'
import { RegisterUsersToko } from '../../redux/actions/register';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';



export default function Home() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [fullname,setName] = useState("")
    const [store_name,setStorename] = useState("")
  
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const postData = (e) =>{
      e.preventDefault()
      console.log(email)
      console.log(password)
      console.log(fullname)
      console.log(store_name)
      let data = {
        email,password,fullname,store_name
      }
      dispatch(RegisterUsersToko(data,navigate))
    }
  return (
    <Container>
      <h3 className='text-danger d-flex mt-5 justify-content-center'>Blanja</h3>
      <h5 className='d-flex mt-5 justify-content-center' >Please sign up with your account</h5>
      <Container style={{width: 300}}>
      <ButtonGroup className='text-danger d-flex mt-5 justify-content-center'>
        <Link to="/SignUp_cus">
        <button className='btn btn-light btn-sm'style={{width: 100}} >customer</button>
        </Link>
        <div>
        <button className='btn btn-danger btn-sm' style={{width: 100}}>seller</button>
        </div>
      </ButtonGroup>
      </Container>
      <Form onSubmit={postData}>
    <Form.Group className=' d-flex justify-content-center'>
      <Form.Control className='mt-3' style={{width: 400}} type="text" onChange={(e)=>setName(e.target.value)} placeholder="Name" />
    </Form.Group>
    <Form.Group className=' d-flex justify-content-center'>
      <Form.Control className='mt-3' style={{width: 400}} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
    </Form.Group>
    <Form.Group className=' d-flex justify-content-center'>
      <Form.Control className='mt-3' style={{width: 400}} type="integer" placeholder="Phone number" />
    </Form.Group>
    <Form.Group className=' d-flex justify-content-center'>
      <Form.Control className='mt-3 mb-3' style={{width: 400}} type="text" onChange={(e)=>setStorename(e.target.value)} placeholder="Store name" />
    </Form.Group>
    <Form.Group  className=' d-flex justify-content-center'>
    <Form.Control type="password" style={{width: 400}} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
    </Form.Group>
    <div className=' d-flex justify-content-center mt-3'>
    <Button  className='rounded-pill' style={{width: 400}}variant="danger" type="submit">
      Sign Up
    </Button>
    </div>
    
    <p className=' d-flex justify-content-center mt-4' >Already have a Blanja account? 
    <Link to="/Login_sel"><a className='text-danger' href="">Login</a></Link> </p>
    
  </Form>
    </Container>
    
  )
}
