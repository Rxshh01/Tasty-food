import React from 'react'
import './Fooditem.css'
export default function Fooditem({food}) {
  return (
    <div className='Fooditem'>
      <img src='https://picsum.photos/200/300?{food}'/>
      <p>name</p>
    </div>
  )
}
