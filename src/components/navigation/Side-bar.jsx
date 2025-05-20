import React from 'react'
import Logo from '../../assets/logo.webp';
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { BsInfoSquareFill } from "react-icons/bs";
import { BiSolidFoodMenu } from "react-icons/bi";
import { RiGalleryLine } from "react-icons/ri";
import { FaBlogger } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { MdContacts } from "react-icons/md";
import { RiLoginBoxFill } from "react-icons/ri";
import { BiSolidCategory } from "react-icons/bi";
import { CgMenuBoxed } from "react-icons/cg";
import { MdRateReview } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { MdContentPasteGo } from "react-icons/md";
import { RiInfoCardFill } from "react-icons/ri";















function Navigation() {
  const sidenav=[
    {
    path:'/',
    name:'Home',
    icon:<IoHome />,

    },
    {
    path:'/about',
    name:'About',
    icon:<BsInfoSquareFill />,
    },
    {
    path:'/menu',
    name:'Menu',
    icon:<BiSolidFoodMenu />,
    },
    {
    path:'/gallery',
    name:'Gallery',
     icon:<RiGalleryLine />,
    },
    {
      path:'/blog',
      name:'Blog',
      icon:<FaBlogger />,
    },
    {
      path:'/page ',
      name:'pages  ',
      icon:<RiPagesFill />,
    },
    {
      path:'/Contact',
      name:'contact',
      icon:<MdContacts />,
    },
    {
      path:'/login ',
      name:'log In',
      icon:<RiLoginBoxFill />,
    },
    {
      path:'/category ',
      name:'category',
      icon:<BiSolidCategory />,
    },
    {
      path:'/menuitem ',
      name:'menuitem',
      icon:<CgMenuBoxed />,
    },
    {
      path:'/testimonial ',
      name:'testimonial',
      icon:<MdRateReview />,
    },
    {
      path:'/blogitem ',
      name:'Blogitem',
      icon:<FaBlog />,
    },
    {
      path:'/aboutservice ',
      name:'About Service',
      icon:<RiInfoCardFill />,
    },
    {
      path:'/blogcard ',
      name:'Blog Card',
      icon:<FaIdCard />,
    },
    {
      path:'/blogcontent ',
      name:'Blog Content',
      icon:<MdContentPasteGo />,
    },
    {
      path:'/button ',
      name:'Button',
      icon:<MdContentPasteGo />,
    },
    
  ]
  return (
        
    <div className='   h-full  text-black mt-13    '>
      <div className='flex flex-col gap-7   justify-center ml-4 items-center '>

      <div>
       <img src={Logo} className='h-8 w-35   '>
       </img>
        </div>
       <div className='flex flex-col gap-7 '>
        {
          sidenav.map((val,i)=>{
            return(
              <Link to={val.path} key={i} className='flex items-center gap-1  '>
                <span className='text-gray-800 text-[17px] hover:text-white'>{val.icon}</span>
                <div className='text-[16px] font-semibold text-gray-800 uppercase hover:text-white transition'>
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