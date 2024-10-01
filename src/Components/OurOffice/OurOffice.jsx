import React from 'react'

export const OurOffice = () => {

  const office = [
    // {
    //   name: 'Dhaka',
    //   address: '44/F/7 2nd Floor, rangan Tower, West Panthapath, Dhaka-1215',
    //   imageUrl:
    //     '/Assets/Icons/palace.svg',
    // },
    {
      name: 'Florida',
      address: '2113 EVERGLADES LANE #1045, THE VILLAGES, FLORIDA, 32163',
      imageUrl:
        '/Assets/Icons/florida.svg',
    },
    // {
    //   name: 'Colorado',
    //   address: '11433 Booth Falls CT Parker, CO-80134',
    //   imageUrl:
    //     '/Assets/Icons/colorado.png',
    // },
  ]

  return (
    <div className='bg-[#0568E5]'>
      <section className="text-gray-600 body-font mx-auto max-w-7xl py-5 px-4">
        <div className='flex justify-center  '>
          <div className='border-b-2 border-theme_white px-6'>
            <h1 className='text-center text-white m-4 font-semibold text-2xl md:text-3xl mt-20'>Our Office</h1>
          </div>
        </div>
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap justify-center -m-4">
            {office.map((add) => (
              <div key={add.name} className="p-4  lg:w-1/3 max-w-[343px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                <div className="h-full bg-white px-8 pt-16 pb-6 rounded-lg overflow-hidden text-center relative">
                  <div className='flex justify-center '>
                    <img className='h-[70px]' src={add.imageUrl} alt="" />
                  </div>
                  <div className='flex justify-center mt-6 mb-6'>
                    <div className='border-b-2 border-theme_blue px-4 m-2'>
                      <h1 className='text-center text-black  font-semibold text-2xl md:text-2xl mt-4'>{add.name}</h1>
                    </div>
                  </div>
                  <p className="leading-relaxed mt-4">{add.address}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
