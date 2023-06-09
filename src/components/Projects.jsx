import React from "react";
import projectData from "../assets/data/projectData";
import "./Projects.css"

const Projects = () => {
    return (
        <section id="projects" className="section-container">
            <div className="glassmorphism">
                <h2>Projects</h2>
                <div className="projects-content">
                    {projectData.map(element => {
                        return (
                            <div key={element.id} className="projects-content_column grow">
                                <h3>{element.title}</h3>
                                <p>{element.description}</p>
                                <div className="project_links">
                                    {element.github.backend ? (<a href={element.github.backend} className="backend_link" target="_blank" rel="noopener noreferrer">Back End</a>) : ''}
                                    {element.github.frontend ? (<a href={element.github.frontend} className="frontend_link" target="_blank" rel="noopener noreferrer">Front End</a>) : ''}
                                </div>
                                <img src={`${element.image}`} alt="{element.image}"></img>
                            </div>
                        )
                    })
                    }
                </div>
                </div>
        </section>
    )
}

export default Projects

// inline styling for project tile background image -> style={{backgroundImage: `url(${element.image})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", overflow: "hidden"}}