import React from 'react'
import DetailBlog from '../components/blog/blogDetail/DetailBlog'
import Posts from '../components/blog/blogDetail/Posts'
import BannerCommon from '../components/common/BannerCommon'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'

const BlogDetail = () => {
  return (
    <div>

<Navbar bgcolor/>
<BannerCommon 
img="/assets/images/banner-blogdetail.png" />
<DetailBlog/>
<Posts/>
<Footer/>
 
    </div>
  )
}

export default BlogDetail

