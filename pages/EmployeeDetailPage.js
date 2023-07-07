import React from 'react'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import EmployeeDetail from '../components/employee/EmployeeDetail'

const EmployeeDetailPage = () => {
  return (
    <div>

      <Navbar bgcolor />
      <EmployeeDetail/>
      <Footer/>
    </div>
  )
}

export default EmployeeDetailPage