import React from 'react'
import Bannerreuse from '../components/ui/Bannerreuse'
import Foodgallerysection from '../components/pagecomponents/Home/Foodgallerysection'

function Gallery() {
  return (
    <div>
        <Bannerreuse text='Gallery'/>
        <Foodgallerysection/>
    </div>
  )
}

export default Gallery