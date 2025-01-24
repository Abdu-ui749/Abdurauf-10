import React from 'react'
import About from './about';
import Home from './home';
import { Route, Routes } from 'react-router';



const Page:React.FC = () => {
  return( 
  <Routes>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
</Routes>
  );
  
}

export default Page