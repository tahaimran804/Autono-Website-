import Navbar from './Navbar'
import Headroom from 'react-headroom'
import SameComponts from './SameComponts'


const Technology = () => {
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
      <section className='Tech_Sec_1'>
        <div className='MAin_hedding'>
          <h1>PERCEPTION ENABLED TECHNOLOGY</h1>
          <img src="/Images/Bus-1.webp" alt="Image" />
          <p>Click here to edit this paragraph and add your own content. This is a great place to expand on the title and any relevant details or information.</p>
        </div>
      </section>
      <SameComponts theme="dark" image='/Images/Car-1.webp' Titel='THE AUTONO CAR' Para='Using groundbreaking perception-enabled sensor technology, the Autono car is a fully driverless vehicle engineered to the highest degree of precision and safety. It’s autonomous driving reimagined.' Degsin='HUMAN-CENTERED DESIGN' DegsinPra="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." efe='​LOW EMISSIONS & EFFICIENCY' efePara="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you" />
      <SameComponts theme="light" image='/Images/FeatureAboutbus.webp' Titel='THE AUTONO DIGITAL PRODUCTS' Para='We’ve developed an app so that each vehicle can drive autonomously and make decisions based on real-time information and situational awareness.' Degsin='ADVANCED CYBER SECURITY' DegsinPra="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." efe='REAL-TIME INFORMATION' efePara="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." />

    </>
  )
}

export default Technology
