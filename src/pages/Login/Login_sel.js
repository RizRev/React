import React, {useState} from 'react'
import styles from'./login.css'
import { loginUser } from '../../redux/actions/login';
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import logo from '../../components/NavBar2/Vector.png';




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
      <div className='d-flex mt-5 justify-content-center'>
      <img src={logo} alt="" />
      <h3 className='text-danger mx-2 mt-2'>Blanja</h3>
      </div>
      <h5 className='d-flex mt-5 justify-content-center' >Please login with your account</h5>
      <Container style={{width: 300}}>
      <ButtonGroup className='text-danger d-flex mt-5 justify-content-center'>
      <Link to="/Login_cus" ><button className='btn btn-light btn-sm' style={{width: 100}} >customer</button></Link>
      <div>
      <button className='btn btn-danger btn-sm' style={{width: 100}} >seller</button>
      </div>
      </ButtonGroup>
      </Container>

      <form onSubmit={postData} className='form2 container mt-5'>
        <div className='d-flex justify-content-center'>
        <input type="email" style={{width: 400}} className="form-control mb-2 " value={email} name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
        </div>
        <div className='d-flex justify-content-center'>
        <input type="password" style={{width: 400}} className="form-control mb-2" value={password} name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
        </div>
        <Link to="/ResetPW" ><a className='text-danger mt-3 mb-3 d-flex justify-content-center' href="">Forgot password?</a></Link>
        <div className='d-flex justify-content-center'>
        <button type='submit' style={{width: 400}} className='btn btn-danger rounded-pill'>Login</button>
        </div>      
        </form>
        
        <p className=' d-flex justify-content-center mt-4' >Don't have a Blanja account? 
        <Link to='/SignUp_sel'><a className='text-danger' href="">Register</a></Link></p>
    </Container>
    
  )
}
