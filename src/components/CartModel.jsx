import React from 'react'

export default function CartModel({ cartModel }) {
    console.log(cartModel)
  
    return (

        <div className='p-3 rounded-2xl border min-h-3.5 my-8 flex justify-between bg-gray-200 border-gray-300 items-center'>
            <div className='flex gap-2 items-center'>
                <img className='h-[100px]' src={cartModel.image} alt="" />
                <div>
                    <h1 className='text-2xl font-bold'>{cartModel.title}</h1>
                    <p>{cartModel.description}</p>
                    <p className='text-xl font-bold'>${cartModel.price}/Month</p>
                </div>

            </div>
            <button className='btn bg-red-500 text-gray-100'>Delete</button>

        </div>
    )
}
