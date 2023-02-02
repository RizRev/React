import React from 'react'
import style from "./about.module.css"
import NavBar2 from '../components/NavBar2/NavBar2'
import DarkVariantExample from '../components/carousel/carousel'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function About() {
  console.log(process.env)
  let id = localStorage.getItem("id")
  const [data,setData] = useState([])
  const [photo,setPhoto] = useState(null)
  const [message,setMessage]  = useState({
    title: "",
    text: "",
    type: "success"
  })
  const [messageShow,setMessageShow]  = useState(true)
  const [inputData, setInputData] = useState({
    // users_id: id,
    id: "",
    name: "",
    stock: "",
    price: "",
    search: ""
  })
  const [sortBy,setSortBy] = useState("name")
  const [sort,setSort] = useState("asc")
  const [selected,setSelected] = useState(null)
  const [onedit,setOnedit] = useState(false)
  const [temp,setTemp] = useState(null)

  const deleteData = () => {
    axios.delete(`${process.env.URL_BACKEND}/products/${selected}`)
    .then((res)=>{
        console.log("delete data success")
        console.log(res)
        setMessageShow(true)
        setMessage({title:"success",text:"delete data success",type:"success"})
        messageTime()
        getData()
      })
      .catch((err)=>{
        console.log("delete data fail")
        console.log(err)
        setMessageShow(true)
      setMessage({title:"fail",text:"delete data fail",type:"danger"})
      messageTime()
    })
  }

  const editForm = (item) =>{
    console.log(item)
    setTemp(item)
    setInputData({
      ...inputData,
      name: item.name,
      stock: item.stock,
      price: item.price,
      category_id: item.category_id
      })  }

  useEffect(()=>{
    selected ? setOnedit(true) : setOnedit(false)
    !selected  && setInputData({
      ...inputData,
      id: "",
      name: "",
      stock: "",
      price: "",
      category_id: ""
      })
      !selected && setPhoto(null)
  },[selected])

  const messageTime = () =>{
    setTimeout(()=>setMessageShow(false),4000)
  }
  useEffect(()=>{
    console.log("checked", sortBy)
    getData()
  },[sortBy,sort,inputData.search])
  useEffect(()=>{
    getData()
  },[])

  let users = `${process.env.REACT_APP_URL_BACKEND}/products?sortby=${sortBy}&sort=${sort}&search=${inputData.search}&limit=100`
  const getData = ()=> {
    let token = localStorage.getItem("token")
    let id = localStorage.getItem("id")
    console.log("my id",id)
    console.log("my token",token)
    axios.get(users,{headers:{
      "Authorization" : `Bearer ${token}`
    }})
    .then((res)=>{
        console.log("get data success")
        console.log(res.data.data)
        res.data && setData(res.data.data)
        !selected && setMessageShow(true)
        !selected && setMessage({title:"success",text:"get data success",type:"success"})
        !selected && messageTime()
        setSelected(null)
      })
      .catch((err)=>{
        console.log("get data fail")
        console.log(err)
        setData([])
        err.response.data.message == 'server need token' &&  setMessageShow(true)
        err.response.data.message == 'server need token' &&   setMessage({title:"belum login",text:"user must login",type:"danger"})
        
        err.response.data.message !== 'server need token' &&  setMessageShow(true)
        err.response.data.message !== 'server need token' &&   setMessage({title:"fail",text:"get data fail",type:"danger"})
  
      messageTime()
    })
  }

  const postForm = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("id",inputData.name)
    formData.append("name",inputData.name)
    formData.append("stock",inputData.stock)
    formData.append("price",inputData.price)
    formData.append("category_id",inputData.category_id)
    formData.append("photo",photo)
    console.log(formData)
    if(!selected){
      let token = localStorage.getItem("token")
      axios.
      post(`${process.env.REACT_APP_URL_BACKEND}/products`,formData,{headers:{
        "Authorization" : `Bearer ${token}`
      }},{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res)=>{
        console.log("input data success")
      console.log(res)
      setMessageShow(true)
      setMessage({title:"success",text:"post data success",type:"success"})
      messageTime()
      getData()
    }).catch((err)=>{
      console.log("input data fail")
      setMessageShow(true)
      setMessage({title:"fail",text:"post data fail",type:"danger"})
      messageTime()
      console.log(err)
    })
  } else {
    axios.
    put(`${process.env.REACT_APP_URL_BACKEND}/products/${selected}`,formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res)=>{
      console.log("input data success")
      console.log(res)
      setMessageShow(true)
      setMessage({title:"success",text:"update data success",type:"success"})
      messageTime()
      getData()
  }).catch((err)=>{
    console.log("input data fail")
    setMessageShow(true)
      setMessage({title:"fail",text:"post data fail",type:"danger"})
      messageTime()
    console.log(err)
  })

  }
}
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0])
    console.log(e.target.files[0])
  }

  const handleChange = (e) =>{
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
    console.log(data)
  }

  return (
    <div >
      <NavBar2 />
      <div className={style.luar}>
      {data.map((item) => (
              <Card
                // className="card shadow-sm"
                className={style.card}
                // style={{
                //   border: "5px",
                //   width: "250px",
                //   marginLeft: "13px",
                //   textDecoration: "none",
                //   color: "#000000",
                // }}
                to={`/product-detail/${item.id}`}
                as={Link}
              >
                {/* style={{ width: "10rem" }}> */}

                <div className="d-flex justify-content-center">
                  <img src={item.photo} style={{width: "150px", height: "150px", marginTop:"10px"}}></img>
                </div>
                <p className="fs-4" style={{margin: "10px"}}>{item.name}</p>
                <p className="text-danger fs-4" style={{margin: "10px"}}>Rp. {item.price}</p>
                <p className="fs-6"style={{margin: "10px"}}>Revan Store</p>
              </Card>
            ))}
      </div>
      {/* <DarkVariantExample/> */}
      
      
    </div>
  )}

