import React from 'react'
import './isifilter.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lose from './lose.png'
import pallet from './pallet.jpg'

const IsiFilter = () => {
  return (
    // <div>
    //   <h1>halo</h1>
    // </div>
    
    <div>
      <Container  >
        <div className='card mb-3'style={{width: 550}}>
          <div className='d-flex card-header'>
          <img className='silang' src={lose} alt="" />
          <h5>Filter</h5>
          </div>
            <div className='card-body'>
            <p className='tulisan'>Colors</p>
            <hr/>
            <p className='tulisan mb-4'>Sizes</p>
            <Button className='button3 ' variant="danger" type="submit">
            XS
            </Button>
            <Button className='button3 ' variant="danger" type="submit">
            S
            </Button>
            <Button className='button3 ' variant="danger" type="submit">
            M
            </Button>
            <Button className='button3 ' variant="danger" type="submit">
            L
            </Button>
            <Button className='button3 ' variant="danger" type="submit">
            XL
            </Button>
            <hr />
            <p className='tulisan'>Category</p>
            <Button className='button2 ' variant="danger" type="submit">
            All
            </Button>
            <Button className='button2 ' variant="danger" type="submit">
            Women
            </Button>
            <Button className='button2 ' variant="danger" type="submit">
            Men
            </Button>
            <Button className='button2 ' variant="danger" type="submit">
            Boys
            </Button>
            <Button className='button2 ' variant="danger" type="submit">
            Girls
            </Button>
            <hr />
            
          </div>
        </div>
      </Container>
      <Button class="button button1" variant="" type="submit">
            Girls
      </Button>
    </div>
  )
}

export default IsiFilter;