import React, { useState } from 'react';
import "./Projects.css";
import Card from './../Card/Card';
import imgSrc1 from "../../Assets/Screenshot (347).png";
import imgSrc2 from "../../Assets/Screenshot (357).png";
import imgSrc3 from "../../Assets/Screenshot (350).png";
import imgSrc4 from "../../Assets/Screenshot (351).png";
import imgSrc5 from "../../Assets/Screenshot (352).png";
import imgSrc6 from "../../Assets/Screenshot (353).png";
import imgSrc7 from "../../Assets/Screenshot (354).png";
import imgSrc8 from "../../Assets/Screenshot (355).png";
import imgSrc9 from "../../Assets/Screenshot (356).png";


function Projects() {

    const allProjects = [
        { id: 0, name: "Huddle Website", img: imgSrc1, devices: "Desktop Mobile", language: "HTML CSS", code: "https://github.com/Abdelrahmann-Ahmedd/huddle-landing-page-responsive", live: "https://abdelrahmann-ahmedd.github.io/huddle-landing-page-responsive/" },
        { id: 1, name: "Food Website", img: imgSrc2, devices: "Responsive", language: "HTML CSS Bootstrap", code: "https://github.com/Abdelrahmann-Ahmedd/food-website", live: "https://abdelrahmann-ahmedd.github.io/food-website/" },
        { id: 2, name: "Loopstudios website", img: imgSrc3, devices: "Desktop Mobile", language: "HTML CSS JS", code: "https://github.com/Abdelrahmann-Ahmedd/loopstudios-responsive", live: "https://abdelrahmann-ahmedd.github.io/loopstudios-responsive/" },
        { id: 3, name: "To Do App", img: imgSrc4, devices: "Responsive", language: "HTML CSS Bootstrap JS", code: "https://github.com/Abdelrahmann-Ahmedd/To-Do-App", live: "https://abdelrahmann-ahmedd.github.io/To-Do-App/" },
        { id: 5, name: "Calculator App", img: imgSrc5, devices: "Responsive", language: "HTML CSS JS", code: "https://github.com/Abdelrahmann-Ahmedd/calculator-app", live: "https://abdelrahmann-ahmedd.github.io/calculator-app/" },
        { id: 6, name: "Age Calculator App", img: imgSrc6, devices: "Responsive", language: "HTML CSS Bootstrap JS", code: "https://github.com/Abdelrahmann-Ahmedd/age-calculator-app", live: "https://abdelrahmann-ahmedd.github.io/age-calculator-app/" },
        { id: 7, name: "Ecommerce Product", img: imgSrc7, devices: "Responsive", language: "HTML CSS Bootstrap JS", code: "https://github.com/Abdelrahmann-Ahmedd/ecommerce-product-page", live: "https://abdelrahmann-ahmedd.github.io/ecommerce-product-page/" },
        { id: 8, name: "Easybank Website", img: imgSrc8, devices: "Responsive", language: "React Bootstrap", code: "https://github.com/Abdelrahmann-Ahmedd/Easybank", live: "https://abdelrahmann-ahmedd.github.io/Easybank/" },
        { id: 9, name: "Movie App", img: imgSrc9, devices: "Responsive", language: "React Bootstrap API", code: "https://github.com/Abdelrahmann-Ahmedd/movie", live: "https://abdelrahmann-ahmedd.github.io/movie" },
    ]

    const [projects,setProjects] = useState(allProjects);

    

    return (
        <div className="projects container p-4">
            <h2 className='text-white fs-1 fw-bold text-center mb-5'>Projects</h2>
            <div className="row">
                {projects.map((project)=>{ return <Card key= {project.id} details={project} /> })}
            </div>
            
        </div>
    )
}

export default Projects;
