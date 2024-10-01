import React, { useState } from 'react'


const Accordion = ({ title, items }) => {
    const [showDetail, setShowDetail] = useState(null)
    const expandHandler = (index) => {
        if (showDetail === index) setShowDetail(null)
        else setShowDetail(index)
    }
    return (
        <div className="max-w-7xl mx-auto p-5 font-semibold flex flex-col gap-3 w-full">
            {items && items.map((item, index) => (
                <div key={index} className={`flex flex-col gap-3 ${showDetail === index ? 'shadow-[0_0_83px_14px_rgba(0,0,0,0.07)]' : 'border border-[rgba(0,0,0,0.16)]'}`}>
                    <div onClick={() => expandHandler(index)} className={`p-3 md:p-6 flex gap-1 justify-between cursor-pointer`}>
                        <p className='w-[95%] font-bold text-lg'>{item.title}</p>
                        <p className='text-3xl self-center'>{showDetail !== index ? '+' : '-'}</p>
                    </div>
                    <p className={`${showDetail === index ? 'visible' : 'hidden'} px-3 md:px-6 pb-4 text-[rgba(0,0,0,0.55)]`}>{item.desc}</p>
                </div>
            ))}
        </div>
    )
}

export default Accordion