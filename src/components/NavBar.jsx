import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft } from "react-icons/fa";
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';


const NavBar = () => {

    const {toggleSideBar} = useDashboardContext();

  return (
    <Wrapper>
        <div className='nav-center'>
            <button type='button' className='toggle-btn'
             onClick={toggleSideBar}
            >
                <FaAlignLeft />
            </button>
            <div>
                <Logo />
                <h4 className='logo-text'>Dashboard</h4>
            </div>
            <div className="btn-container">
                toggle/logout
            </div>
        </div>
    </Wrapper>
  )
}

export default NavBar