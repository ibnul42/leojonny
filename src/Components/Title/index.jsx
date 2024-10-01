import React from 'react'

const index = ({title_text}) => {

  return (
    <div className='flex justify-center mb-8 md:mb-12 '>
        <div className='border-b-[2px] border-theme_blue px-6'>
            <h1 className='text-center m-3 font-semibold text-2xl md:text-[10x] mt-12 lg:mt-10'>{title_text}</h1>
        </div>
    </div>
  )
}

export default index