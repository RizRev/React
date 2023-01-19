import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import lose from '../../components/Filter/lose.png'
import styles from "./add.module.css"
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack';

const Addproduct = () => {
  return (
    <div>
            <Container  >
        <div className='card mb-3'style={{width: "100%"}}>
          <div className='d-flex card-header'>
          {/* <img className={styles.silang} src={lose} alt="" /> */}
          <h5>Add Product</h5>
          </div>
            <div className='card-body'>
        <form action="" >

        </form>
        <Form.Control className='mb-4'
           placeholder='Name Product'
          />
        <Form.Control  className='mb-4'
           placeholder='Price'
          />
        <InputGroup className='mb-4'>
        <Form.Control
           placeholder='Stock'
          />

<Dropdown as={ButtonGroup} >
      <Button variant="secondary">Category</Button>

      <Dropdown.Toggle variant="secondary" split id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </InputGroup>

<InputGroup>
<Stack direction='horizontal' gap={3}>
<Form.Control className=''
           placeholder='Description'
          />
        <Form.Control type="file"/>
</Stack>

</InputGroup>

          </div>
          <Button variant='danger' type='submit' className='rounded-pill m-3'>UPLOAD PRODUCT</Button>
        </div>
      </Container>
    </div>
  )
}

export default Addproduct
