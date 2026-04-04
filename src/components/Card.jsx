import React from 'react'

export default function Card({ data}) {
    console.log(data);
const subscribeButton = ()=>{
    setIsSubscribed(true)
}
    return (
        <div>
            <div className="card mx-auto bg-base-100 max-w-[400px] h-auto shadow-sm">
                <figure className='bg-gray-200 p-5'>
                    <img
                        src={data.image}
                        alt=""
                        className='h-[200px] w-fit p-10 hover:p-8 transition:all duration-400 ease-in-out' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <p className='min-h-[70px]'>{data.description}</p>
                    <span className='text-2xl font-bold'>{data.price}$/month</span>
                    <div className="card-actions justify-end">
                        <button onClick={subscribeButton} className="btn w-full bg-red-500 text-white">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
