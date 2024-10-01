import React from 'react'

const index = ({pages=1, selectedPage=2}) => {

    const numberOfPages = parseInt(pages);
    const arr = new Array(numberOfPages).fill("a");

    const active = parseInt(selectedPage);

    const cls = "border py-1 px-3"

    return (
    <div className='flex gap-2'>
        <button className={`${cls} fill-blue-500`} disabled={(numberOfPages<=1)}>
            <img className='fill-blue-500' src="/Assets/Icons/left_arrow.svg" alt="icon"/>
        </button>
        { (numberOfPages<=1)? 
            <button className={cls}>1</button>
            :
            arr.map((a,index)=>
                <button key={index} className={`${cls} ${active===(index+1) && "bg-theme_blue text-white"}`}>{index+1}</button>
            )
        }
        <button className={cls}  disabled={(numberOfPages<=1)}>
            <img src="/Assets/Icons/right_arrow.svg" alt="icon"/>
        </button>
    </div>
  )
}

export default index