import React from 'react'
import CartModel from './CartModel'
import { toast } from 'react-toastify'

export default function Cart({ isAdded, setIsAdded }) {

  let s = 0
  {
    for (let p of isAdded) {
      s = s + p.price
    }


  }

  const proceedToCheckout = () => {
    setIsAdded([])
    if (isAdded.length > 0) {
      toast.info('All items has proceed to checkout')
    }
    else {
      toast.info('No items available')
    }

  }

  return (


    <div className='max-w-[1200px] mx-auto'>{
      isAdded.length > 0 ?
        <div className='max-w-[1200px] mx-auto'>
          {isAdded.map(cartModel => <CartModel key={cartModel.id} cartModel={cartModel} isAdded={isAdded} setIsAdded={setIsAdded}></CartModel>)}
        </div>
        :
        <div className='max-w-[1200px] mx-auto text-center'>
          <h1 className='text-3xl font-bold'>Your Cart is empty</h1>
        </div>
    }
      <div className='flex justify-between bg-gray-600 text-white btn my-6 '>
        <h1 className='text-2xl font-bold'>Total</h1>
        <span className='text-2xl font-bold'>{s}</span>
      </div>
      <button onClick={proceedToCheckout} className='btn w-full bg-black text-white'>Proceed to Checkout</button>

    </div>
  )
}
