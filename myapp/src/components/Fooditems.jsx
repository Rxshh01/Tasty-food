import React from 'react'
import Fooditem from '../subcomponent/Fooditem'
import'./Fooditems.css'
export default function Fooditems() {
  return (
    <>
    <h2>FoodItems</h2>
    <div className='Fooditems'>
      <Fooditem food="cofee" />
      <Fooditem food="tea" />  <Fooditem food="banana" />  <Fooditem food="burger" />  <Fooditem food="pizza" />  <Fooditem food="shake" />
      

    </div>
    </>
  )
}
