import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cart from './cart.png'
import mail from './mail.png'
import bell from './bell.png'
import muka from './Profil.png'
import Button from 'react-bootstrap/Button';
import logo from './Vector.png'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
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
                    <img className='me-4' src={bell} alt="" />
                    <img className='me-4' src={mail} alt="" />
                    <img className='me-4' src={muka} alt="" />
                </div>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default NavBar;