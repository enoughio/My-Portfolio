import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Project from '../Project'
import Blog from '../Blog'
import About from '../About'
import Contact from '../Contact'

const Routes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/About' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>

    </div>
  )
}

export default Routes