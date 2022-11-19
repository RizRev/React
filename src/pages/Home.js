import React from 'react'
import NavBar from '../components/NavBar1/Navbar'
import IsiFilter from '../components/Filter/isifilter'
import MyVerticallyCenteredModal from '../components/Filter/Filter'

export default function Home () {
  return (
    <div>
      <NavBar />
      <IsiFilter />
      {/* <MyVerticallyCenteredModal /> */}
    </div>
  )
}
