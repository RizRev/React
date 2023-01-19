import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RegisterUsersPengunjung } from '../../redux/actions/register';

export default function Home() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [fullname,setName] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const postData = (e) =>{
    e.preventDefault()
    console.log(email)
    console.log(password)
    console.log(fullname)
    let data = {
      email,password,fullname
    }
    dispatch(RegisterUsersPengunjung(data,navigate))
  }
  return (
    <Container>
      <h3 className='text-danger d-flex mt-5 justify-content-center'>Blanja</h3>
      <h5 className='d-flex mt-5 justify-content-center' >Please sign up with your account</h5>
      <Container style={{width: 300}}>
      <ButtonGroup className='text-danger d-flex mt-5 justify-content-center'>
        <div>
        <button className='btn btn-danger btn-sm' style={{width: 100}}>customer</button>
        </div>
        <Link to="/SignUp_sel">
        <button className='btn btn-light btn-sm'style={{width: 100}} >seller</button>
        </Link>
        
      </ButtonGroup>
      </Container>
      <Form onSubmit={postData}>
    <Form.Group className=' d-flex justify-content-center'>
      <Form.Control className='mt-3' style={{width: 400}} type="text" onChange={(e)=>setName(e.target.value)} placeholder="Name" />
    </Form.Group>
    <Form.Group className=' d-flex justify-content-center'>
      <Form.Control className='mt-3' style={{width: 400}} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
    </Form.Group>
    <Form.Group  className=' d-flex justify-content-center'>
    <Form.Control className='mt-3' type="password" onChange={(e)=>setPassword(e.target.value)} style={{width: 400}} placeholder="Password" />
    </Form.Group>
    <div className=' d-flex justify-content-center mt-3'>
    <Button  className='rounded-pill' style={{width: 400}}variant="danger" type="submit">
      Sign Up
    </Button>
    </div>
    
    <p className=' d-flex justify-content-center mt-4' >Already have a Blanja account? 
    <Link to="/Login_cus"><a className='text-danger' href="">Login</a></Link> </p>
    
  </Form>
    </Container>
    
  )
}
