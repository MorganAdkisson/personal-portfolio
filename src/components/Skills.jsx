import React from "react";
import "./Skills.css";

const Skills = () => {
    const languages = ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "SQL", "Java"]
    const development = ["React.js", "Node.js", "PostgreSQL", "Flask", "Jest"]
    const tools = ["Git", "GitHub", "Vim", "AWS", "Docker", "Postman"]

    return (
        <section id="skills" className="section-container skills">
            <div className="glassmorphism">
                <h2>Technical Skills</h2>
                <div className="skills-content">
                    <div className="skills-content_container">
                        <h3 className="section-header">Programming Languages</h3>
                        <hr/>
                        <ul>
                            {languages.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                    <div className="skills-content_container">
                        <h3 className="section-header">Web Development</h3>
                        <hr/>
                        <ul>
                            {development.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                    <div className="skills-content_container">
                        <h3 className="section-header">Tools & Technologies</h3>
                        <hr/>
                        <ul>
                            {tools.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;