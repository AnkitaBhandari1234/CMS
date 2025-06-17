import React from 'react'
import Bannerreuse from '../components/ui/Bannerreuse'
import Menulist from '../components/pagecomponents/Home/Menulist'
import Reservationsection from '../components/pagecomponents/Home/Reservationsection'

function Menu() {
  return (
    <div>
        <Bannerreuse text='Menu'  />
        <Menulist/>
        <Reservationsection />

    </div>
  )
}

export default Menu