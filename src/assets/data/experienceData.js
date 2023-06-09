import React from "react";
import { MdScubaDiving, MdOutlineSchool } from "react-icons/md"
import { BsPersonWorkspace } from "react-icons/bs"

const experienceData = [
    {
        "id": 1,
        "org": "Amazon", 
        "title": "Software Development Engineer Intern", 
        "dates": "August 2022 - January 2022", 
        "description": "Researched, designed, developed, and tested the adoption of Pendo.io to track event-based user metrics to gather meaningful KPIs. Exceeded project deliverables and deadline by extending implementation from 3 product modules to the entirety of Amazon Time with one centralized call and completed the project 2 months ahead of schedule. Collaborated with a senior SDE on my team to integrate WebLab, Amazon’s internal tool for A/B Testing and Feature Gating, into Amazon Time." ,
        "icon": <BsPersonWorkspace/>, 
        "style": {background: "#82C26E"},
        "website": "https://www.amazon.jobs/en/teams/time-and-attendance"
    },
    {
        "id": 2,
        "org": "Ada Developer Academy", 
        "title": "Full Stack Software Engineering Student", 
        "dates": "March 2022 - January 2023", 
        "description": "Highly-selective full stack software development program for woman and gender-expansive adults consisting of a 6 month project-based classroom portion paired with a 5 month internship. Capstone Project: Worked with staff at Puget Sound Restoration Fund, a Washington-based non-profit focused on restoration of native marine species, to build an animal inventory management system for their Pinto Abalone Recovery Program.",
        "icon": <MdOutlineSchool/>, 
        "style": {background: "#fe938c"},
        "website": "https://adadevelopersacademy.org/"
    }, 
    {
        "id": 3,
        "org": "Puget Sound Restoration Fund", 
        "title": "Shellfish Biologist", 
        "dates": "September 2018 - February 2022",
        "description": "Oversaw daily nursery operations for animals and life support systems. I also managed program partnership relationships with satellite facilities (Port Townsend Marine Science Center and Seattle Aquarium).",
        "icon": <MdScubaDiving/>,
        "style": {background: "#7CCAD5"},
        "website": "https://restorationfund.org/programs/pintoabalone/"
    },
    {
        "id": 4,
        "org": "Puget Sound Restoration Fund", 
        "title": "Hatchery Technician", 
        "dates": "October 2017 - September 2018", 
        "description": "Specialized abalone hatchery technician on the Pinto Abalone Recovery Project. Provided husbandry for Pinto Abalone at all life stages (larvae, post-settlement juveniles, adult/broodstock). Assisted in fieldwork, provided cross-program support for other restoration initiatives.",
        "icon": <MdScubaDiving/>,
        "style": {background: "#7CCAD5"},
        "website": "https://restorationfund.org/programs/pintoabalone/"
    },
]

export default experienceData;