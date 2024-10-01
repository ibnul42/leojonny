import React from 'react'
import Header from '../../Components/HeaderSection/index'
import Pagination from '../../Components/PaginationSection/index'
import PageHeader from '../../Components/PageHeader'
import { NavLink, useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate()
  const blogs = [
    {
      img: "/Assets/Blog/img1.png",
      date: "15 june 2023",
      title: "Introduction to Microsoft Technologies",
      content: "In this blog, we'll explore the diverse landscape of Microsoft Technologies, ranging from .NET framework to Azure cloud services. Microsoft technologies offer robust solutions for software development, enabling businesses to create scalable and secure applications across various platforms. From the widely-used C# programming language to the versatile Visual Studio IDE, Microsoft provides developers with a comprehensive ecosystem to build cutting-edge software solutions. We'll discuss how Microsoft's commitment to innovation drives continuous improvement in its technologies, fostering a vibrant community of developers and businesses. Additionally, we'll touch upon Microsoft's contributions to open-source projects and its collaborations with industry leaders, showcasing its commitment to driving technological advancements for the greater good. Whether it's developing desktop applications with WPF or building web applications with ASP.NET, Microsoft technologies provide powerful tools for developers to bring their ideas to life and stay competitive in today's fast-paced digital world."
    },
    {
      img: "/Assets/Blog/img2.png",
      date: "15 june 2023",
      title: "The Evolution of .NET Framework",
      content: "Dive into the evolution of the .NET framework, from its inception to the latest updates. .NET has come a long way since its introduction, offering developers a versatile platform for building applications for Windows, web, mobile, and beyond. We'll explore the rich history of .NET, from the early days of ASP.NET to the introduction of .NET Core and its evolution into .NET 5 and beyond. Along the way, we'll discuss the key features and improvements introduced in each version of .NET, highlighting how it has adapted to meet the changing needs of modern software development. From the introduction of language enhancements like C# 9 to the performance improvements in ASP.NET Core, we'll uncover how .NET continues to innovate and empower developers to build next-generation applications. Additionally, we'll delve into real-world case studies and success stories of companies leveraging .NET to drive innovation and achieve business goals, showcasing the practical applications and impact of Microsoft's technology stack."
    },
    {
      img: "/Assets/Blog/img3.png",
      date: "15 june 2023",
      title: "Harnessing the Power of Azure for Web Development",
      content: "Explore the capabilities of Microsoft Azure for web development projects. Azure provides a comprehensive suite of cloud services, including web hosting, databases, AI, and more, empowering developers to build and deploy scalable web applications with ease. From virtual machines to serverless computing with Azure Functions, we'll uncover how Azure accelerates development and enables seamless integration with Microsoft's development tools. We'll discuss how Azure's global network of data centers ensures high availability and reliability for web applications, allowing developers to focus on building great user experiences without worrying about infrastructure management. Additionally, we'll explore advanced topics such as DevOps automation, continuous integration, and deployment pipelines using Azure DevOps, highlighting how Azure enables teams to deliver software faster and more reliably. Whether you're a startup looking to scale rapidly or an enterprise seeking to modernize your IT infrastructure, Azure provides the tools and services you need to succeed in today's digital economy."
    },
    {
      img: "/Assets/Blog/img4.png",
      date: "15 june 2023",
      title: "Cross-Platform Mobile Development with Xamarin",
      content: "Discover how Xamarin simplifies cross-platform mobile development using C# and the .NET framework. With Xamarin, developers can write code once and deploy it across iOS, Android, and Windows platforms, saving time and resources. We'll delve into the architecture of Xamarin, its advantages, and best practices for building high-performance mobile apps that offer a native user experience on every device. From leveraging platform-specific APIs to optimizing UI for different screen sizes, we'll explore how Xamarin enables developers to deliver polished, feature-rich mobile applications without compromising on performance or user experience. Additionally, we'll showcase real-world examples of companies using Xamarin to streamline their mobile app development workflows and reach a broader audience across multiple platforms. Whether you're building consumer-facing apps or enterprise solutions, Xamarin empowers developers to deliver high-quality mobile experiences that drive user engagement and business growth."
    },
    {
      img: "/Assets/Blog/img5.png",
      date: "15 june 2023",
      title: "The Future of Web Development with Blazor",
      content: "Get ahead of the curve with Blazor, a cutting-edge framework for building interactive web applications using C# and .NET. Blazor combines the power of client-side web development with the simplicity and productivity of .NET, enabling developers to create rich, single-page applications without relying on JavaScript. Learn how Blazor's component-based architecture and server-side rendering make it a game-changer for modern web development. We'll explore the benefits of Blazor, including improved performance, simplified code maintenance, and seamless integration with existing .NET libraries and tools. Additionally, we'll discuss emerging trends in web development, such as WebAssembly and Progressive Web Apps (PWAs), and how Blazor positions developers to take advantage of these technologies to build next-generation web applications. Whether you're building internal dashboards, customer portals, or progressive web apps, Blazor offers a modern and efficient solution for building interactive web applications that delight users and drive business results."
    },
    {
      img: "/Assets/Blog/img6.png",
      date: "15 june 2023",
      title: "Optimizing Web Performance with ASP.NET Core",
      content: "Explore techniques for optimizing web performance using ASP.NET Core, Microsoft's open-source framework for building high-performance web applications. From implementing caching strategies to leveraging asynchronous programming, we'll discuss best practices for improving response times, reducing latency, and delivering an exceptional user experience. Learn how ASP.NET Core empowers developers to build lightning-fast web applications that scale effortlessly. We'll cover topics such as optimizing database queries, minimizing network overhead, and leveraging content delivery networks (CDNs) to serve static assets more efficiently. Additionally, we'll explore advanced optimization techniques, such as HTTP/2 server push and lazy loading of resources, to further enhance web performance and user experience. Whether you're building e-commerce websites, content management systems, or line-of-business applications, ASP.NET Core provides the tools and techniques you need to deliver blazing-fast web experiences that keep users engaged and satisfied."
    },
  ]

  const blogClickHandler = (title, description, source) => {
    navigate(`/blog/${title?.split(' ').join('-')}`, {
      state: {
        title,
        description,
        source
      }
    })
  }
  return (
    <div className=''>
      <PageHeader title={`Blogs`} />
      {/* Header Section  */}
      <Header name="Blog" />

      {/* Blogs Section  */}
      <section className='max-w-7xl mx-auto px-4 md:px-10 lg:px-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 lg:gap-20 my-16'>
          {
            blogs.map((blog, index) =>
              <div>
                <div>
                  <img className='mb-8' src={blog.img} alt="" />
                </div>
                <div>
                  <p className='text-gray-600 font-light mb-2'>{blog.date}</p>
                  <p className='text-xl md:text-2xl font-semibold line-clamp-2'>{blog.title}</p>
                  <p className='text-lg font-light text-gray-500 mt-3 mb-2 line-clamp-5'>{blog.content}</p>
                  <button
                    onClick={() => blogClickHandler(blog.title, blog.content, blog.img)} className='lg:text-lg font-semibold border-b border-gray-400'>Continue Reading</button>
                </div>
              </div>
            )
          }
        </div>
      </section>

      {/* Pagination Section  */}
      {/* <div className='flex items-center justify-center mt-20 mb-8'>
        <Pagination pages="4" selectedPage="3" />
      </div> */}

    </div>
  )
}

export default Index