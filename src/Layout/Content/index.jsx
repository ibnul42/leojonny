import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../../Pages/About'
import Home from '../../Pages/Home'
import Service from '../../Pages/Service'
import Portfolio from '../../Pages/Portfolio'
import Solution from '../../Pages/Solution'
import Pricing from '../../Pages/Pricing'
import NotFound from '../../Pages/NotFound'
import BlogDetails from '../../Pages/Blog/BlogDetails'
import Blog from '../../Pages/Blog/index'
import Contact from '../../Pages/Contact'


const Content = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Service />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/solutions' element={<Solution />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/blog' element={<Blog />} />
                <Route path={`/blog/:title`} element={<BlogDetails />} />
                <Route path='/contact_us' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default Content