import Carousel from 'react-bootstrap/Carousel';
import jacket from './category_jacket.png';
import pants from './category_pants.jpeg';
import shoes from './category_shoes.jpeg';
import short from './category_short.jpeg';
import tshirt from './category_tshirt.jpeg'
import './carousel.css';

function DarkVariantExample() {
  return (
    <Carousel variant="dark" >

        <Carousel.Item style={{width: 400}}>
        <img
          className="foto w-100"
          src={jacket}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{width: 400}}>
        <img
          className="foto d-block w-100"
          src={pants}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width: 400}}>
        <img
          className="foto d-block w-100"
          src={shoes}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width: 400}}>
        <img
          className="foto d-block w-100"
          src={short}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width: 400}}>
        <img
          className="foto d-block w-100"
          src={tshirt}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;