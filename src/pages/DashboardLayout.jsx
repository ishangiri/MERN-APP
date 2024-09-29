import React, { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { NavBar, SideBar, SmallSideBar } from '../components'



const DashboardContext = createContext()

const DashboardLayout = () => {

  const user = {name: "IShan"}
  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleDarkTHeme = () => {
    console.log('toggle dark');
    
  }

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar)
    console.log("hey man");
     
  }

  const logoutUSer = async() => {
    console.log("Logout User");
    
  }

  return (
<DashboardContext.Provider value={{user, showSideBar, isDarkTheme, logoutUSer, toggleDarkTHeme, toggleSideBar}}>
   <Wrapper>
    <main className="dashboard">
      <SmallSideBar />
      <SideBar />
      <div>
        <NavBar />
        <div className='dashboard-page'>
         <Outlet />
        </div>
      </div>
    </main>
   </Wrapper>
  </DashboardContext.Provider>
  );

};
export const useDashboardContext = () => {
 return useContext(DashboardContext);
}


export default DashboardLayout