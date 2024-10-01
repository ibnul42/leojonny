import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import DropDown from "../../Components/DropDown/index.jsx"

function Header() {
    const location = useLocation()
    const [open, setOpen] = useState(false);
    const [activeId, setActiveId] = useState(location.pathname)
    // const navLinkStyles = ({ isActive }) => {
    //     return {
    //         // color: isActive ? "#ca2121" : "",
    //         // borderBottom: isActive ? "3px solid #6366f1" : null,
    //     };
    // };
    useEffect(() => {
        setActiveId(location.pathname);
    }, [location])

    const links = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        {
            name: 'Services', link: '/services', dropdown_items: [
                { name: "Web Application Development", icon: "/Assets/Header/services/img1.svg", link: "/services/#web_development" },
                { name: "Mobile Application Development", icon: "/Assets/Header/services/img3.svg", link: "/services/#mobile_development" },
                { name: "Business & System Analytics", icon: "/Assets/Header/services/img2.svg", link: "/services/#business_and_system" },
                { name: "Technology Consulting", icon: "/Assets/Header/services/img4.svg", link: "/services/#technology_consulting" },
                { name: "UI/UX Design & Branding", icon: "/Assets/Header/services/img5.svg", link: "/services/#ui_ux" },
                { name: "Digital Marketing", icon: "/Assets/Header/services/img6.svg", link: "/services/#digital_marketing" },
            ]
        },
        // { name: 'Portfolio', link: '/portfolio' },
        {
            name: 'Solutions', link: '/solutions', dropdown_items: [
                { name: "Inventory Management System", icon: "/Assets/Header/solutions/img1.svg", link: "/solutions/#inventory_mng_sys" },
                { name: "CRM Solution", icon: "/Assets/Header/solutions/img2.svg", link: "/solutions/#crm_sol" },
                { name: "Complete Ecommerce Solution", icon: "/Assets/Header/solutions/img3.svg", link: "/solutions/#complete_ecommerce_sol" },
                { name: "Visitior Management System", icon: "/Assets/Header/solutions/img4.svg", link: "/solutions/#vstr_mng_sys" },
                { name: "Ecommerce Mobile Solution", icon: "/Assets/Header/solutions/img5.svg", link: "/solutions/#ecommerce_mob_sol" },
                { name: "Car Rental Solution", icon: "/Assets/Header/solutions/img6.svg", link: "/solutions/#car_rent_sol" },
                { name: "Cloud Kitchen Solution", icon: "/Assets/Header/solutions/img7.svg", link: "/solutions/#cloud_kichen_sol" },
                { name: "Accounting Software Solution", icon: "/Assets/Header/solutions/img8.svg", link: "/solutions/#acnt_soft_sol" },
                { name: "Anti Counterfeit", icon: "/Assets/Header/solutions/img9.svg", link: "/solutions/#anti_cntr" },
                { name: "Portfolio Management", icon: "/Assets/Header/solutions/img10.svg", link: "/solutions/#prt_Mng" },
                { name: "ERP Solution", icon: "/Assets/Header/solutions/img11.svg", link: "/solutions/#erp_sol" },
                { name: "Fintech Software Solution", icon: "/Assets/Header/solutions/img12.svg", link: "/solutions/#fin_soft_sol" },
            ]
        },
        { name: 'Pricing', link: '/pricing' },
        { name: 'Blog', link: '/blog' },
    ]
    return (
        <div className="z-40 shadow h-30 sticky top-0 bg-white">
            <div className='max-w-7xl mx-auto px-3 flex justify-between min-h-[52px]'>
                <div className="flex items-center my-5 ml-2 md:my-4 lg:my-auto cursor-pointer py-1 md:py-3 gap-2">
                    <NavLink to='/' className="text-xl font-bold">
                        <img src="/Assets/logo.png" className='w-8 h-auto' alt="" />
                    </NavLink>
                    <p className='font-bold text-2xl text-[#00146B]'>LeoJonny</p>
                </div>
                <div className={`h-12 w-12 absolute top-4 right-5 flex flex-col justify-between items-center rounded cursor-pointer lg:hidden border ${open ? 'p-2' : 'p-3'} z-50`} onClick={() => setOpen(!open)}>
                    <div className={`w-full h-1 rounded-2xl bg-black transition-all duration-200 ease-in ${open ? 'rotate-45 mt-4 block' : ''}`}></div>
                    <div className={`w-full h-1 rounded-2xl bg-black transition-all duration-200 ease-in ${open ? 'hidden mb-5' : ''}`}></div>
                    <div className={`w-full h-1 rounded-2xl bg-black transition-all duration-200 ease-in ${open ? '-rotate-45 mb-3 inline-block' : ''}`}></div>
                </div>
                <ul className={`flex flex-col items-center text-lg md:text-sm font-bold lg:font-semibold  mt-[12px] md:mt-[19px] lg:mt-0 lg:flex-row gap-4 md:gap-6 lg:gap-0 lg:items-center pt-10 lg:pt-0 justify-start lg:justify-center absolute left-0 lg:static w-3/4 h-screen lg:h-auto lg:w-auto transition-all duration-500 ease-in ${open ? 'opacity-100 top-[68px] bg-dark_blue text-white lg:bg-transparent' : 'opacity-0 lg:opacity-100 top-[68px] left-[-500px] z-[-1]'} z-[-1] lg:z-auto`}>
                    {links.map((item, index) => (
                        <div className='group inline-block relative' key={index}>
                            <NavLink to={item.link}
                                className={`px-3 pt-4 pb-2 md:pt-7 md:pb-5 lg:my-0 cursor-pointer uppercase  lg:hover:text-gray-400 ${(activeId === item.link) ? 'text-primary' : "lg:text-black "} flex flex-col`}
                                // style={navLinkStyles}
                                onClick={() => {
                                    // setOpen(!open)
                                    setActiveId(item.link)
                                }}
                            >{item.name}
                                {/* {activeId === item.link && <span className='w-full h-[2px] rounded-full transition-all'></span>}  */}
                            </NavLink>
                            {/* {links.length !== index + 1 && (
                                <div className={`border-t mx-3 w-3/4 lg:hidden ${activeId === item.link && 'border-t-primary'}`}></div>
                            )} */}

                            {/*------------ DropDown -------------  */}

                            {item?.dropdown_items &&

                                <DropDown items={item.dropdown_items} />

                            }
                        </div>
                    ))}

                    <div className="flex w-full justify-center items-center py-5 lg:py-0 lg:px-10">
                        <NavLink to="/contact_us" className={`px-5 pb-2 pt-2.5 rounded-full border lg:border-primary lg:text-primary hover:bg-primary hover:text-white`} onClick={() => setOpen(!open)} >
                            Contact Us
                        </NavLink>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Header