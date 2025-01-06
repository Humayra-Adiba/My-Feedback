import React from 'react'
import AllTopic from './AllTopic'
import FirstCarousel from './FirstCarousel'
import Trends from './Trends'
import MyFeedback from './MyFeedback'
import Reviews from './Reviews'
import Footer from '../Footer'
function FullHomepage() {
  return (
    <>
      <AllTopic/>
      <FirstCarousel/>
      <Trends/>
      <MyFeedback/>
      <Reviews/>
      <Footer/>
    </>
  )
}

export default FullHomepage
