import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../../Components/Accordion'
import Title from '../../Components/Title/index'
import Toggle from '../../Components/ToggleBtn'
import Header from '../../Components/HeaderSection'
import PageHeader from '../../Components/PageHeader'

const faqs = [
    {
        title: 'Will employees be on my company’s payroll?',
        desc: 'Consider these employees your full-time, dedicated resources that work for you on a full-time basis. LeoJonny takes care of medical benefits and other insurance since these employees are primarily associated with us, but they work as your dedicated resources alone under a specified Remote Employee Hiring Cost.'
    },
    {
        title: 'How do I make sure I am choosing the right service?',
        desc: 'Consider these employees your full-time, dedicated resources that work for you on a full-time basis. LeoJonny takes care of medical benefits and other insurance since these employees are primarily associated with us, but they work as your dedicated resources alone under a specified Remote Employee Hiring Cost.'
    },
    {
        title: 'Do I need to be tech-savvy to cooperate with us?',
        desc: 'Consider these employees your full-time, dedicated resources that work for you on a full-time basis. LeoJonny takes care of medical benefits and other insurance since these employees are primarily associated with us, but they work as your dedicated resources alone under a specified Remote Employee Hiring Cost.'
    },
    {
        title: 'Can I Downgrde or upgrade my subscription?',
        desc: 'Consider these employees your full-time, dedicated resources that work for you on a full-time basis. LeoJonny takes care of medical benefits and other insurance since these employees are primarily associated with us, but they work as your dedicated resources alone under a specified Remote Employee Hiring Cost.'
    },
    {
        title: 'Still hung up in questions?',
        desc: 'Consider these employees your full-time, dedicated resources that work for you on a full-time basis. LeoJonny takes care of medical benefits and other insurance since these employees are primarily associated with us, but they work as your dedicated resources alone under a specified Remote Employee Hiring Cost.'
    },
]

const juniorDev = [
    {
        title: '10 hours per week',
        logo: '/Assets/Icons/kite.svg',
        totalHours: '10',
        perWeek: '10',
        perHour: '150',
        trial: '5',
        redirectLink: '/contact_us',
        backgroundColor: '#ffffff',
        textColor: '#000000',
        linkColor: '#0199FE'
    },
    {
        title: '20 hours per week',
        logo: '/Assets/Icons/paper-plane.svg',
        totalHours: '20',
        perWeek: '20',
        perHour: '120',
        trial:'10',
        redirectLink: '/contact_us',
        backgroundColor: '#0199FE',
        textColor: 'white',
        linkColor: '#fff'
    },
    {
        title: 'Full time(40 hours per week)',
        logo: '/Assets/Icons/startup.svg',
        totalHours: '40',
        perWeek: '40',
        perHour: '80',
        trail: '10',
        redirectLink: '/contact_us',
        backgroundColor: '#00146B',
        textColor: 'white',
        linkColor: '#0199FE'
    }
]

const seniorDev = [
    {
        title: 'starter',
        logo: '/Assets/Icons/kite.svg',
        // totalHours: '40',
        perWeek: '10',
        perHour: '150',
        trial: '5',
        redirectLink: '/contact_us',
        backgroundColor: '#ffffff',
        textColor: '#000000',
        linkColor: '#0199FE'
    },
    {
        title: 'basic',
        logo: '/Assets/Icons/paper-plane.svg',
        // totalHours: '80',
        perWeek: '20',
        perHour: '120',
        trial:'10',
        redirectLink: '/contact_us',
        backgroundColor: '#0199FE',
        textColor: 'white',
        linkColor: '#fff'
    },
    {
        title: 'premium',
        logo: '/Assets/Icons/startup.svg',
        // totalHours: '160',
        perWeek: '40',
        perHour: '80',
        trail: '10',
        redirectLink: '/contact_us',
        backgroundColor: '#00146B',
        textColor: 'white',
        linkColor: '#0199FE'
    }
]
const Pricing = () => {

    const [priceList, setPriceList] = useState(juniorDev)
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        if (enabled === true) {
            setPriceList(juniorDev)
        } else {
            setPriceList(seniorDev)
        }
    },[enabled])
    
    // enabled === true ? setPriceList(juniorDev) : setPriceList(seniorDev)

    return (
        <div className="">
            <PageHeader title={`Pricing`} />
            <Header name="Pricing" />
            {/* <div className="relative flex justify-center items-center">
                <img src="/Assets/Pricing/hero.png" className='w-full min-h-[100px] max-h-96 object-cover object-top' alt="hero" />
                <h1 className="absolute text-3xl md:text-4xl text-white font-bold tracking-wider capitalize">Pricing</h1>
            </div> */}
            <div className='max-w-7xl mx-auto px-3'>
                {/* plan */}
                <div className="my-5 flex flex-col items-center md:px-16">

                    <Title title_text="Choose your plan" />
                    {/* toggle button  */}
                    {/* <div className='flex text-center text-[rgba(0,0,0,0.41)]'>
                        <p className={`mr-5 ${enabled === false ? "text-[#0199FE] " :  "text-[rgba(0,0,0,0.41)]"}`}>Senior Developer</p>
                        <Toggle toggling={enabled} setValue={ setEnabled} />
                        <p className={`ml-5 ${enabled === true ? " text-[#0199FE] " :  "text-[rgba(0,0,0,0.41)]"}}`}>Junior Developer</p>
                    </div> */}

                    <div className="px-5 grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-8 w-full my-10">
                        {priceList && priceList.map((item, index) => (
                            <div key={index} className={`col-span-1 ${index === 0 && 'bg-white'} ${index === 1 && 'bg-[#0199FE]'} ${index === 2 && 'bg-[#00146B]'} ${index === 0 && 'text-[#000]'} ${index === 1 && 'text-[#fff]'} ${index === 2 && 'text-[#fff]'} flex flex-col gap-4 md:gap-7 justify-between items-center  text-lg py-6 rounded hover:scale-105 transition-all delay-200 shadow-[0_0px_69px_8px_rgba(0,0,0,0.1)]`}>
                                <p className='my-2 capitalize'>{item.title}</p>
                                <img src={item.logo} className='h-20 w-20 my-3' alt={item.title} />
                                <div className="lg:mb-10">
                                    {/* <p className={`border-b-2 ${index === 0 ? 'border-primary' : 'border-white'} text-center`}>{item.totalHours} Hours</p> */}
                                    <p className={`text-sm  mt-1 ${index === 0 ? 'text-[rgba(0,0,0,0.41)]' : 'text-[#ffffffc2]'}`}>{item.perWeek} hours per week</p>
                                </div>
                                <p><span className='text-3xl font-semibold'>${item.perHour}</span> /hour</p>
                                <Link to={item.redirectLink} className={`border-2 text-sm lg:text-base	 border-[${item.linkColor}] rounded-full px-4 py-2 text-[${item.linkColor}] hover:scale-105  mb-2`}>10 Hours Free Trails</Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* faq */}
                <div className="my-5 flex flex-col items-center md:px-16">
                    <p className='capitalize text-center text-3xl md:text-4xl flex flex-col'>FAQs <span className='bg-primary h-1 rounded w-full mt-1'></span></p>
                    <Accordion items={faqs} />
                </div>
            </div>
        </div>
    )
}

export default Pricing