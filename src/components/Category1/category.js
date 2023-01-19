import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import lose from '../../components/Filter/lose.png'
import styles from "../Filter/isifilter.module.css"
import styles2 from "./category.module.css"

const Category = () => {
  return (
    <div>
      <Container  >
        <div className='card mb-3'style={{width: 550}}>
          <div className='d-flex card-header'>
          <img className={styles.silang} src={lose} alt="" />
          <h5>Category</h5>
          </div>
            <div className='card-body'>
            <input type="text" placeholder='Category' />
            <Button variant='danger' type='submit' className='rounded-pill m-3'>Add Category</Button>
            <div className={styles2.daftar}>
                <Button className='rounded-pill m-2' variant="warning">Edit</Button>
                <Button className='rounded-pill' variant="danger">delete</Button>
            </div>
          </div>
        </div>
      </Container>
      <Button variant="" type="submit">
      </Button>
    </div>
  )
}

export default Category
