import React from 'react'
import Hero from '../components/Hero'
import NewProduct from '../components/NewProduct'
import Popper from '../components/Popper'
import Popper2 from '../components/Popper2'
import TopSelling from '../components/TopSelling'
function Home() {
  return (
    <div className='mt-4 container px-lg-5 rounded-3 border shadow-lg d-grid gap-5'>
      <Hero/>
      <NewProduct/>
      <Popper/>
      <TopSelling/>
      <Popper2/>
    </div>
  )
}

export default Home