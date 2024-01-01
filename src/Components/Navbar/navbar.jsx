import React,{useState}  from 'react'
import "./navbar.css"
import "./navbar.scss"

import { SiYourtraveldottv } from "react-icons/si";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {

  const [active, setActive] = useState('navBar')
// function to taggle navBar
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

  // function to remove navBar
  const removeNavbar = ()=>{
    setActive('navBar')
  }

  return (
    <section className='navBarsection'>
     <header className='header flex'>
      <div className='logoDiv'>
        <a href="#" className='logo'>
          <h1><SiYourtraveldottv className="icon" /> Travel.</h1>
        </a>
      </div>

      <div className={active}>
        <ul className='navLists flex'>
          <li className='navItem'>
            <a href="#" className='navLink'>Home</a>
          </li>

          <li className='navItem'>
            <a href="#" className='navLink'>Pakages</a>
          </li>

          <li className='navItem'>
            <a href="#" className='navLink'>Shop</a>
          </li>

          <li className='navItem'>
            <a href="#" className='navLink'>About</a>
          </li>

          <li className='navItem'>
            <a href="#" className='navLink'>Pages</a>
          </li>

          <li className='navItem'>
            <a href="#" className='navLink'>News</a>
          </li>

          <li className='navItem'>
            <a href="#" className='navLink'>Contact</a>
          </li>

          <button className='btn'>
            <a href="#">BOOK NOW</a>
          </button>
          
          <div onClick={removeNavbar} className="closeNavbar">
            <IoMdCloseCircle className="icon" /></div>

        </ul>
      </div>

      <div onClick={showNav} className="toggleNavbar">
      <TbGridDots className='icon' />
      </div>
     </header>
      </section>
  )
}

export default Navbar
