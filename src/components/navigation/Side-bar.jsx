import React from 'react'
import Logo from '../../assets/logo.webp';
import { Link } from 'react-router-dom';

function Navigation() {
  const sidenav=[
    {
    path:'/',
    name:'Home',
    },
    {
    path:'/about',
    name:'About',
    },
    {
    path:'/menu',
    name:'Menu',
    },
    {
    path:'/gallery',
    name:'Gallery',
    },
    {
    path:'/blog',
    name:'Blog',
    },
    {
    path:'/page ',
    name:'pages  ',
    },
    {
    path:'/Contact',
    name:'contact',
    },
    {
      path:'/login ',
      name:'log In',
    },
    {
      path:'/category ',
      name:'category',
    },
    {
      path:'/menuitem ',
      name:'menuitem',
    },
    {
      path:'/testimonial ',
      name:'testimonial',
    },
    {
      path:'/blogitem ',
      name:'Blogitem',
    },
    {
      path:'/aboutservice ',
      name:'About Service',
    },
    {
      path:'/blogcard ',
      name:'Blog Card',
    },
    {
      path:'/blogcontent ',
      name:'Blog Content',
    },
    
  ]
  return (
        
    <div className='   h-fit  text-black     '>
      <div className='flex flex-col gap-10  h-11/12 justify-center ml-4'>

      <div>
       <img src={Logo} className='h-9 w-29 '>
       </img>
        </div>
       <div className='flex flex-col gap-8 '>
        {
          sidenav.map((val,i)=>{
            return(
              <Link to={val.path} key={i}>
                <div className='text-[17px] font-semibold text-gray-800 uppercase hover:text-white'>
                  {val.name}
                  </div>
              </Link>
            )
           
          })
        }
       </div>
      </div>
      
    </div>
  )
}

export default Navigation