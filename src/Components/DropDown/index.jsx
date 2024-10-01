import React from 'react'
// import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const index = ({items}) => {
  return (
    <div className="absolute lg:z-10 hidden !shadow-2xl lg:group-hover:block bg-white pt-[12x] -translate-x-64 w-[680px]">
        <div style={{boxShadow: "inset -4px 5px 4px -5px #c3c3c3"}} className=" pt-6 px-12 pb-8 ">
            <div className='grid grid-cols-2 gap-5'>
                {items.map(
                    (data,index)=>
                    <div key={index} className="flex items-center gap-2">
                        <div className='flex bg-[#E4F0FE] p-2 rounded-full'>
                            <img src={data?.icon} alt="icon" className='' />
                        </div>
                        <div>
                        <HashLink smooth to={`${data.link}`}
                        className="py-2 text-black block whitespace-no-wrap text-sm"
                        >{data?.name}</HashLink>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    </div>
  )
}

export default index