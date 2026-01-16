import React, { useState } from 'react'

const SerCard = ({ ser }) => {
    const [pos, setPos] = useState({ x: 0, y: 0 })
    return (
        <div className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10'>
            <div className='pointer-events-none blur-2xl rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 w-75 h-75 absolute z-0 transition-opacity duration-500 mix-blend-lighten opacity-70' style={{ top: pos.y - 150, left: pos.x - 150 }}></div>
            <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>
                <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
                    <img src={ser.icon} alt="" className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2' />
                </div>
                <div class="flex-1">
                    <h3 class="font-bold">{ser.title}</h3>
                    <p class="text-sm mt-2">{ser.description}</p>
                </div>
            </div>
        </div>
    )
}

export default SerCard