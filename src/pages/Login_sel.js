import React, {useState} from 'react'
import { loginUser } from '../redux/actions/login';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



export default function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const postData = (e) =>{
    e.preventDefault()
    console.log(email)
    console.log(password)
    let data = {
      email,password
    }
    dispatch(loginUser(data,navigate))
  }
  return (
    <Container>
      <h3 className='text-danger d-flex mt-5 justify-content-center'>Blanja</h3>
      <h5 className='d-flex mt-5 justify-content-center' >Please login with your account</h5>
      <Container style={{width: 300}}>
      <ButtonGroup className='text-danger d-flex mt-5 justify-content-center'>
        <button className='btn btn-light btn-sm' >customer</button>
        <button className='btn btn-danger btn-sm' >seller</button>
      </ButtonGroup>
      </Container>

      <form onSubmit={postData} className='container mt-5 col-3'>
              <input type="email" className="form-control mb-2" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
              <input type="password" className="form-control mb-2" value={password} name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
              <button type='submit' className='btn btn-danger'>login</button>
        </form>

      {/* <Form onSubmit={postData}>
    <Form.Group className=' d-flex justify-content-center'>
      <Form.Control className='mb-3 mt-3' style={{width: 400}} value={email} name="email" type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
    </Form.Group>
    <Form.Group  className=' d-flex justify-content-center'>
    <Form.Control type="password" style={{width: 400}} value={password} name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
    </Form.Group>
    <a className='text-danger mt-5 d-flex justify-content-center' href="">Forgot password?</a>
    <div className=' d-flex justify-content-center mt-3'>
    <Button  className='rounded-pill' style={{width: 400}}variant="danger" type="submit">
      Login
    </Button>
    </div>
    
    <p className=' d-flex justify-content-center mt-4' >Don't have a Blanja account? <a className='text-danger' href="">Register</a> </p>
    
  </Form> */}
    </Container>
    
  )
}
