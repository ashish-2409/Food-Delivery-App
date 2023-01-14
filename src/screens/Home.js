import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Carousel/>
      </div>
      <div className='m-3'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div><Footer /></div>
    </>
  )
}
