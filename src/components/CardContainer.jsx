import React, { use } from 'react'
import Card from '../components/Card'
import Cart from './Cart'

export default function CardContainer({ api, isModel, setIsModel }) {
    const useData = use(api)
    // console.log(useData);


    return (



        <div className='my-10'>
            <div className='text-center'>
                <button className='btn mx-1'>Models</button>
                <button className='btn mx-1' >Cart (0)</button>
            </div>
            <div className='text-center my-10'>
                <h1 className='text-4xl font-bold'>Choose Your AI Model</h1>
                <p>One subscription gives you access to all frontier AI models</p>
            </div>
            <div className='cards max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    useData.map(data => <Card data={data}></Card>)
                }

            </div>

        </div>
    )
}
