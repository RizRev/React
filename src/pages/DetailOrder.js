/* eslint-disable no-sequences */
/* eslint-disable dot-location */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

// import "./style.module.css";
import React from "react";
import { Form, Card, Container, CarouselItem } from "react-bootstrap";
// import gopay from "../../images/gopay.png";
// import cc from "../../images/cc.png";
// import pos from "../../images/pos.png";
// import NavbarGuest from "../../Component/Header/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import {style} from ""
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const DetailOrder = () => {
  const [bag, setBag] = useState();
  const [price, setPrice] = useState("");
  const [checkout, setCheckout] = useState("");
  const Navigate = useNavigate();
  const { id } = useParams();
  async function fetchData() {
    try {
      console.log(id);
      const token = localStorage.getItem("token");
      const result = await axios.get(
        `${process.env.REACT_APP_URL_BACKEND}/order/detail/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCheckout(result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // const handlePayment = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     console.log(token);
  //     console.log(id);
  //     await axios.put(
  //       process.env.REACT_APP_BACKEND_API_HOST + `/order/status/${id}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     Swal("Good Job!", "Login Success", "success");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // console.log(checkout);
  return (
    <div>
      <div>
        {/* <NavbarGuest /> */}
      </div>
      <div className="container-fluid bg-new">
        <div className="container py-3">
          <h1>Product</h1>
          <div className="container col-12 row py-3">
            <div className="col col-8 row">
              <div className="container col-12 row py-3">
                <div className="col col-12 row container shadow py-3 align-items-center">
                  <div className="col-2">
                    <img
                      src={checkout.photo}
                      alt=""
                      style={{ height: "120px", width: "120px",borderRadius:"15px" }}
                    />
                  </div>
                  <div className="col-5 ">
                    <h4 style={{marginLeft:"50px"}}>{checkout.product_name}</h4>
                  </div>
                  <div className="col-4 row d-flex mb-5">
                    <h3>Quantity</h3>
                    <h4>{checkout.amount}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="container col-4">
              <div
                className="col col-12 row container shadow py-3"
                style={{ backgroundColor: "white" }}
              >
                <div className="col col-12">
                  <h4 style={{ color: "black" }}>Status</h4>
                </div>
                <div className="row pt-3">
                  <div className="col-6">
                    <h6 style={{ color: "#9B9B9B" }}>Pembeli</h6>
                  </div>
                  <div className="col-3 offset-3">
                    <h6>{checkout.username}</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h6 style={{ color: "#9B9B9B" }}>Address</h6>
                  </div>
                  <div className="col-3 offset-3">
                    <h6>{checkout.alamat}</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h6 style={{ color: "#9B9B9B" }}>Status</h6>
                  </div>
                  <div className="col-3 offset-3">
                    {checkout.status === 0 ? (
                      <h6>Belum Dibayar</h6>
                    ) : checkout.status === 1 ? (
                      <h6>Sedang Diproses</h6>
                    ) : checkout.status === 2 ? (
                      <h6>Dikirim</h6>
                    ) : (
                      <h6>Terkirim</h6>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h6 style={{ color: "black" }}>Total</h6>
                  </div>
                  <div className="col-3 offset-3">
                    <h6 className="text-danger">Rp.{checkout.total}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailOrder;
