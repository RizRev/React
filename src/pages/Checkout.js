import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import NavBar1 from '../components/NavBar1/Navbar';
import Gopay from '../asset/Gopay.png'
import Mastercard from '../asset/Mastercard.png'
import Pos from '../asset/PosIndonesia.png'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function Checkout2() {
    const [bag, setBag] = useState();
  const [price, setPrice] = useState("");
  const [checkout, setCheckout] = useState("");
  const Navigate = useNavigate();
  const token = localStorage.getItem("token");
  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.get(
        `${process.env.REACT_APP_URL_BACKEND}/bag`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBag(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  const deleteData = async (id) => {
    //sending
    await axios.delete(
      `${process.env.REACT_APP_URL_BACKEND}/bag/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    Swal.fire("Good job!", "Delete Sukses", "success");
    //panggil function "fetchData"
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      console.log("ini checkout",checkout);
      console.log(token);
      await axios.post(
        `${process.env.REACT_APP_URL_BACKEND}/order`,
        checkout,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await axios.delete(
        `${process.env.REACT_APP_URL_BACKEND}/bag/delete/${bag[0].id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire("Good job!", "Delete Sukses", "success");
      Navigate("/myorder");
    } catch (error) {
      console.log(error);
      return Swal("Good Job!", "Login Success", "success");
    }
  };
  useEffect(() => {
    if (price) {
      setCheckout({
        ...checkout,
        id_product: bag[0].id_product,
        total: bag[0].price * bag[0].amount,
        amount: bag[0].amount,
      });
    }
  }, [price, bag]);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (bag) {
      let total = 0;
      bag.map((item) => (total = total + item.price * item.amount));
      setPrice(total);
    }
  }, [bag]);
  console.log(bag);
  return (
    // <div>
    //   <Container  >
    //     <h2>Checkout</h2>
    //     <h5>Shipping Address</h5>
    //     <div className='card mb-3'style={{width: 800}}>
    //         <h5>Andreas Jane</h5>
    //         <p className='mb-0'>Perumahan Saphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah,</p>
    //         <p>53181 [Blanja Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
    //         <Button  className='rounded-pill mb-3' style={{width: 250}}variant="outline-secondary" type="submit">
    //         Choose another address
    //         </Button>
    //     </div>
    //   </Container>
    //   <Container>
    // <div className='card' style={{width: 800}}>
    //     <Col>Men's formal suit - Black</Col>
    //     <Col>Zalora Cloth</Col>
    //     <p>$ 20.0</p>
    // </div>
    // <div className='card mt-3' style={{width: 800}}>
    //     <Col>Men's formal suit - Black</Col>
    //     <Col>Zalora Cloth</Col>
    //     <p>$ 20.0</p>
    // </div>
    // <div className='card mt-3' style={{width: 400}}>
    //     <Container>
    //     <h5 className='mb-4'>Shopping summary</h5>
    //     <p className='text-secondary mb-1'>Order</p>
    //     <p className='text-secondary'>Delivery</p>
    //     <hr />
    //     <h5 >Shopping summary</h5>
    //     <div className='d-flex justify-content-center'>
    //     <Button className=' rounded-pill mb-3 ' style={{width: 250}}variant="danger" type="submit">
    //     Choose another address
    //     </Button>
    //     </div>
        
    //     </Container>
        
    // </div>
    //   </Container>
    // </div>

    <div>
      <NavBar1 />
      <Container  >
        <h2>Payment</h2>
        {/* <div className='card mb-3'style={{width: 800}}>
            <h5>Select all items</h5>
            <a href='' className='text-danger'>Delete</a>
        </div> */}
      </Container>
      {/* <Container>
    <div className='card' style={{width: 800}}>
        <Col>Men's formal suit - Black</Col>
        <Col>Zalora Cloth</Col>
        <p>$ 20.0</p>
    </div>
    <div className='card mt-3' style={{width: 800}}>
        <Col>Men's formal suit - Black</Col>
        <Col>Zalora Cloth</Col>
        <p>$ 20.0</p>
    </div>
    <div className='card mt-3' style={{width: 400}}>
        <Container>
        <h5 className='mb-4 mt-3'>Shopping summary</h5>
        <p className='text-secondary mb-1'>Total price</p>
        <div className='d-flex justify-content-center mt-3'>
        <Button className=' rounded-pill mb-3 ' style={{width: 250}}variant="danger" type="submit">
        Buy
        </Button>
        </div>
        
        </Container>
        
    </div>
      </Container> */}
      <main>
        <div className="container col-12 d-flex mt-5">
          <div className="col-7 row ">
            <div>
              <div style={{marginBottom:"30px"}}>
              <img src={Gopay} style={{marginRight:"50px",marginTop:"-4px"}} alt="" />
              Gopay
              <input style={{marginLeft:"129px",}} type="checkbox" name="" id="" />
              </div>
              <div style={{marginBottom:"30px"}}>
              <img src={Pos} style={{marginRight:"73px",marginTop:"-4px"}} alt="" />
              Pos Indonesia
              <input type="checkbox" style={{marginLeft:"80px",}}/>
              </div>
              <div style={{marginBottom:"30px"}}>
              <img src={Mastercard} style={{marginRight:"47px",marginTop:"-4px"}} alt="" />
              Mastercard
              <input type="checkbox" name="" id="" style={{marginLeft:"98px",}}/>
              </div>
            </div>
            {/* <div className="card d-flex flex-row align-items-center first">
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              <div
                className="ml-3"
                style={{ marginLeft: "15px", marginTop: "12px" }}
              >
                <p>
                  Select All Items
                  <span style={{ marginLeft: "3px" }}>(2 items included)</span>
                </p>
              </div>
              <div>
                <a href="" style={{ marginLeft: "250px", color: "#DB3022" }}>
                  Delete
                </a>
              </div>
            </div> */}
            {!bag ? (
              <p>Loading...</p>
            ) : bag.length < 1 ? (
              <p>Bag is empty</p>
            ) : (
              bag.map((item) => (
                <div
                  className="d-flex flex-row align-items-center"
                  style={{ height: "107px" ,width: "100%"}}
                >
                  <div style={{ marginLeft: "15px" }}>
                    <img
                      src={item.photo}
                      className="rounded"
                      style={{ height: "80px" }}
                    ></img>
                  </div>
                  <div style={{ marginLeft: "15px",width: "150px" }}>
                    <p>
                      {item.product_name}
                      <p style={{ color: "#9B9B9B" }}>Revan Store</p>
                    </p>
                  </div>
                  <div style={{ marginLeft: "35px" }}>
                    <p>Address</p>
                    <p>Jakarta Selatan</p>
                  </div>
                  <div style={{ marginLeft: "80px" }}>
                    <p>Receiver</p>
                    <p>Achmad Rizky</p>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="container col-4">
            <div
              className="col col-12 row container shadow py-3"
              style={{ backgroundColor: "white" }}
            >
              <div className="col col-12">
                <h6 style={{textAlign: "center"}}>Shopping Summary</h6>
              </div>
              <div className="row py-3">
                <div className="col-6">
                  <h6 style={{ color: "#9B9B9B", fontSize: "15px" }}>
                    Total price
                  </h6>
                </div>
                <div className="col-3 offset-3">
                  <h6 style={{ fontWeight: "bold", fontSize: "15px" }}>
                    Rp. {price}
                  </h6>
                </div>
              </div>
              <div className="row align-items-center py-3">
                <div className="col-12">
                  {/* <Link to="/checkout" className="link"> */}
                  <button
                    className="btn btn-danger"
                    onClick={handleCheckout}
                    style={{
                      height: "50px",
                      borderRadius: "40px",
                      width: "100%",
                    }}
                  >
                    <p style={{ marginTop: "10px" }}>Buy</p>
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
