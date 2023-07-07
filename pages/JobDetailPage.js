import React from 'react'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import DetailPage from '../components/jobs/DetailPage'

const JobDetailPage = () => {
  return (
    <div>
        <Navbar bgcolor/>
        <DetailPage/>
        <Footer/>
    </div>
  )
}

export default JobDetailPage