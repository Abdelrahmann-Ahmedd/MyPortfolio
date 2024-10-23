import React, { useEffect } from 'react';
import $ from "jquery";
import "./Skills.css";

function Skills() {

    useEffect(()=>{
        $('.halfStack').fadeIn(2000)
        $('.half').fadeIn(2000)
    })


    return (
        <div className="skills container text-white">
            <div className="row h-50 gx-5 ">
                <div className="halfStack col-xl-6 p-5 shadow-lg">
                    <h2 className='fw-bold text-center mb-4'>Front-End Stack</h2>
                    <div className="colContent h-100 d-flex flex-column flex-wrap justify-content-evenly">
                        <div className='d-flex align-items-center mb-5' >
                            <i className="fa-3x fa-brands fa-html5"></i>
                            <span className='ms-2 fs-4 opacity-75 fw-bold'>HTML</span>
                        </div>
                        <div className='d-flex align-items-center mb-5' >
                            <i className="fa-3x text-primary fa-brands fa-css3-alt"></i>
                            <span className='ms-2 fs-4 opacity-75 fw-bold'>CSS</span>
                        </div>
                        <div className='d-flex align-items-center mb-5' >
                            <i className="fa-3x text-warning fa-brands fa-square-js"></i>
                            <span className='ms-2 fs-4 opacity-75 fw-bold'>JavaScript</span>
                        </div>
                        <div className='d-flex align-items-center mb-5' >
                            <i className="fa-3x fa-brands fa-bootstrap"></i>
                            <span className='ms-2 fs-4 opacity-75 fw-bold'>BootStrap</span>
                        </div>
                        <div className='d-flex align-items-center mb-5' >
                            <img className='jquery' src={require("../../Assets/pngwing.com.png")} alt="" />
                            <span className='ms-2 fs-4 opacity-75 fw-bold'>jQuery</span>
                        </div>
                        <div className='d-flex align-items-center mb-5' >
                            <i className="fa-3x text-info fa-brands fa-react"></i>
                            <span className='ms-2 fs-4 opacity-75 fw-bold'>React</span>
                        </div>
                    </div>
                </div>
                <div className="half col-xl-6 p-5  shadow-lg">
                    <h2 className='fw-bold text-center mb-5'>Programing Language</h2>
                    <div className="colContent h-100 d-flex flex-wrap justify-content-evenly">
                        <div className='d-flex align-items-center mb-5' >
                            <i className="fa-3x  fa-brands fa-java"></i>
                            <span className='ms-2 fs-4 opacity-75 fw-bold'>Java</span>
                        </div>
                        <div className='d-flex align-items-center mb-5' >
                            <i className="fa-3x fa-brands fa-python"></i>
                            <span className='ms-2 fs-4 opacity-75 fw-bold'>Python</span>
                        </div>
                        <div className='d-flex align-items-center mb-5' >
                            <img className='cplus' src={require('../../Assets/C++_logo.png')} alt="" />
                            <span className='ms-2 fs-4 opacity-75 fw-bold'>C++</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row h-50 gx-5">
                <div className="half col-xl-5 p-5 shadow">
                    <h2 className='fw-bold text-center mt-4'>Tools & Version Control</h2>
                    <div className="colContent h-100  pb-4 d-flex flex-wrap justify-content-center">
                        <div className='mb-3 d-flex align-items-center me-5' >
                            <i className="fa-3x  fa-brands fa-git-alt"></i>
                            <span className='ms-2 mb-3 fs-4 opacity-75 fw-bold'>Git</span>
                        </div>
                        <div className='mb-3 d-flex align-items-center me-5' >
                            <i className="fa-3x fa-brands fa-github"></i>
                            <span className='ms-2 mb-3 fs-4 opacity-75 fw-bold'>GitHub</span>
                        </div>
                        <div className='mb-3 d-flex align-items-center me-5' >
                            <i className="fa-3x fa-solid fa-database"></i>
                            <span className='ms-2 mb-3 fs-4 opacity-75 fw-bold'>MySQL</span>
                        </div>
                        <div className='mb-3 d-flex align-items-center me-5' >
                            <img className='postman' src={require('../../Assets/png-transparent-postman-macos-bigsur-icon-thumbnail.png')} alt="" />
                            <span className='ms-2 mb-3 fs-4 opacity-75 fw-bold'>PostMan</span>
                        </div>
                    </div>
                </div>
                <div className="half col-xl-7 shadow">
                    <h2 className='fw-bold text-center mt-4'>Development Practices</h2>
                    <div className="colContent h-75 d-flex flex-wrap justify-content-evenly align-items-center">
                        <div >
                            <span className='ms-2 fs-4 opacity-75 fw-bold'>OOP</span>
                        </div>
                        <div >
                            <span className='ms-2 fs-4 opacity-75 fw-bold'>DataStructure</span>
                        </div>
                        <div >
                            <span className='ms-2 fs-4 opacity-75 fw-bold'>Algorithms</span>
                        </div>
                        <div >
                            <span className='ms-2 fs-4 opacity-75 fw-bold'>ResponsiveDesign</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
