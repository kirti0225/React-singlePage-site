import React from 'react';
import './style.css';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer'
import Bar from '../components/Bar'

function Home() {
  return (
    <div>
      <Navbar/>
      <Bar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home