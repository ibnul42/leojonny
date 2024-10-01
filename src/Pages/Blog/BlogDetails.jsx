import React from 'react'
import { useLocation } from 'react-router-dom'

const BlogDetails = () => {
  const location = useLocation()
  const {title, description, source} = location.state
  return (
    <div className='max-w-7xl mx-auto'>

      <div className='px-8 md:px-10 lg:px-52 mb-20 mt-10'>

        {/* ------------------------ Cover Image ---------------------------  */}
        <div className='flex justify-center'>
          <img src={source} alt="" />
        </div>

        {/* ----------------------- Article texts ......................  */}
        <article className=''>
          <p className='text-3xl capitalize text-center py-5 font-bold'>{title}</p>
          <p className=''>{description}</p>
        </article>

        <div>

        {/* -----------Next and Previos Page Option----------  */}

          {/* <div className='flex flex-col gap-4 md:flex-row justify-between my-16'>

            <div className='flex items-center gap-4 max-w-sm'>
              <div className=''>
                <img className='' src="/Assets/Blog/BlogDetails/image2.png" alt="" />
              </div>
              <div>
                <p className='text-theme_blue'>PREVIOUS</p>
                <p className='w-52'>Lorem ipsum dolor sit amet, consectetur </p>
              </div>
            </div>

            <div className='flex flex-row-reverse md:flex-row items-center gap-4 max-w-sm'>
              <div>
                <p className='text-theme_blue md:text-right'>NEXT</p>
                <p className='w-52'>Lorem ipsum dolor sit amet, consectetur </p>
              </div>
              <div className=''>
                <img className='' src="/Assets/Blog/BlogDetails/image3.png" alt="" />
              </div>
            </div>

          </div> */}
        </div>


        {/* ---------------------------- Form Section ----------------------  */}
        <p className='text-3xl md:text-4xl text-gray-700 py-10'>Leave your though here</p>
        <form className='mt-8'>
          <textarea className='border shadow-[0_0_15px_rgba(0,0,0,0.16)] rounded-lg w-full h-32 md:h-52 p-4' placeholder='Type your opinion'></textarea>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-6'>
            <input className='p-4 shadow-[0_0_15px_rgba(0,0,0,0.16)] rounded-lg border' name="name" placeholder='Your Name'/>
            <input className='p-4 shadow-[0_0_15px_rgba(0,0,0,0.16)] rounded-lg border' name="email" placeholder='Your email'/>
          </div>
          <button className='bg-theme_blue textwhite py-2 px-12 mt-4 rounded-full text-white'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default BlogDetails