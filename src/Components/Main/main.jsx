import React,{useEffect} from 'react'
import "./main.css"
import "./main.scss"
import img from "../../Assets/img.jpg"
import img2 from "../../Assets/img2.jpg"
import img3 from "../../Assets/img3.jpg"
import img4 from "../../Assets/img4.jpg"
import img5 from "../../Assets/img5.jpg"
import img6 from "../../Assets/img6.jpg"
import img7 from "../../Assets/img7.jpg"
import img8 from "../../Assets/img8.jpg"
import img9 from "../../Assets/img9.jpg"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import Aos from 'aos';
import 'aos/dist/aos.css'


const Data = [
  {
    id:1,
    imgSrc:img,
    destTitle:'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activities'
  },

  {
    id:2,
    imgSrc:img2,
    destTitle:'Machu picchu',
    location: 'peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayna picchu is a mountain in paru, rising over Machu Picchu, the so-called Lost city of incas. This place is popular among tourists as the sunrise from the sun gate is simply spectacular' 
  },

  {
    id:3,
    imgSrc:img3,
    destTitle:'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia' 
  },

  {
  id:4,
  imgSrc:img4,
  destTitle:'Cappadocia',
  location: 'Turkey',
  grade: 'CULTURAL RELAX',
  fees: '$800',
  description: 'According to the world tourisum ranking , 45 million pepole visit turkey each year, and form that about 2 milions come to visite cappadocia. This place is kown for its laxuruiis stays and adventures activities',
  },


    {
      id:5,
      imgSrc:img5,
      destTitle:'Guanajuato',
      location: 'Mexico',
      grade: 'CULTURAL RELAX',
      fees: '$1100',
      description: 'Guanajuato, estado (state), central Mexico. It is bounded by the states of San Luis Potosí to the north and northeast, Querétaro to the east, Michoacán to the south, and Jalisco to the west.'
      },

      {
        id:6,
        imgSrc:img6,
        destTitle:'Angkor Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$790',
        description: 'Angkor Wat lies 5.5 kilometres (3+1⁄2 mi) north of the modern town of Siem Reap, and a short distance south and slightly east of the previous capital'
        },

        {
          id:7,
          imgSrc:img7,
          destTitle:'Taj Mahal',
          location: 'India',
          grade: 'CULTURAL RELAX',
          fees: '$900',
          description: 'The Taj Mahal is located on the right bank of the Yamuna River in a vast Mughal garden that encompasses nearly 17 hectares, in the Agra District in Uttar Pradesh.'
          },

          {
            id:8,
            imgSrc:img8,
            destTitle:'Bali Island',
            location: 'Indonesia',
            grade: 'CULTURAL RELAX',
            fees: '$700',
            description: 'Bali was inhabited around 2000 BC by Austronesian people who migrated originally from the island of Taiwan to Southeast Asia and Oceania through Maritime Southeast Asia.'
            },

            {
              id:9,
              imgSrc:img9,
              destTitle:'Cinque Terre',
              location: 'Italy',
              grade: 'CULTURAL RELAX',
              fees: '$840',
              description: 'Cinque Terre is mentioned in documents dating to the 11th century. Monterosso and Vernazza were settled first and the other villages grew later, whilst within the territory of the Republic of Genoa.'
              },
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])


  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
        Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
          return(
            <div key={id} data-aos='fade-up' className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

               <div className="cardInfo">
                <h4 className='destTitle'>
                  {destTitle}</h4>
                  <span className='continent flex'>
                  <HiOutlineLocationMarker className='icon'/>
                  <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade} <small>+1</small></span>
                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>


                  <button className='btn flex'>
                    DETAILS <LuClipboardCheck className='icon'/>
                  </button>

              </div> 
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Main;