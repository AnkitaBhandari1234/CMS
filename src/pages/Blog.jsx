import React from 'react'
import Blogbanner from '../components/pagecomponents/Blog/Blogbanner'
import Blogcard from '../components/pagecomponents/Blog/Blogcard'
import BlogLeftcontent from '../components/pagecomponents/Blog/BlogLeftcontent'
import Blogcontent from '../components/pagecomponents/Blog/Blogcontent'
import Blogprofile from '../components/pagecomponents/Blog/Blogprofile'
import Blogpopularpost from '../components/pagecomponents/Blog/Blogpopularpost'
import Postcategory from '../components/pagecomponents/Blog/Postcategory'
import Blognewsletter from '../components/pagecomponents/Blog/Blognewsletter'


function Blog() {
  return (
    <div>
      <Blogbanner text='Blog' />
      <Blogcard/>
      <BlogLeftcontent />
     <Blogcontent />
     <div>
      <Blogprofile />
      <Blogpopularpost/>
      <Postcategory/>
      <Blognewsletter />

     </div>
    </div>
  )
}

export default Blog