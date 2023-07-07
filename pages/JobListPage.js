import React from 'react'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import ListPage from '../components/jobs/ListPage'

const JobListPage = () => {
  return (
    <div>
        <Navbar bgcolor/>
        <ListPage/>
        <Footer/>
    </div>
  )
}

export default JobListPage
