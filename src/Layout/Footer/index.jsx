import React from 'react'
import { Link } from 'react-router-dom'

const social = [
    {
        name: 'facebook',
        link: '/',
        imgSource: '/Assets/Icons/facebook.svg'
    },
    {
        name: 'linkedin',
        link: '/',
        imgSource: '/Assets/Icons/linkedin.svg'
    },
    {
        name: 'instagram',
        link: '/',
        imgSource: '/Assets/Icons/instagram.svg'
    },
    {
        name: 'twitter',
        link: '/',
        imgSource: '/Assets/Icons/twitter.svg'
    },
    {
        name: 'youtube',
        link: '/',
        imgSource: '/Assets/Icons/youtube.svg'
    },
]

const Footer = () => {
    return (
        <div className='bg-[#00146B] text-white mt-24'>
            <div className="max-w-7xl mx-auto relative pt-16 pb-5 flex flex-col gap-5">
                <div className="py-10 absolute -top-20 rounded-t-xl bg-gradient-to-r from-[#0160DF] to-[#12D8F2] via-[#168EFF] w-full flex flex-col justify-center px-8">
                    <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-12 lg:col-span-5 flex gap-3 items-center justify-center lg:justify-start">
                            <img src="/Assets/Icons/email.svg" alt="" />
                            <p className='text-lg'>Subscribe to Newsletter</p>
                        </div>
                        <div className="col-span-12 lg:col-span-7 px-5">
                            <form action="">
                                <div className="rounded-full overflow-hidden bg-white grid grid-cols-12">
                                    <input type="text" placeholder='Enter your email' name="" id="" className='col-span-8 py-3 px-6' />
                                    <button className='col-span-4 bg-[#1E1566] flex justify-center items-center gap-2 text-sm md:text-base font-bold'>Subscribe <span className='hidden md:block'><img src="/Assets/Icons/send.svg" alt="send" className='h-4 w-4' /></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='px-4 pt-16 md:pt-20 lg:pt-4'>
                    <div className="py-4 md:py-0 flex items-center gap-2">
                        <img src="/Assets/logo.png" className='mx-auto md:mx-0 w-12 h-auto' alt="logo" />
                        <p className='font-bold text-2xl text-white'>LeoJonny</p>
                    </div>

                    <div className='flex flex-col md:flex-row items-center md:items-start justify-between text-sm'>
                        <div className=''>
                            {/* address */}
                            <div className="flex flex-col items-center md:items-start gap-2 my-6 w-72">
                                <p className='uppercase font-bold'>Address</p>
                                <p className="">2210 Rutledge Ave, Orlando, FL 32817</p>
                            </div>

                            {/* email */}
                            <div className="flex flex-col items-center md:items-start gap-2">
                                <p className='uppercase font-bold'>Email</p>
                                {/* <p className="">henryfdiaz8@gmail.com</p> */}
                                <a href="mailto:henryfdiaz8@gmail.com">henryfdiaz8@gmail.com</a>
                            </div>

                            {/* phone */}
                            <div className="flex flex-col items-center md:items-start gap-2 mt-6">
                                <p className='uppercase font-bold'>Phone</p>
                                {/* <p className="">(561) 693-3947 </p> */}
                                <a href="tel:+18564370495">(856) 437-0495</a>
                            </div>

                        </div>

                        <div className='flex flex-col items-center md:items-start gap-6 font-bold my-6'>
                            <Link to="/">FAQ</Link>
                            <Link to="/" >Terms of Service</Link>
                            <Link to="/" >Privacy Policy</Link>
                        </div>

                        <div className='mt-2 lg:mt-20'>
                            <p className='mb-4'>Join us on social media</p>
                            <div className="flex gap-2">
                                {social && social.map((item, index) => (
                                    <Link key={index} to={item.link}>
                                        <img src={item.imgSource} alt={item.name} />
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

                {/* width line  */}
                <div className="border-[0.5px] border-[rgba(255,255,255,0.6)] mt-4"></div>

                <div className="text-center">
                    <p>Copyright &copy;2024, LeoJonny</p>
                    {/* <div className="h-4/6 w-[2px] bg-white"></div> */}
                </div>

            </div>
        </div>
    )
}

export default Footer