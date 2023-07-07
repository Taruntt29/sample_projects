import React from 'react'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import ListPage from '../components/hospital/ListPage'

const HospitalListPage = () => {
  return (
    <>
    <Navbar bgcolor/>
    <ListPage/>
    <Footer/>
    </>
  )
}

export default HospitalListPage