import React from 'react'
import Herosection from '../components/pagecomponents/Home/Herosection'
import Aboutsection from '../components/pagecomponents/Home/Aboutsection'
import Menulist from '../components/pagecomponents/Home/Menulist'
import Reservationsection from '../components/pagecomponents/Home/Reservationsection'
import Foodgallerysection from '../components/pagecomponents/Home/Foodgallerysection'
import Review from '../components/pagecomponents/Home/Review'
import Blogsection from '../components/pagecomponents/Home/Blogsection'


function Home() {
  return (
    <div className='flex flex-col gap-10'>
      <Herosection />
      <Aboutsection />
      <Menulist />
      <Reservationsection />
      <Foodgallerysection />
      <Review />
      <Blogsection />
      
    </div>

  )
}

export default Home