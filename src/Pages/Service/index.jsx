import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/HeaderSection'
import './service.css'
import PageHeader from '../../Components/PageHeader'

const Service = () => {
    const services = [
        {
            name: "Web Development",
            target: "web_development",
            description: "LeoJonny is a software development company that excels offering innovative approaches and emerging concepts for its clients. We are confident in supplying high-quality software as the foundation for digital transformation. Our highly skilled in-house and international expert provides you with solutions that will give you an edge in the marketplace. Your project for software development to enhance business should be entrusted to LeoJonny",
            imageUrl: "/Assets/Service/webDev.svg",
        },
        {
            name: "Mobile Application Development",
            target: "mobile_development",
            description: "Our development team has extensive experience creating both iOS and Android apps since the creation of the App Store. Our development experience speaks for itself as seen by the raving reviews and Apple features that our apps have received.",
            imageUrl: "/Assets/Service/mobileDev.svg",
        },
        {
            name: "UI/UX Design & Branding",
            target: "ui_ux",
            description: "When we design items, we make an effort to meet the exact requirements outlined by our customers. That entails gaining a knowledge of the users and empathizing with them before attempting anything else. Our UI and UX designers will work closely with you to understand the experiences that we need to create for the users, build the wireframes, prototype, and create a fantastic user interface. This process begins with gaining an understanding of the experiences that we need to create for the users. The user interface design that is visible is merely the tip of a much deeper iceberg, which is where the true value lies.",
            imageUrl: "/Assets/Service/UIDesign.svg",
        },
        {
            name: "Business & System Analytics",
            target: "business_and_system",
            description: "Productivity, efficiency, and profitability are all areas in which professional business analysts may make a significant contribution to an organization. Essential talents include the ability to communicate effectively and interact well with others, as well as problem-solving and analytical thinking. A Business Analyst is responsible for acting as a bridge between business ideas and business capabilities, as well as developing, scoping, and implementing beneficial modifications and improvements to business processes",
            imageUrl: "/Assets/Service/systemAnlaytic.svg",
        },
        {
            name: "Technology Consulting",
            target: "technology_consulting",
            description: "When we design items, we make an effort to meet the exact requirements outlined by our customers. That entails gaining a knowledge of the users and empathizing with them before attempting anything else. Our UI and UX designers will work closely with you to understand the experiences that we need to create for the users, build the wireframes, prototype, and create a fantastic user interface. This process begins with gaining an understanding of the experiences that we need to create for the users. The user interface design that is visible is merely the tip of a much deeper iceberg, which is where the true value lies.",
            imageUrl: "/Assets/Service/technology.svg",
        },
        {
            name: "Digital Marketing",
            target: "digital_marketing",
            description: "Digital marketing services can increase the demand for your business overnight.            Hiring the best digital marketing service to get customers in your doors or visiting your website means you can spend more time doing what you’re really good at—delivering an incredible product, service, or experience.",
            imageUrl: "/Assets/Service/digital.svg",
        },
    ]

    return (
        <div>
            <PageHeader title={`Services`} />
            <Header name="Service" />
            {/* all services  */}
            {
                services.map((data, Index) =>
                    <div className='relative lg:pt-16' key={Index} id={`${data?.target}`}>

                        {/* <div className={`bg-[#F3F7FF] absolute w-[100%] h-[37%] md:h-[60%] md:w-[45%] ${(Index % 2 !== 0) && "right-0"}`}></div> */}

                        <div className={`grid grid-cols-1 md:grid-cols-2  gap-4 max-w-7xl px-4 mx-auto mt-16 order-start`}>

                            {/*---------------- Images section------------------  */}
                            <div className={`${(Index % 2 !== 0) && "row-start-1 md:col-start-2 flex items-center"}`}>
                                <div className='relative flex justify-center bg-[#00146B] mx-5 md:mx-12 rounded-xl items-center'>
                                    {/* <img className='w-full h-[400px]' src="/Assets/Service/Rectangle.svg" alt="" /> */}
                                    <img className={`${(Index % 2 === 0) ? "w-[250px] md:w-[380px] md:right-0 md:bottom-0" : "top-32 lg:right-40 md:bottom-0"}`} src={data.imageUrl} alt="" />
                                </div>
                            </div>

                            {/* ----------------Text Contents-------------------  */}
                            <div className={`${(Index % 2 === 0) ? "order-last" : "order-first"}`}>
                                <h1 className='block text-2xl  font-bold text-black-600 pt-10 pb-10 text-center md:text-start'>{data.name}</h1>

                                <p className='prose prose-lg prose-indigo text-justify  text-gray-500'>{data.description}</p>
                                <div className='flex mt-10'>
                                    <Link to="/portfolio" >
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-6  py-3 border border-transparent text-xl	 font-medium rounded-full shadow-sm text-white bg-[#00b4ff] hover:bg-[#347deb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                                        >
                                            View Example
                                        </button>
                                    </Link>
                                    <div className="flex items-center ml-3 letsTalk">
                                        <Link to="/contact_us" >
                                            <p className="text-xl font-medium hover:underline-offset-1">Let's Talk</p>
                                        </Link>

                                        <ArrowLongRightIcon className='h-6 w-6 text-black-500 arrowHandler' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }

            {/* technology we use  */}

            <div className='mt-20 h-[80vh] bg-[#F3F7FF]'>
                <h1 className='pt-20'>
                    <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        <span className='text-[#0199FE]'>Technologies</span> We Use
                    </span>
                </h1>
            </div>


        </div>
    )
}

export default Service