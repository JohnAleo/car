import React from 'react'
import { NavbarComponent,Navbarleft,Navbarright,Navbarmiddle,Enwrapper,Navbarwrapper,Homemotors } from '../style/navbarstyle'
import icon from './navbar asset/icon.png'
import rolling from './navbar asset/rolling.png'
import strelka from './navbar asset/strelka.png'
import navbarcar from './navbar asset/navbarcar.png'
import { Center } from '../style/motorstyle'

const Navbar = () => {
  return (
    <NavbarComponent>
        <Navbarwrapper>
        <Navbarleft>
            <div>Camper</div>
        </Navbarleft>
        <Navbarmiddle>
                <div>Motor <img src={strelka} alt="strelka" /></div>
                <div>Caravan <img src={strelka} alt="strelka" /></div>
                <div>Tuning <img src={strelka} alt="strelka" /></div>
                <div>Used Car <img src={strelka} alt="strelka" /></div>
                <div>Camping Place</div>
        </Navbarmiddle>
        <Navbarright>
            
             <img src={rolling} alt="rolling" />  
                <img src={icon} alt="icon" /> 
                <Enwrapper><p>En</p> <img src={strelka} alt="strelka"/></Enwrapper>
              
        </Navbarright>
        </Navbarwrapper>
        <img src={navbarcar} alt="navbarcar" style={{zIndex:'1'}}/>
        <Center>
        <Homemotors>
            <p>Home / Motors</p>
            <h3>Our ranges</h3>
            <h1>Motors</h1>
        </Homemotors>
        </Center>
    </NavbarComponent>
  )
}

export default Navbar;