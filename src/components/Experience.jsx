import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import experienceData from "../assets/data/experienceData";

import "./Experience.css"

const Experience = () => {
    return (
        <section id="experience" className="section-container">
            {/* <div className="glassmorphism"> */}
            <div className="experience-content glassmorphism">
                <h2>Experience</h2>
                <div>
                    <VerticalTimeline lineColor="#b4673eff">
                    {experienceData.map(element => {
                        return (
                            <VerticalTimelineElement
                            key={element.id}
                            date={element.dates}
                            icon={element.icon}
                            iconStyle={element.style}
                            >
                            <h3 className="experience-content_title">
                                {element.title}
                            </h3>
                            <a className="vertical-timeline-element-title" href={element.website} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                                {element.org}
                            </a>
                            <p id="description">{element.description}</p>
                            </VerticalTimelineElement>
                        )
                        })}
                    </VerticalTimeline>
                </div>
            </div>
            {/* </div> */}
        </section>
    );
};

export default Experience;