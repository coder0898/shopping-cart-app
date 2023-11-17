import React from 'react'
import Filter from '../Component/Filter'
import ProductLists from '../Component/ProductLists'

const Home = () => {
  return (
    <div className='home'>
      <Filter/>
      <ProductLists/>
    </div>
  )
}

export default Home
