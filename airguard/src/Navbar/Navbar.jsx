import React, { useState } from 'react';
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <header>
      <div className="logo">
        <h3>AirGuard</h3>
        {/* <p>Grow Your Business</p> */}
      </div>
      <div className="links">
        <ul className='Nav-ul'>
          {/* <li>Home</li> */}
          <li>About</li>
          <li>Products</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="signup">
        <button>Sign Up</button>
      </div>
      <svg
        className={`svg1 ${isNavbarVisible ? 'show' : ''}`}
        onClick={toggleNavbar}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="35"
        height="35"
        viewBox="0,0,256,256"
      >
        <g
          fill="#242c56"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
          style={{ mixBlendMode: 'normal' }}
        >
          <g transform="scale(10.66667,10.66667)">
            <path d="M2,5v2h20v-2zM2,11v2h20v-2zM2,17v2h20v-2z"></path>
          </g>
        </g>
      </svg>
      <svg
        className={`svg2 ${isNavbarVisible ? 'show' : ''}`}
        onClick={toggleNavbar}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="35"
        height="35"
        viewBox="0 0 24 24"
      >
        <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
      </svg>
      <div className={`navbar-sm ${isNavbarVisible ? 'show' : ''}`}>
        <ul>
          {/* <li>Home</li> */}
          <li>About</li>
          <li>Products</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
