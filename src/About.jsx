import React, { useEffect } from 'react'
import Headroom from 'react-headroom'
import Navbar from './Navbar'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // whether animation should happen only once - while scrolling down
    });
  }, []);
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

      <section className='Abu_sec_1'>
        <h1>OUR JOURNEY</h1>
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
      </section>

      <section className='Abu_sec_2'>
        <div className='leftSide_5'>

          <div className="LingthLine">
            <pre className='lent-1'></pre>
            <pre data-aos='fade-up' className='lent-2'></pre>
          </div>

          <div className="Text-6">
            <strong>OUR MISSION</strong>
            <h1>Redefining the Way<span>We Move</span></h1>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <p>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. </p>
          </div>
        </div>

        <div className="RightSide5">
          <img data-aos='fade-up' src="/Images/Girl_Img.webp" alt="" />
        </div>
      </section>

      <section className='Abu_Sec-3'>
        <h1>Our Journey So Far</h1>
        <Carousel responsive={responsive} customTransition="all .8" transitionDuration={1500} showDots={true} infinite={true} autoPlay={props.deviceType !== "mobile" ? true : false} autoPlaySpeed={5000} keyBoardControl={true} icons={false} swipeable={false} draggable={false}>
          <div >
            <div className="Our_Journey">
              <div data-aos='fade-down' className="Jou_1">
                <h1>2013</h1>
                <strong>AUTONO IS FOUNDED</strong>
                <p>            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </p>
              </div>
              <div className="Jou_2 ">
                <pre data-aos='fade-down' className='dark-1'></pre>
                <pre data-aos='fade-up' className='dark-2'></pre>
              </div>
              <div data-aos='fade-up' className="Jou_3">
                <h1>2015</h1>
                <strong>GROUNDBREAKING SENSOR TECHNOLOGY LAUNCHED</strong>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="Our_Journey">
              <div data-aos='fade-down' className="Jou_1 ">
                <h1>2016</h1>
                <strong>SAN FRANCISCO HQ OPENS

                </strong>
                <p>            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </p>
              </div>
              <div className="Jou_2">
                <pre data-aos='fade-down' className='dark-1'></pre>
                <pre data-aos='fade-up' className='dark-2'></pre>
              </div>
              <div data-aos='fade-up' className="Jou_3 ">
                <h1>2017</h1>
                <strong>FIRST PROTOTYPE IS TEST-DRIVEN</strong>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="Our_Journey">
              <div className="Jou_1 ">
                <h1>2018</h1>
                <strong>PARTNERSHIP WITH TRI-NEX & GENERAL TRANSPORT INITIATED</strong>
                <p>            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </p>
              </div>
              <div className="Jou_2">
                <pre className='dark-1'></pre>
                <pre className='dark-2'></pre>
              </div>
              <div className="Jou_3 ">
                <h1>2019</h1>
                <strong>TESTING EXPANDS TO ARIZONA & NEW MEXICO</strong>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="Our_Journey">
              <div className="Jou_1 ">
                <h1>2020</h1>
                <strong>PRODUCTION BEGINS!</strong>
                <p>            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </p>
              </div>
              <div className="Jou_2">
                <pre className='dark-1'></pre>
                <pre className='dark-2'></pre>
              </div>
              <div className="Jou_3 ">
                <h1>2021</h1>
                <strong>FIRST 1,000 CARS SOLD</strong>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
              </div>
            </div>
          </div>

        </Carousel>;
      </section>


    </>
  )
}
export default About