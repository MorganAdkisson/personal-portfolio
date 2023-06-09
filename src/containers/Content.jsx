import React from 'react'
import "./Content.css"

import { Skills, Experience, Projects, Contact } from "../components"

const Content = () => {
    return (
        <div className='content'>
            <Skills /> 
            <Experience /> 
            <Projects /> 
            <Contact /> 
        </div>
    );
};

export default Content;
