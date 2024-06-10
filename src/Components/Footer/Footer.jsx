import React, { useState } from 'react'
import './Style.css'
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  const [active, setActive] = useState('home');

  const handleMenu = (item) => {
    setActive(item);
  };

  return (
   <>
    <footer>
      <section>
      <h1>BrandPosty</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmod tempor indidunt ut labore et dolore magna</p>
      </section>
      <section>
        <h2> Our Policy</h2>
        <Link to={'/about'} className={active === 'about-2' ? 'active' : ''} onClick={() => handleMenu('about-2')}> About Us</Link>
        <Link to={'/contact'} className={active === 'contact-2' ? 'active' : ''} onClick={() => handleMenu('contact-2')}> Contact Us</Link>
        <Link to={'/disclaimer'} className={active === 'disclaimer' ? 'active' : ''} onClick={() => handleMenu('disclaimer')}> Disclaimer</Link>
        <Link to={'/'} className={active === 'home-2' ? 'active' : ''} onClick={() => handleMenu('home-2')}> Home</Link>
        <Link to={'/privacy-policy'} className={active === 'policy' ? 'active' : ''} onClick={() => handleMenu('policy')}> Privacy Policy</Link>
        <Link to={'/services'} className={active === 'services-2' ? 'active' : ''} onClick={() => handleMenu('services-2')}>Services</Link>
      </section>
      <section>
        <h2>Useful Links</h2>
        <Link to={'/'}  className={active === 'home' ? 'active' : ''} onClick={() => handleMenu('home')}> Home</Link>
        <Link to={'/services'} className={active === 'services' ? 'active' : ''} onClick={() => handleMenu('services')}>Services</Link>
        <Link to={'/about'}  className={active === 'about' ? 'active' : ''} onClick={() => handleMenu('about')}> About</Link>
        <Link to={'/contact'}  className={active === 'contact' ? 'active' : ''} onClick={() => handleMenu('contact')}> Contact </Link>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p className='contact'><FaPhoneAlt size={18}/> 8605599321</p>
        <p className='email'><MdEmail size={18} /> brandsposty2022@gmail.com</p>
        <p className='location'><FaLocationDot size={18} />&nbsp; Basmath, Dist.Hingoli, Maharashtra, India. 431512</p>
      </section>
    </footer>
    <div className="sm-footer">
      <p>Copyright © 2024 BrandPosty | All Rights Reserved</p>
    </div>
   </>
  )
}

export default Footer