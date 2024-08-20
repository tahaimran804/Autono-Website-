import React from 'react'
import Navbar from './Navbar'
import { FaArrowRight } from "react-icons/fa6";
import Headroom from 'react-headroom'
import Same3 from './Same3'
import Card from './Card';
const Carress = () => {
  return (
    <>

      <Headroom
        style={{
          webkitTransition: 'all .100s ease-in-out',
          mozTransition: 'all .1s ease-in-out',
          oTransition: 'all .1s ease-in-out',
          transition: 'all .1s ease-in-out',
          zIndex: '10000000',
          backgroundColor: '#fff',
        }}
      >
        <Navbar />
      </Headroom>
      <section className='Carres_sec_1'>
        <h1>WE MAKE <span>BIG IDEAS HAPPEN</span></h1>
        <strong>Join Us for the Ride</strong>
      </section>

      <section className='Carres_sec_2'>
        <Same3 theme='light' image='/Images/Bulding.webp' hedding='LOCATION' titel='We’re based in San Francisco’s innovation hub' paragraph="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you" />
      </section>

      <section className='Carres_sec_3'>
        <Same3 theme='dark' image='/Images/racing.webp' hedding='JOB OPENINGS' titel='Changing the future of transportation means thinking differently.' paragraph=" I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." />
      </section>

      <section className='carress_sec_4'>
        <Card hedding='ELECTRICAL ENGINEER' name='San Francisco, CA' titel="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. " />
        <Card hedding='DATA SCIENTIST' name='San Francisco, CA' titel="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you. " />
        <Card hedding='ARTIFICIAL INTELLIGENCE RESEARCHER' name='San Francisco, CA' titel="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. " />
        <Card hedding='​DEEP LEARNING ENGINEER' name='San Francisco, CA' titel="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." />
        <div className='cv'>
          <h1>
            Didn't find the position you're looking for?
            Send us your CV</h1>
          <div className="Submit">
            <button>Apply Now</button>
            <span><FaArrowRight /></span>
          </div>
        </div>
      </section>

    </>
  )
}

export default Carress
