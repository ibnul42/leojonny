import React from 'react'
import { OurOffice } from '../../Components/OurOffice/OurOffice'
import PageHeader from '../../Components/PageHeader'

const contactList = [
    {
        title: 'dhaka',
        icon: '/Assets/Icons/icon-bangladesh.svg',
        loc: '44/F/7 2nd Floor, rangan Tower, West Panthapath, Dhaka-1215'
    },
    {
        title: 'florida',
        icon: '/Assets/Icons/icon-florida.svg',
        loc: '102 SPLITLOG PL, Sanford, FL 32771 USA'
    },
    {
        title: 'colorado',
        icon: '/Assets/Icons/icon-colorado.svg',
        loc: '11433 Booth Falls CT Parker, CO-80134'
    }
]

const budgets = [
    "$1,500 -- $3,000",
    "$2,500 -- $3,000",
    "$3,500 -- $3,000",
    "$4,500 -- More"
]

const items = [
    { id: 1, icon: "/Assets/Icons/smartphone.svg", name: '+18564370495' },
    { id: 2, icon: "/Assets/Icons/envelope.svg",  name:'henryfdiaz8@gmail.com' },
    { id: 3, icon: "/Assets/Icons/home.svg", name:"2210 Rutledge Ave, Orlando, FL 32817"}
  ]

const Contact = () => {
    return (
        <div className="bg-[#F5F5F5]">
            <PageHeader title={`Contact Us`} />
            <div className="relative flex justify-center items-center">
                <img src="/Assets/hero.jpg" className='w-full min-h-[100px] max-h-96 object-cover object-top' alt="hero" />
                <h1 className="absolute text-3xl md:text-4xl text-blue-950 uppercase font-bold tracking-wider">Contact us</h1>
            </div>

            {/* contact form  */}
            <div className='overflow-hidden'>

                <div className='max-w-7xl mx-auto min-h-[682px] relative'>
                    


                    <div className='relative z-[5] grid gap-5 grid-cols-1 md:grid-cols-2 mt-20 rounded-lg bg-white text-center shadow'>

                    <div className='flex flex-col px-10 pt-10 sm:pb-20'>

                    <div className='flex items-center '>
                    <div className='bg-[#0199FE] w-14 h-[3px]'></div>
                    <span className='text-theme_blue mx-5 text-lg	'>Say hi,</span>

                    <img src="/Assets/Contact/waving.svg" alt="" />
                    </div>
                    <div className='text-start text-2xl md:text-5xl font-semibold leading-snug md:leading-none my-10'>
                    <p>Let’s <span className='text-theme_blue'>talk</span>  about your 
                    <span className='text-theme_blue'> project!</span></p>
                    </div>
                    <div className='text-start text-xl'>
                    <p className='text-[#8f8f8f]'>We’d love to connect with you to talk about your project and possile circumstance!</p>
                    </div>

                    <ul role="list" className="mt-7	 text-base
                    lg:text-xl">
                    {items.map((item) => (
                    <li key={item.id} className="flex py-4 items-start">
                    <img src={item.icon} alt="" className='mr-10'/>
                    <p className='text-start'>{item.name}</p>
                    </li>
                    ))}
                    </ul>
                    </div>



                    {/* contact form  */}
                    <div className=' py-10 px-6 sm:px-10 xl:p-12'>

                    <form action="#" method="POST" className="mt-6 ">

                    <div className='my-8'>
                    <div className="mt-1 relative">
                    <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder='Name'
                    autoComplete="given-name"
                    className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm bg-[#F6F6F6]"
                    />
                    <img className='absolute top-3 right-3' src="/Assets/Contact/user.svg" alt="" />

                    </div>
                    </div>

                    <div className='my-8'>
                    <div className="mt-1 relative">
                    <input
                    id="email"
                    placeholder='Email'
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm bg-[#F6F6F6]"
                    />
                    <img className='absolute top-3 right-3'  src="/Assets/Contact/mail.svg" alt="" />    
                    </div>
                    </div>

                    <div className='my-8'>
                    <div className="mt-1 relative">
                    <input
                    type="text"
                    placeholder='Phone'
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm bg-[#F6F6F6]"
                    aria-describedby="phone-optional"
                    />

                    <img className='absolute top-3 right-3' src="/Assets/Contact/phone.svg" alt="" />  
                    </div>
                    </div>

                    <div className='my-8'>
                    <div className="mt-1">
                    <select
                    type="text"
                    name="budget"
                    id="budget"
                    placeholder='What Is Your Budget?'
                    className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm bg-[#F6F6F6]"
                    >
                    {
                    budgets.map(bd => 
                    <option className="bg-[#F6F6F6]" value={bd}>{bd}</option>)
                    }

                    </select>

                    </div>
                    </div>

                    <div className='my-8'>

                    <div className="mt-1 relative">
                    <textarea
                    id="message"
                    placeholder='Tell us little about the project'
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm bg-[#F6F6F6]"
                    aria-describedby="message-max"
                    defaultValue={''}
                    />

                    <img className='absolute top-3 right-3' src="/Assets/Contact/speech.svg" alt="" />  
                    </div>
                    </div>

                    <div className="sm:col-span-2 sm:flex sm:justify-start ">
                    <button
                    type="submit"
                    className="inline-flex items-center px-6  py-3 border border-transparent text-xl	 font-medium rounded-full shadow-sm text-white bg-[#00b4ff] hover:bg-[#347deb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                    >
                    Submit
                    </button>
                    </div>
                    </form>
                    </div>

                    </div>
                    <div className='bg-[#0568E5] absolute rounded-[31px] h-[621px] bottom-5 left-32 w-[91%] z-[3]'></div>

                    <div className='bg-[#00146B] absolute rounded-[31px] h-[621px] bottom-1 left-[200px] w-[84%] z-[2]'></div>
                </div>

            </div>

            <div className='mt-20 mb-10'>
                <OurOffice />
            </div>
            


        </div>
    )
}

export default Contact