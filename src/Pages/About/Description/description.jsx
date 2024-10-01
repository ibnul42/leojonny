import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import { OurOffice } from '../../../Components/OurOffice/OurOffice';
import Title from '../../../Components/Title/index';
import './description.css';

const Description = () => {

  const people = [
    {
      name: 'Caroline Clements',
      role: 'Founder & CEO',
      imageUrl: "/Assets/About/caroline.jpg",
    },
    {
      name: 'Bradin McClelland',
      role: 'CTO & Project Manager',
      imageUrl:
        '/Assets/About/bradin.jpg',
    },
    {
      name: 'Ahmad Zamir',
      role: 'Director',
      imageUrl:
        '/Assets/About/ahmed.jpg',
    },
    {
      name: 'Babar Farooqi',
      role: 'Technical Manager',
      imageUrl:
        '/Assets/About/babar.jpg',
    },

  ]
  const [start, setStart] = useState(true)

  const divContainer = useRef(null)

  const videoPlayer = (e) => {

    if (start === false) {
      divContainer.current.pause()
      setStart(true)
    } else if (start === true) {
      divContainer.current.play()
      setStart(false)
    }

  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  }

  return (
    <div>
      {/* who we are  */}
      <div className="grid grid-cols-12 text-3xl gap-10 max-w-7xl px-4 mx-auto mt-16">
        {/* description  */}
        <div className="col-span-12">
          <h6 className="font-bold tracking-widest sm:text-3xl mb-4 text-black ">Who <span className='text-[#0199FE]'>We</span > Are <span className='text-[#0199FE]'>?</span>
          </h6>
          <p className='text-xl text-slate-500 text-justify '>
          LeoJonny is a software development company that excels offering innovative approaches and emerging concepts for its clients. We are confident in supplying high-quality software as the foundation for digital transformation. Our highly skilled in-house and international expert provides you with solutions that will give you an edge in the marketplace. Your project for software development to enhance business should be entrusted to LeoJonny.
          </p>

        </div>

        {/* video  */}
        {/* <div className="lg:col-span-2 flex justify-center col-span-5 relative">
          <video onClick={(event) => videoPlayer(event)} ref={divContainer} width="600">
            <source src="/Assets/About/mistri.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
          <img className={`absolute top-[35%] max-w-[15vw] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ${start === true && "block"} ${start === false && "hidden"}`} onClick={(event) => videoPlayer(event)} src="/Assets/About/play-circle.svg" alt="" />
        </div> */}
      </div>

      {/* out mission and vision  */}
      <div className="max-w-7xl px-4 mx-auto mt-20 mb-10 relative">

        {/* <div className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-900	absolute w-full h-full top-20  md:h-[32rem] -z-10"></div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-900 gap-8 py-10">

          <section class="px-2">
            <div class="flex  h-full bg-gray-100 p-8 flex-col text-gray-900">
              <div class="flex items-center mb-3">
                <img className='w-[50px] mr-5	' src="/Assets/About/mission.svg" alt="" />
                <h2 class=" text-xl title-font font-medium">Our Mission</h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base text-justify">
                  LeoJonny’s mission is to give the future a new form, one in which on-demand business platforms make it easy to launch a brand-new business. LeoJonny adheres to the philosophy that our customers should be given the opportunity to expand and mature according to their own standards, just as we do with our goods and services.
                </p>
              </div>
            </div>
          </section>


          <section class="shadow-lg shadow-black-500/40 px-2 ">
            <div class="flex  h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <img className='w-[50px] mr-5	' src="/Assets/About/star.svg" alt="" />
                <h2 class="text-gray-900 text-xl title-font font-medium">Our Vision</h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base text-justify	">
                  LeoJonny's vision is to become a premier performer by satisfying the expectations of our clients through the development of digital platform strategies, quality software solutions, and the creation of generic expansion plans.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* leadership  */}
      {/* <div className="mx-auto max-w-7xl py-5 px-4 text-center sm:px-6 lg:px-8 lg:py-15 mb-20">
        <div className="space-y-8 sm:space-y-12 mt-16 md:mt-1">
          <Title title_text="Leadership" />
          <div className='flex justify-center overflow-hidden'>
            <div
              style={{
                width: "700px",

              }}>

              <Slider {...settings}>
                {people.map((person) => (
                  <div key={person.name}>
                    <div className='flex justify-center'>
                      <div className="space-y-4 relative m-1.5 rounded-full overflow-hidden  employee">
                        <img className="w-64 h-64	rounded-full object-cover overflow-hidden" src={person.imageUrl} alt="" />
                        <div className="space-y-2 absolute w-full h-full flex justify-center items-center text-white socialMedia">
                          <div className="font-medium lg:text-sm">
                            <h3 className='text-base mb-1'>{person.name}</h3>
                            <p className="text-white text-xs mb-2">{person.role}</p>
                            <ul className='flex justify-center pt-3'>
                              <li className='bg-[#0093F6] rounded-full w-10 h-10 mx-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300'>
                                <img className="w-full transition-all	" src="Assets/Icons/facebook.svg" alt="" />
                              </li>
                              <li className='bg-[#0093F6] rounded-full  w-10 h-10 mx-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300'>
                                <img className="w-full" src="Assets/Icons/linkedin.svg" alt="" />
                              </li>
                              <li className='bg-[#0093F6] rounded-full  w-10 h-10 mx-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300'>
                                <img className="w-full" src="Assets/Icons/twitter.svg" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div> */}

      {/* Our office  */}
      <OurOffice />
    </div>
  )
}
export default Description