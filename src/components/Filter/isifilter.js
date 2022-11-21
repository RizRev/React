import React from 'react'
import styles from './isifilter.module.css'
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
          <img className={styles.silang} src={lose} alt="" />
          <h5>Filter</h5>
          </div>
            <div className='card-body'>
            <p className={styles.tulisan}>Colors</p>
            <hr/>
            <p className={styles.tulisan}>Sizes</p>
            <Button className={styles.button3} variant="danger" type="submit">
            XS
            </Button>
            <Button className={styles.button3} variant="danger" type="submit">
            S
            </Button>
            <Button className={styles.button3} variant="danger" type="submit">
            M
            </Button>
            <Button className={styles.button3} variant="danger" type="submit">
            L
            </Button>
            <Button className={styles.button3} variant="danger" type="submit">
            XL
            </Button>
            <hr />
            <p className={styles.tulisan}>Category</p>
            <Button className={styles.button2} variant="danger" type="submit">
            All
            </Button>
            <Button className={styles.button2} variant="danger" type="submit">
            Women
            </Button>
            <Button className={styles.button2} variant="danger" type="submit">
            Men
            </Button>
            <Button className={styles.button2} variant="danger" type="submit">
            Boys
            </Button>
            <Button className={styles.button2} variant="danger" type="submit">
            Girls
            </Button>
            <hr />
            
          </div>
        </div>
      </Container>
      <Button variant="" type="submit">
            Girls
      </Button>
    </div>
  )
}

export default IsiFilter;