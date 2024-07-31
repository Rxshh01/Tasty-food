import React from 'react'
import Header from '../components/Header'
import './Home.css'
import Fooditems from '../components/Fooditems'
import Chain from '../components/Chain'

export default function Home() {
  return (
    <div>
      <Header/>
      <Fooditems/>
      
      <hr></hr>
      <Chain/>
    </div>
  )
}
