import React from 'react'
import CartModel from './CartModel'

export default function Cart({ isAdded, setIsAdded }) {
   

  return (
    <div className='max-w-[1200px] mx-auto'>
      {isAdded.map(cartModel=><CartModel cartModel={cartModel}></CartModel>)}


    </div>
  )
}
