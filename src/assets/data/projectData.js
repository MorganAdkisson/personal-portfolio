import { capstone, weatherReport, taskList, inspoBoard } from "../images";

const projectData = [
  {
    "id": 1, 
    "title": "Animal Inventory System", 
    "description": "Full stack inventory management system built in collaboration with Puget Sound Restoration Fund's Pinto Abalone Recovery Program. The goal of the project was to standardize data collection across partner facilities.", 
    "tech": "JavaScript, React, MaterialUI, Ant Design, ChartJS, Python, Flask, PostgreSQL",
    "github": {
      "frontend": "https://github.com/MorganAdkisson/MorganAdkisson-frontend-capstone-inventoryApp", 
      "backend": "https://github.com/MorganAdkisson/backend-capstone-inventoryApp"
    }, 
    "image": capstone
  },
  {
    "id": 2, 
    "title": "Inspiration Board", 
    "description": "Full stack digital mood board/inspiration board application that enables user's to create different bulletin boards with customized inspirational quote cards.", 
    "tech": "JavaScript, React, Python, Flask, SQLAlchemy, PostgreSQL, Slack API", 
    "github": {
      "frontend": "https://github.com/VidaMaleki/front-end-inspiration-board", 
      "backend": "https://github.com/VidaMaleki/back-end-inspiration-board"
    }, 
    "image": inspoBoard
  }, 
  {
    "id": 3, 
    "title": "Weather Report", 
    "description": "Front end project that leverages the LocationIQ API to get Forward Geocoding of a user's entered location and pass it along to the OpenWeather API to return the locations current weather and forecasting", 
    "tech": "JavaScript, HTML/CSS, Axios, LocationIQ API, OpenWeather API", 
    "github": {
      "frontend": "https://github.com/MorganAdkisson/weather-report"
    }, 
    "image": weatherReport
  }, 
  {
    "id": 4, 
    "title": "Task List API", 
    "description": "Custom RESTful API for task lists and associated goals. Allows API user's to create, mark as complete, delete, and update goals & tasks, with built-in query params for sorting lists. Additional SlackBot functionality to send updates for task and goal completion.", 
    "tech": "Python, Flask, SQLAlchemy, Slack API", 
    "github": {
      "backend": "https://github.com/MorganAdkisson/task-list-api"
    }, 
    "image": taskList
  }
]

export default projectData;