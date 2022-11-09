import React from "react";
import  { BsLinkedin,BsInstagram,BsGithub } from 'react-icons/bs'

const HeaderSocials = ()=>{
    return(
        <div className="header__socails">
            <a href="https://linkdin.com" target='_blank'> <BsLinkedin/> </a>
            <a href="https://instagram.com" target='_blank'><BsInstagram /></a>
            <a href="https://github.com" target='_blank'><BsGithub /></a>
        </div>
    )
}
export default HeaderSocials;