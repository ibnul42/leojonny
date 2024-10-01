import React from 'react'
import Header from '../../Components/HeaderSection'
import Description from './Description/description'
import PageHeader from '../../Components/PageHeader'

const About = () => {
    return (
        <div className='mb-16'>
             <PageHeader title={`About`} />
            <Header name="About Us" />
            <Description />
        </div>
    )
}

export default About


