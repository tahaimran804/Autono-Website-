import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className='section_9'>
        <div className='footer_S'>
          <h1>AUTONO</h1>
          <div className="contact_us">

            <div className="Lists">
              <div>
                <li>Technology</li>
                <li>About</li>
                <li>Careers</li>
              </div>

              <div>
                <li>Tel: 123-456-7890</li>
                <li>Email: info@mysite.com</li>
                <li className='activeLink' >500 Terry Francine St San Francisco, CA 94158</li>
              </div>
            </div>

            <div className='subscribe'>
              <li>SUBSCRIBE</li>
              <li>Sign up to receive Autono news and updates</li>
              <li>Email *</li>
              <div className='serch_box'>
                <input type="email" />
                <button>Subscribe</button>
              </div>
            </div>


          </div>

        </div>

        <div className="Social_Meida">
          <h1>© 2035 by Autono. Powered and secured by Wix</h1>
          <div className='icons'>
            <FaLinkedin />
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
