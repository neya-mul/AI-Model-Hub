import React from 'react'

export default function Card({ data }) {
    console.log(data);

    return (
        <div>
            <div className="card mx-auto bg-base-100 max-w-[400px] h-auto shadow-sm">
                <figure className='bg-gray-200 p-5'>
                    <img
                        src={data.image}
                        alt="" 
                        className='h-[200px] w-fit p-10 '/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <p>{data.description}</p>
                    <span className='text-2xl font-bold'>{data.price}$/month</span>
                    <div className="card-actions justify-end">
                        <button className="btn bg-red-500 text-white">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
