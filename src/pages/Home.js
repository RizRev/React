/* eslint-disable no-sequences */
/* eslint-disable dot-location */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

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
