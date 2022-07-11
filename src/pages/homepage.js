import React, { useEffect } from 'react';

function Homepage() {
    return (
        <div className="grid place-items-center">
            <h1>Homepage</h1>

            <div className='flex justify-center'> 
                <form className='w-full container'>
                    <input className='border-gray-600 rounded-lg pl-2 border-2' placeholder='Search with x'/>
                </form>
            </div>

            <div className='grid grid-cols-4'>
                <div className='grid col-span-1'>
                    1
                </div>
                <div className='grid'>
                    2
                </div>
                <div className='grid'>
                    3
                </div>
                <div className='grid'>
                    4
                </div>
                <div className='grid'>
                    5
                </div>
            </div>
        </div>
    )
}

export default Homepage