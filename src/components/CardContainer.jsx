import React, { use } from 'react'
import Card from '../components/Card'
import Cart from './Cart'

export default function CardContainer({ api, isModel, setIsModel}) {
    const useData = use(api)
    // console.log(useData);


    return (



        <div className='my-10'>
            <div className='text-center'>
                <button onClick={() => setIsModel('model')} className={`btn mx-1 ${isModel === 'model' ? 'bg-red-500 text-white' : ''} rounded-2xl`}>Models</button>
                <button onClick={() => setIsModel('cart')} className={`btn mx-1 ${isModel === 'cart' ? 'bg-red-500 text-white' : ''} rounded-2xl`} >Cart (0)</button>
            </div>
            <div className='text-center my-10'>
                <h1 className='text-4xl font-bold'>Choose Your AI Model</h1>
                <p>One subscription gives you access to all frontier AI models</p>
            </div>
            {isModel === 'model' ? (
                <div className='cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {useData.map(data => <Card key={data.id} data={data} />)}
                </div>
            ) : (
                <Cart  />
)}
        </div>
    )
}
