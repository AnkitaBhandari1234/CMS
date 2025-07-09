
import { Routes, Route } from 'react-router-dom';
import './App.css'

import Layout from './hoc/Layout';
import About from './pages/About';

import Contact from './pages/Contact';

import Home from './pages/Home';
import Login from './pages/Login';
import Gallery from './pages/Gallery';
import Menu from './pages/Menu';
import Blog from './pages/Blog';
import Page from './pages/Page';

import Menuitem from './pages/Menuitem';
import Testimonial from './pages/Testimonial';
import BlogItem from './pages/BlogItem';
import AboutService from './pages/AboutService';
import Blogcard from './pages/Blogcard';
import Blogcontent from './pages/Blogcontent';
import Button from './pages/Button';
import View from './components/pagecomponents/View/View';
import Formauth from './components/pagecomponents/Home/Formauth';
import Viewblogcard from './components/pagecomponents/View/Viewblogcard';
import Viewblogcontent from './components/pagecomponents/View/Viewblogcontent';
import Viewaboutservice from './components/pagecomponents/View/Viewaboutservice';
import Viewblogitem from './components/pagecomponents/View/Viewblogitem';
import Viewtestimonial from './components/pagecomponents/View/Viewtestimonial';
import Viewmenuitem from './components/pagecomponents/View/Viewmenuitem';


function App() {
 
  return (

        <Routes>
          <Route element={<Layout/>}>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/about' element={<About></About>}/>
          <Route path='/menu' element={<Menu></Menu>}/>
          <Route path='/gallery' element={<Gallery></Gallery>}/>
          <Route path='/blog' element={<Blog></Blog>}/>
          <Route path='/page' element={<Page></Page>}/>
          <Route path='/contact' element={<Contact></Contact>}/>
          <Route path='/login' element={<Login></Login>}/>
          
          <Route path='/menuitem' element={<Menuitem></Menuitem>}/>
          <Route path='/testimonial' element={<Testimonial/>}/>
          <Route path='/blogitem' element={<BlogItem/>}/>
          <Route path='/aboutservice' element={<AboutService/>}/>
          <Route path='/blogcard' element={<Blogcard/>}/>
          <Route path='/blogcontent' element={<Blogcontent/>}/>
          <Route path='/button' element={<Button/>}/>
          <Route path='/view/:id' element={<View/>}/>
          <Route path='/viewblog/:id' element={<Viewblogcard/>}/>
          <Route path='/viewblogcontent/:id' element={<Viewblogcontent/>}/>
          <Route path='/viewaboutservice/:id' element={<Viewaboutservice/>}/>
          <Route path='/viewblogitem/:id' element={<Viewblogitem/>}/>
          <Route path='/viewtestimonial/:id' element={<Viewtestimonial/>}/>
          <Route path='/viewmenuitem/:id' element={<Viewmenuitem/>}/>
          
          
          </Route>
          <Route path='/log' element={<Formauth />} />
        </Routes>

  )
}

export default App
