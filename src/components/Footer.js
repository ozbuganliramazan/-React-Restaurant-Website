import React from "react";
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'





const Footer=()=>{
    return(
        <div className="footer">
            <div className="socialMedia">
            <p> &copy: 2023 burger36.com</p>
            <FaInstagram/>
            <FaTwitter/>
            <FaGithub/>
            
            
            
            
            </div>
        </div>
    )
}

export default Footer