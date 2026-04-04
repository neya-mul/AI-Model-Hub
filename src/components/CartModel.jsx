import React from 'react'
import { toast } from 'react-toastify'

export default function CartModel({ cartModel, isAdded, setIsAdded }) {
    // console.log(cartModel)
    const deleteButton = (cartModel) => {
        let filter = isAdded.filter(c => c.title != cartModel.title)
        // console.log(filter)
        setIsAdded(filter)
        toast.warning(
            <span>
                <strong className='font-bold text-2xl'>{cartModel.title}</strong> has been deleted from cart
            </span>

        )
    }

    return (

        <div className='p-3 rounded-2xl border min-h-3.5 my-8 flex justify-between bg-gray-200 border-gray-300 items-center'>
            <div className='flex gap-7 items-center'>
                <img className='w-[80px] h-fit' src={cartModel.image} alt="" />
                <div>
                    <h1 className='text-2xl font-bold'>{cartModel.title}</h1>
                    <p>{cartModel.description}</p>
                    <p className='text-xl font-bold'>${cartModel.price}/Month</p>
                </div>

            </div>
            <button onClick={() => deleteButton(cartModel)} className='btn bg-red-500 text-gray-100'>Delete</button>

        </div>
    )
}
