import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import styles from './Navbar2.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cart from './cart.png'
import Button from 'react-bootstrap/Button';
import logo from './Vector.png'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logologout from './logout-512.webp'

const NavBar2 = () => {
    const logout = () => {
        localStorage.clear()
        window.location.reload(false)
      }
      const token = localStorage.getItem("token")
    
      const user = useSelector((state)=>state.user.user)
    
      useEffect(()=>{
        console.log(user)
      },[user])
    
    return (
                <Navbar bg='light' expand="lg">
            <Container>
                <img src={logo} alt="" />
                <Navbar.Brand href="#" className='logo text-danger '>Blanja</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                    <Form>
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="ms-5 rounded-pill"
                    aria-label="Search"
                    style={{width: 500}}
                    />
                    {/* <Button variant="outline-success">Search</Button> */}
                </Form>
                </Nav>
                <div>
                <img className='me-4' src={cart} alt="" />
                <Button  className='rounded-pill me-4' style={{width: 125}}variant="danger" type="submit">
                Login
                </Button>
                <Button  className='rounded-pill me-4' style={{width: 125}}variant="outline-secondary" type="submit">
            Signup
            </Button>
            {token &&
            <Button variant='light' onClick={()=>logout()}>
            <img src={logologout} className={styles.button3} alt="" />
            </Button>}
            
            
                </div>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default NavBar2;