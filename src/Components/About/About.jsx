import React, { useEffect } from 'react';
import $ from "jquery";
import "./About.css";

function About() {

    useEffect(()=>{
        $(".aboutContent").animate({
            height: '100%' ,
        },2000)
    })
    return (
        <div className="about container p-4 text-white">
            <div className="aboutContent m-auto">
                <h2 className='mb-4 fw-bold'>Introduction</h2>
                <p className='opacity-50'>
                    Hi, I'm Abdelrahman Ahmed, a dedicated frontend developer with a passion for combining 
                    technology and creativity. I hold a Bachelor’s degree in Computers and Artificial Intelligence from Cairo University, 
                    specializing in Information Technology. With a focus on delivering intuitive, 
                    responsive user interfaces, I enjoy tackling complex problems with clean and efficient solutions.
                </p>
                <hr />
                <h2 className='mb-4 fw-bold'>Professional Journey</h2>
                <p className='opacity-50'>
                    My journey into tech began during my university studies, where I developed a deep interest in web development
                    and artificial intelligence. Over the years, I’ve honed my skills in various programming languages and frameworks, 
                    working on projects that span from AI-driven applications to dynamic web platforms.
                </p>
                <hr />
                <h2 className='mb-4 fw-bold'>Current Focus</h2>
                <p className='opacity-50'>
                    Currently, I am enhancing my skills in React, Next.js and React-Native while working on 
                    projects that challenge me to apply modern best practices in web development. 
                    I’m also focused on improving problem-solving skills by participating in coding challenges on platforms like Codeforces.
                </p>
                <hr />
                <h2 className='mb-3 fw-bold'>Personal Interests</h2>
                <p className='opacity-50'>
                    Outside of work, I’m an avid learner of new technologies, particularly in the field of AI and machine learning. 
                    I also enjoy participating in coding competitions, solving algorithms, and contributing to open-source projects.
                </p>
            </div>
        </div>
    )
}

export default About;
