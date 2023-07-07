import React from 'react'
import ArticleAndNews from '../components/blog/ArticleAndNews'
import Explore from '../components/blog/Explore'
import LatestPost from '../components/blog/LatestPost'
import BannerCommon from '../components/common/BannerCommon'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'

const Blog = () => {
  return (
    <div>

<Navbar bgcolor/>
<BannerCommon
img="/assets/images/banner-blog.png"
title="Blog"
smalltitle="Get the Latest News,Updates and Tips" />

<ArticleAndNews/>
{/* <Explore /> */}
<LatestPost/>
<Footer/>

    </div>
  )
}

export default Blog