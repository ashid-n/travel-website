import React,{useEffect} from 'react'
import "./footer.css"
import "./footer.scss"
import { FiSend } from "react-icons/fi";
import video2 from '../../Assets/video1.mp4'
import { SiYourtraveldottv } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css'







const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])


  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted typeof='video/mp4'></video>
      </div>

      <div className="setContent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div data-aos='fade-up' className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button className='btn flex' type='submit'>
               SEND <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" data-aos='fade-up' className='logo flex'>
              <SiYourtraveldottv 
              className="icon" /> Travel.
              </a>
            </div>

            <div data-aos='fade-up' className="footerParagraph">
            This is the version of our website addressed to speakers of English in India. If you are a resident of another country or region, please select the appropriate version of Tripadvisor for your country or region in the drop-down menu.
            </div>

            <div data-aos='fade-up' className="footerSocials flex">
            <FaXTwitter className='icon'/>
            <FaYoutube className='icon' />
            <FaInstagram className='icon' />
            <FaTripadvisor className='icon' />
            </div>
          </div>


          <div data-aos='fade-up' data-aos-duration="3000"  className="footerLink grid">
             {/*group one*/}
            <div className="linkGorup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Services
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Insurance
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Agency
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Tourism
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Payment
              </li>

            </div>

             {/*group two*/}
             <div data-aos='fade-up' data-aos-duration="4000"  className="linkGorup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Bookings
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Rentcars
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              HostelWorld
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Trivango
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              TripAdvisor
              </li>

             </div>


             {/*group three*/}
            <div data-aos='fade-up' data-aos-duration="5000"  className="linkGorup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              London
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              California
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Indonesia
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Europe
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Oceania
              </li>

            </div>


          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small><FaRegCopyright className='icon' /> 2024</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;