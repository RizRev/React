import React from 'react'
import NavBar from '../components/NavBar2/NavBar2'
import IsiFilter from '../components/Filter/isifilter'
import Category from '../components/Category1/category'
import MyVerticallyCenteredModal from '../components/Filter/Filter'
import Addproduct from '../components/Add Product/addproduct'

export default function Home () {
  return (
    <div>
      <Addproduct/>
      <NavBar />
      <Category />
      <IsiFilter />
      {/* <MyVerticallyCenteredModal /> */}
    </div>
  )
}
