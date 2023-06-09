import React from "react";
import "./Hero.css"
import headshot from "../assets/images/me.png";
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { AiOutlineMail } from "react-icons/ai"

const About = () => {
    return (
        <div id="about" className="section-container about">
            <section className="about-content">
                <div className="about-content_left">
                    <img width="400px" className="headshot" src={headshot} alt="Headshot"></img>
                </div>
                <div className="about-content_right">
                    <p>
                        Hello and welcome! My name is <span className="lg-text">Morgan Adkisson</span> I'm a Software Engineer based in Seattle, WA. I recently transitioned to development from a career in Marine Biology and Restoration. 
                        I recently completed Ada Developers Academy and an internship at Amazon. I'm currently open to new roles. Head over to <a href='https://www.linkedin.com/in/morganadkisson/' style={{textDecoration:'none', color:'black', fontWeight:'bolder'}}>LinkedIn</a> to get connected! 
                    </p>
                    <div className="icons">
                        <a href="https://github.com/MorganAdkisson" target="_blank" rel="noopener noreferrer">
                            <FiGithub/>
                        </a>
                        <a href="https://linkedin.com/in/morganadkisson" target="_blank" rel="noopener noreferrer">
                            <FiLinkedin/>
                        </a>
                        <button onClick={() =>  window.location = 'mailto:adkissonmorgan@gmail.com'}>
                            <AiOutlineMail/>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;