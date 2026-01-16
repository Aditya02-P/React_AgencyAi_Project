import React from 'react'
import assets, { company_logos } from '../assets/assets'

const TrustedBy = () => {
    return (
        <div className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80'>
            <h1 className='font-semibold'>Trusted By Leading Companies</h1>
            <div className='flex items-center justify-center flex-wrap gap-10 m-4'>
                {
                    company_logos.map((elem, index) => (
                        <img key={index} src={elem} alt="logo" className='max-h-5 sm:max-h-6 dark:drop-shadow-xl' />
                    ))
                }
            </div>
        </div>
    )
}

export default TrustedBy