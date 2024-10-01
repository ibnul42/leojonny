import React from 'react'
import Header from '../../Components/HeaderSection'
import PageHeader from '../../Components/PageHeader'

const Solution = () => {

    const services = [
        
        
        {
            id: "inventory_mng_sys",
            name: "Inventory Management System",
            description: ["Inventory systems tell you the number of components or ingredients you need to create or assemble your final product. Without this information you may end up with excess stock, eroding your bottom line, or with insufficient stock to meet customer demand.",
            "But while you will need an inventory management system, which one you choose is entirely up to you. There are countless different systems you can adopt, ranging from simple approaches to comprehensive solutions."
            ],
            imageUrl:"/Assets/Solution/inventory.svg",
        },
        {
            id: "complete_ecommerce_sol",
            name: "Complete Ecommerce Solution",
            description: ["Our development team has extensive experience creating both iOS and Android apps since the creation of the App Store. Our development experience speaks for itself as seen by the raving reviews and Apple features that our apps have received."],
            imageUrl:"/Assets/Solution/ecommerce.svg",
        },
        {
            id: "ecommerce_mob_sol",
            name: "Ecommerce Mobile Solution",
            description: ["When we design items, we make an effort to meet the exact requirements outlined by our customers. That entails gaining a knowledge of the users and empathizing with them before attempting anything else. Our UI and UX designers will work closely with you to understand the experiences that we need to create for the users, build the wireframes, prototype, and create a fantastic user interface. This process begins with gaining an understanding of the experiences that we need to create for the users. The user interface design that is visible is merely the tip of a much deeper iceberg, which is where the true value lies."],
            imageUrl:"/Assets/Solution/ecommerceMobile.svg",
        },
        {
            id: "cloud_kichen_sol",
            name: "Cloud Kitchen Solution",
            description: ["Cloud kitchen management software is a complete, versatile, and dynamic management software that any kind of restaurant can use anywhere.",
            "Our technology helps the food industry for better communication, better planning, and better process efficiencies. It enables you to gather your business data and information and creates predictability for future performance. It’s not just managers’ tools; it’s everyone’s tool in the kitchen every day."],
            imageUrl:"/Assets/Solution/kitchen.svg",
        },
        {
            id: "anti_cntr",
            name: "Anti counterfeit",
            description: ["Anti-counterfeit solutions are a collection of technologies that brands can deploy to safeguard their products from fraudsters and con artists. The general idea is that you need methods and processes to determine whether an item is genuine or fake. Indeed, fraudulent products that enter the market can be just as convincing as the real thing; counterfeiters go through great lengths to ensure it, especially if only physical anti-counterfeit measures are in place"],
            imageUrl:"/Assets/Solution/anti.svg",
        },
        {
            id: "erp_sol",
            name: "ERP Solution",
            description: ["Enterprise resource planning (ERP) refers to a type of software that organizations use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations. A complete ERP suite also includes enterprise performance management, software that helps plan, budget, predict, and report on an organization’s financial results. ERP systems tie together a multitude of business processes and enable the flow of data between them."],
            imageUrl:"/Assets/Solution/erpSolution.svg",
        },
        {
            id:"crm_sol",
            name: "CRM Solution",
            description: ["CRM software allows companies to automate customer-related workflows and ensure that all interactions with customers and prospects happen smoothly and efficiently across the entire customer journey. CRM software enables organizations to increase close rates, boost loyalty, and drive profits. With CRM software, companies can easily collect and manage customer data from multiple channels to build more precise customer profiles, provide personalized customer engagements and ensure maximum productivity of customer-facing teams."],
            imageUrl:"/Assets/Solution/CrmSolution.svg",
        },
        {
            id: "vstr_mng_sys",
            name: "Visitor Management System",
            description: ["The replacement of the traditional visitor management method with technology presents new benefits. In general, a visitor management system increases an organization’s productivity and efficiency.",
            "The visitor management system can help organizations build a strong brand reputation.A good system can create a mutual dependency and trust between the employees and visitors.A strict security system will impress the visitors who enter your office.The truth speaks, it will affect your brand reputation. "],
            imageUrl:"/Assets/Solution/VisitorMngSys.svg",
        },
        {
            id: "car_rent_sol",
            name: "Car Rental Solution",
            description: ["Car Rental Solutions is a car rental software product that’s equipped with complete customer and fleet management tools. You can use the product to create customizable vehicle groupings, allowing your customers to browse available vehicles easily.", 
            "It also has an intuitive quote engine that ensures total rental - pricing accuracy.The system will enable you to add as many branches and pick - up / drop - off locations as you need, making it a completely scalable vehicle rental management system."],
            imageUrl:"/Assets/Solution/carRentalSolution.svg",
        },
        {
            id: "acnt_soft_sol",
            name: "Accounting Software Solution",
            description: ["Accounting software is a crucial tool for any organization, today. Financial transactions usually track precise details, and reporting and analysis can be done relatively instantly with such software.",
            "Due to the time and effort required to consolidate the manual data, ad hoc reporting was often difficult.Accounting software takes care of these tasks, saving accounting costs and allowing for better financial decision- making through prompt reporting."],
            imageUrl:"/Assets/Solution/accountingSoftwareSolution.svg",
        },

        {
            id: "prt_Mng",
            name: "Portfolio Management",
            description: ["Portfolio management is the process of building and maintaining an investment account. You can manage your own portfolio, or hire a portfolio manager or investment advisor.","Portfolio management involves picking investments such as stocks, bonds and funds and monitoring those investments over time. Portfolio management can be done on your own, with a professional or through an automated service.Tracking multiple active projects while staying informed on overall portfolio performance is challenging. Project portfolio management software provides organizations with a high-level, global view regarding the progress and sustainability of multiple projects."],
            imageUrl:"/Assets/Solution/portfolio.svg",
        },
        {
            id: "fin_soft_sol",
            name: "Fintech Software Solution",
            description: ["Digital marketing services can increase the demand for your business overnight.", 
            "Hiring the best digital marketing service to get customers in your doors or visiting your website means you can spend more time doing what you’re really good at—delivering an incredible product, service, or experience."],
            imageUrl:"/Assets/Solution/fintechSolution.svg",
        }
    ]



    return (
        <div>
            <PageHeader title={`Solution`} />
                        
            <Header name="Solution" />

            <div className='md:mt-10 lg:mt-0'>
                {
                    services.map((data, Index) => (
                        <div key={Index} id={data.id} className='grid grid-cols-1 md:grid-cols-2  gap-4 max-w-7xl px-4 mx-auto lg:pt-20 items-center'>

                            {/* image section  */}
                            <div className={`flex justify-center ${(Index % 2 === 0) ? 'order-1': 'order-1 md:order-2'} `}>
                                <img className='w-[80%]' src={data.imageUrl} alt="" />
                            </div>
            
                            {/* description section  */}
                            <div className={`${(Index % 2 === 0) ? 'order-2': 'order-1'} px-8 `}>
                                <h1 className='block text-2xl  font-bold text-black-600  pb-10 text-center md:text-start'>{data.name}</h1>

                                {
                                    data.description.map(des => (
                                        <p className='prose prose-lg prose-indigo text-justify  text-gray-500  mb-8 leading-7'>{ des}</p>
                                    ))
                                }
                                {/* <p className='prose prose-lg prose-indigo text-justify  text-gray-500'>{data.description}</p> */}
                            
                            </div>
                        </div>
                    ))
                }
            </div>



        </div>
    )
}

export default Solution