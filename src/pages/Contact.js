import React from "react";
import BannerImage from '../assets/2blackbean.jpeg';

const Contact =()=>{
    return(
        <div className="contact">
        <div className="leftSide"style={{backgroundImage: `url(${BannerImage})`}} ></div>
        <div className="rightSide">
        <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder='Enter full name...' type="text"/>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder='Enter full email...' type="email"/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" required rows="6" placeholder='Enter message...'></textarea>
                    <button type='submit'>Send Message</button>
            </form>
        </div>

        </div>
    )
}
export default Contact