import React from "react";
import './nav.css'
import {AiOutlineHome,AiOutlineUserAdd} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BsBook} from 'react-icons/bs'
import {MdPermContactCalendar} from 'react-icons/md'
import { useState } from "react";

const Nav = () =>{
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}> <AiOutlineHome/> </a> 
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}> <AiOutlineUserAdd/> </a> 
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}> <BsBook/> </a> 
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}> <RiServiceLine/> </a> 
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}> <MdPermContactCalendar/> </a>                  
        </nav>
    )
}

export default Nav