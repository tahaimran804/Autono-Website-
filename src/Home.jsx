import React, { useEffect } from 'react'
import Navbar from './Navbar';
import Headroom from 'react-headroom'
import Same from './Same'
import { FaArrowRight } from "react-icons/fa6";
import Bnt from './Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom'



const Home = (props) => {
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom',
    });
  }, []);
  const BusImage = 'https://static.wixstatic.com/media/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg/v1/fill/w_588,h_840,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg'
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
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

  return (
    <>
      <header>
        <div>
          <div className='bg_bular'>
            <img src="https://static.wixstatic.com/media/84770f_3ebbf7ac3e26427b83ca50c82aabaaf8~mv2.png/v1/fill/w_1343,h_600,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/84770f_3ebbf7ac3e26427b83ca50c82aabaaf8~mv2.png" alt="" />
          </div>

          <Headroom
            style={{
              webkitTransition: 'all .100s ease-in-out',
              mozTransition: 'all .1s ease-in-out',
              oTransition: 'all .1s ease-in-out',
              transition: 'all .1s ease-in-out',
              zIndex: '10000000',
            }}
          >
            <Navbar />
          </Headroom>
          <div className="Hedding_paragraph">
            <h1>THE FUTURE OF MOBILITY IS HERE</h1>
            <p>Discover the safest self-driving experience with Autono.</p>
          </div>
        </div>
      </header>
      <section className='section_1'>
        <div className="About_MY_Bus">

          <div className="left-side">
            <div className="Lines">
              <pre className='line'></pre>
              <pre className='line-1' data-aos="fade-down"></pre>
            </div>
            <div className='VISION_Of_MY_Bus'>
              <div className="Heddding">
                <strong>VISION</strong>
                <h1>We’re Changing the Way the World Thinks About Cars</h1>
              </div>
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
          </div>

          <div className="My_Bus_Image"></div>
          <img data-aos="fade-up" src={BusImage} alt="" style={{ width: '100%', height: '100%' }} className='butimg' />
        </div>

      </section>

      <section className='section_2'>
        <div className="Services">
          <div className='services_Hedding'>
            <div className="Anim_Lines">
              <pre></pre>
              <h2 data-aos='fade-down'></h2>
            </div>
            <div className="Texts">
              <strong>SERVICES</strong>
              <h1>We Deliver Exceptional Products and Services Around the World</h1>
            </div>
          </div>
        </div>
        <Same hedding='AUTONOMOUS DRIVING' titel=" I m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." image='https://static.wixstatic.com/media/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg/v1/fill/w_672,h_680,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg' />
      </section>

      <section className='Section_3'>
        <Same
          hedding='REAL-TIME INFORMATION'
          titel="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
          image='https://static.wixstatic.com/media/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg/v1/fill/w_672,h_680,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg'
        />
      </section>

      <section className='Section_4'>
        <Same hedding='PERCEPTION ENABLED' titel="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." image='https://static.wixstatic.com/media/c837a6_305ff8a7722a479ab58f1d4f2729586e~mv2.jpg/v1/fill/w_672,h_680,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_305ff8a7722a479ab58f1d4f2729586e~mv2.jpg' />
      </section>

      <section className='section_5'>
        <div id='bgImage-1'> </div>
        <div className="textbox">
          <div className="about_my_mechine">
            <div className="SLines">
              <pre className='side-line'></pre>
              <pre data-aos='fade-down' className='side-line-1'></pre>
            </div>
            <div className="texts">
              <strong>WHY AUTONO</strong>
              <h1>A different approach, using a new method of manufacturing.</h1>
              <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <div className="Read_more_bnts">
                <NavLink to='/about'><button className='bnt-2'>Read More</button></NavLink>
                <span><FaArrowRight /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section_6'>
        <div data-aos='fade-right' className="Mechine_img"><img src="/Images/Mechine.webp" alt="" /></div>

        <div className="Autono_In_Numbers">
          <strong>Autono In Numbers</strong>

          <div className="Our_EMPLOYEES">
            <div className="emplo">
              <h1>200</h1>
              <div><pre className='light-line1'></pre><pre className='dark_line1'></pre></div>
              <p>EMPLOYEES</p>
            </div>
            <div className="emplo">
              <h1>5</h1>
              <div><pre className='light-line1'></pre><pre className='dark_line1'></pre></div>
              <p>CORE TEAMS</p>
            </div>
          </div>

          <div className="Our_EMPLOYEES">
            <div className="emplo">
              <h1>200M$</h1>
              <div><pre className='light-line1'></pre><pre className='dark_line1'></pre></div>
              <p>CAPITAL</p>
            </div>
            <div className="emplo">
              <h1>326</h1>
              <div><pre className='light-line1'></pre><pre className='dark_line1'></pre></div>
              <p>PARTNERS</p>
            </div>
          </div>

          <div className="Our_Capitals"></div>
        </div>
      </section>

      <section className='section_7'>
        <div className="INDUSTRY_Our_Partners">

          <div className="Iline">
            <pre className='I1'></pre>
            <pre data-aos='fade-down' className='I2'></pre>
          </div>

          <div className="texts-1">
            <strong>INDUSTRY</strong>
            <h1>Our <span>Partners</span></h1>
            <p>Click here to add your own content and customize the text. This is a great place to tell a story about your company and let your users know a little more about the company's history, the team's background, or any other information you'd like to share. Just click "Edit Text" to get started.</p>
          </div>

        </div>

        <div className="Our_Partners_logo">

          <div className='images'>

            <div className="top_image">
              <div className='GENERAL_TRANSPORT'>
                <img src="https://static.wixstatic.com/media/c837a6_a8508672733a4bb7ba100662952d4f6f~mv2.png/v1/fill/w_126,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/General_Transport.png" alt="" />
                <p>GENERAL TRANSPORT</p>
              </div>

              <div className='IMOGEN_CARS'>
                <img src="Images/Tri-Nex .webp" alt="" />
                <p>TRI-NEX</p>
              </div>


            </div>

            <div className="bottom_image">

              <div className='IDI_SOFTWARE'>
                <img src="https://static.wixstatic.com/media/c837a6_24669e1d20cd4f079fd2ea5e253c99b8~mv2.png/v1/fill/w_79,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IDI_Software.png" alt="" />
                <p>IDI SOFTWARE</p>
              </div>

              <div className='IMOGEN_CARS'>
                <img src="Images/Imogen_Cars.webp" alt="" />
                <p>IMOGEN CARS </p>
              </div>



            </div>

          </div>
        </div>

      </section>

      <section className='section_8'>
        <div className="left-side">

          <div className="Ilines">
            <pre className='I3'></pre>
            <pre data-aos='fade-down' className='I4'></pre>
          </div>

          <div className="texts-2">

            <strong>INDUSTRY</strong>

            <h1>Our <span>Partners</span></h1>

            <p>Click here to add your own content and customize the text. This is a great place to tell a story about your company and let your users know a little more about the company's history, the team's background, or any other information you'd like to share. Just click "Edit Text" to get started.</p>

            <div className="Read_more_bnts">
              <NavLink to='/about'> <button className='bnt-2'>Openings</button></NavLink>
              <span><FaArrowRight /></span>
            </div>

          </div>


        </div>


        <div className="right-side">
          <Carousel responsive={responsive} keyBoardControl={true} showDots={true} swipeable={false} draggable={false}
            customTransition="all .8"
            transitionDuration={1000}
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            icons={false}>

            <div className='slicder'>
              <div className='People_About'>
                <h1>ARTIFICIAL INTELLIGENCE RESEARCHER</h1>
                <strong>San Francisco, CA</strong>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              </div>

              <div className="Read_more_bnts-1">
                <NavLink to='/Careers'><button className='bnt-4'>Apply Now</button></NavLink>
                <span><FaArrowRight /></span>
              </div>
            </div>

            <div className='slicder'>

              <div className='People_About'>
                <h1>ELECTRICAL ENGINEER</h1>
                <strong>San Francisco, CA</strong>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
              </div>

              <div className="Read_more_bnts-1">
                <button className='bnt-4'>Apply Now</button>
                <span><FaArrowRight /></span>
              </div>

            </div>

            <div className='slicder'>
              <div className='People_About'>
                <h1>DATA SCIENTIST</h1>
                <strong>San Francisco, CA</strong>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              </div>

              <div className="Read_more_bnts-1">
                <button className='bnt-4'>Apply Now</button>
                <span><FaArrowRight /></span>
              </div>
            </div>

            <div className='slicder'>
              <div className='People_About'>
                <h1>ADEEP LEARNING ENGINEER</h1>
                <strong>San Francisco, CA</strong>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              </div>

              <div className="Read_more_bnts-1">
                <button className='bnt-4'>Apply Now</button>
                <span><FaArrowRight /></span>
              </div>
            </div>

          </Carousel>
        </div>
      </section>
    </>
  )
}

export default Home
