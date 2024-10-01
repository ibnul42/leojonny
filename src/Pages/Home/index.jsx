import React from 'react'
import Title from '../../Components/Title/index'
import PageHeader from '../../Components/PageHeader';

const Home = () => {
    const services = [
        { image: "/Assets/Home/computer.gif", title:"Web Application Development", content:"We build robust web-based software that ensure great experience for your web users."},
        { image: "/Assets/Home/document.gif", title: "Mobile Application Development", content:"Our experts in numerous technologies merging creative designs with next-gen app development services."},
        { image: "/Assets/Home/crayons.gif", title: "UI/UX Design & Branding", content:"We analyze the user experience and incorporate design in order to maximize user engagement."},
        { image: "/Assets/Home/bar-chart.gif", title: "Business & System Analytics", content:"Promoting any business digitally via different online/offline marketing plateforms."},
        { image: "/Assets/Home/settings.gif", title: "Technology Consulting", content:"Ensuring organizations get the most value from data, and deliver trusted insights across your enterprise."},
        { image: "/Assets/Home/social-media.gif", title: "Digital Marketing", content:"Build and managing technology better suited to the ever-changing reality of today’s business landscape."},
    ];

    const processes = [
        { icon: "/Assets/Home/requirement.svg" , title:"Requirement Gathering", content: "We follow the first and foremost priority of gathering requirements, resources and information to began our project."},
        { icon: "/Assets/Home/website.svg" , title:"UI/UX Design", content: "We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience."},
        { icon: "/Assets/Home/prototype.svg" , title:"Prototype", content: "After designing, you will get your prototype, which will be sent ahead for the development process for the product."},
        { icon: "/Assets/Home/agile.svg" , title:"Development", content: "Development of mobile application/web/blockchain started using latest tools and technologies with transparency."},
        { icon: "/Assets/Home/testing.svg" , title:"Quality Assurance", content: "Hyperlink values quality and provies 100% bug free application with no compromisation in it."},
        { icon: "/Assets/Home/product.svg" , title:"Deployment", content: "After trial and folowing all processes, your app is ready to launch on the App store or play store."},
        { icon: "/Assets/Home/development.svg" , title:"Support & Maintance", content: "Our company offers you all support and the team is always ready to answer every query after deployment."},
    ];

    const brands = [
        { image: "/Assets/Home/brands/the_bridge_asia.svg" },
        { image: "/Assets/Home/brands/dhaka_car.svg" },
        { image: "/Assets/Home/brands/irs.svg" },
        { image: "/Assets/Home/brands/rbbs.svg" },
        { image: "/Assets/Home/brands/Chokka.svg" },
        { image: "/Assets/Home/brands/school_of_art.svg" },
        { image: "/Assets/Home/brands/tour_hobe.svg" },
        { image: "/Assets/Home/brands/DEDF.svg" },
        { image: "/Assets/Home/brands/vms.svg" },
        { image: "/Assets/Home/brands/vertex.svg" },
    ];

    const socials = [
        { img: "/Assets/Home/zira.svg", name: "Jira", content: "We will deliver best efficiency, expertise "},
        { img: "/Assets/Home/slack.svg", name: "Slack", content: "We will deliver best efficiency, expertise "},
        { img: "/Assets/Home/meet.svg", name: "Google Meet", content: "We will deliver best efficiency, expertise "},
    ]

    return (
        <div className='grid grid-col-12 gap-4 mt-10'>
            <PageHeader title={`Home`} />

        {/* ---------------------Cover Section-------------------------  */}
            <section className='grid grid-cols-1 md:grid-cols-2 items-center justify-center max-w-7xl mx-auto px-6 md:px-16'>
                
                <div className='text-center md:text-left mb-16 md:mb-0 md:mt-6 lg:mt-0'>
                    <div className='text-2xl md:text-3xl lg:text-5xl font-semibold leading-snug md:leading-none'>
                        <p>Your <span className='text-theme_blue'>success</span> is</p>
                        <p>our primary <span className='text-theme_blue'>mission!</span></p>
                    </div>
                    <p className='pt-4 md:text-sm lg:text-base lg:pt-[35px] pb-6 lg:pb-[43px]'>We will deliver best efficiency, expertise and innovation</p>
                    <div className='flex justify-center md:justify-start'>
                        <button className='rounded-full border border-theme_blue px-6 pt-2.5 pb-2 text-theme_blue hover:bg-theme_blue hover:text-white'>GET A QUOTE</button>
                    </div>
                </div>
                <div className='px-2 lg:px-0 mb-8 md:mb-0'>
                    <img className='' src="/Assets/Home/HERO_IMAGE_1.png" alt="img"/>
                </div>
            </section>

        {/* ---------------------------------Service Section--------------------------  */}
        <section className='max-w-7xl mx-auto'>

            <Title title_text="Services we offer" />
            <div className='grid grid-cols-1 md:grid-cols-3 justify-between gap-10 lg:gap-16 mx-2 lg:mx-14 px-6 md:px-16'>
                {
                    services.map((service, index)=>
                        <div key={index} className='flex flex-col items-center lg:items-start border shadow-md rounded-xl p-4'>
                            <img className='w-28' src={service.image} alt="icon" />
                            <p>{service.title}</p>
                            <p className='text-gray-500'>{service.content}</p>
                        </div>
                        )
                }
            </div>
        </section>


        {/* ---------------------------------Process Section--------------------------  */}
        <section className='max-w-7xl mx-auto mb-8'>

            <Title title_text={"Process We Follow"} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10 lg:gap-16 mx-2 lg:mx-14 px-6 md:px-16'>
                {
                    processes.map((process, index)=>
                        <div key={index} className='flex flex-col items-start'>
                            <div className='flex items-center'>
                                <div className='border border-theme_blue p-1.5 rounded-md mr-2'>
                                    <img className='w-6' src={process.icon} alt="icon" />
                                </div>
                                <p className='text-xl'><span>{index+1+". "}</span>{process.title}</p>
                            </div>
                            <p className='text-gray-500 font-light text-sm mt-4'>{process.content}</p>
                        </div>
                        )
                }
            </div>
        </section>

        {/* ---------------------------------Client Section--------------------------  */}
        <section className='bg-light_blue pb-20'>
            <div className='max-w-7xl mx-auto'>

                <Title title_text={"Some of Our Client"} />

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between gap-3 mx-2 lg:mx-14 px-6 md:px-16'>
                    {
                        brands.map((brand, index)=>
                            <div key={index} className='flex flex-col items-center justify-center bg-white p-4'>
                                <img className='w-28 h-20' src={brand.image} alt="" />
                            </div>
                            )
                    }
                </div>
            </div>
        </section>

        {/* ------------------------- Social Communication ----------------------  */}
        <section className='flex max-w-7xl mx-auto mt-16 mb-16'>
            <div className='grid grid-cols-1 lg:grid-cols-5 mx-2 lg:mx-14 px-6 md:px-16'>
                <div className='flex flex-col items-center lg:items-start col-span-2'>
                    <div className='text-4xl font-semibold'>
                        <p><span className='text-theme_blue'>How</span> will <span className='text-theme_blue'>we</span></p>
                        <p>Communicate<span className='text-theme_blue'>?</span></p>
                    </div>
                    <div className='flex flex-col gap-6 mt-12'>
                        {
                            socials.map((social,index)=>
                                <div key={index} className={`flex items-center pr-8 p-2.5 border-l-8 border-theme_blue rounded-md shadow-[0px_2px_8px_2px_rgba(0,0,0,0.05)] gap-4 ${social.name==="Slack" && " bg-dark_blue text-white"}`}>
                                    <img className='w-10' src={social.img} alt="" />
                                    <div>
                                        <p className='text-xl'>{social.name}</p>
                                        <p className='text-sm font-light'>{social.content}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='col-span-3 mx-2 mb-12 lg:mb-0 lg:mx-12 order-first lg:order-last'>
                    <img src="/Assets/Home/communicate.svg" alt="communicate" />
                </div>
            </div>
        </section>

        </div>
    )
}

export default Home