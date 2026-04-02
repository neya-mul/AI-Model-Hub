import React, { use } from 'react'
import Card from '../components/Card'

export default function CardContainer({api}) {
    const useData = use(api)
    // console.log(useData);
    
    
    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='text-4xl font-bold'>Choose Your AI Model</h1>
                <p>One subscription gives you access to all frontier AI models</p>
            </div>
            <div className='cards max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    useData.map(data=> <Card data={data}></Card>)
                }

            </div>

        </div>
    )
}
