import React from 'react'
import CartModel from './CartModel'
import { toast } from 'react-toastify'

export default function Cart({ isAdded, setIsAdded }) {
  const proceedToCheckout = () => {
    setIsAdded([])
   if(isAdded.length > 0 ){
     toast.info('All items has proceed to checkout')
   }
   else{
    toast.info('No items available')
   }

  }

  return (


    <div className='max-w-[1200px] mx-auto'>{
      isAdded.length > 0 ?
        <div className='max-w-[1200px] mx-auto'>
          {isAdded.map(cartModel => <CartModel cartModel={cartModel}></CartModel>)}
        </div>
        :
        <div className='max-w-[1200px] mx-auto text-center'>
          <h1 className='text-3xl font-bold'>Your Cart is empty</h1>
        </div>
    }
      <button onClick={proceedToCheckout} className='btn w-full bg-black text-white'>Proceed to Checkout</button>

    </div>
  )
}
