import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import $ from 'jquery';
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {


    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ['Frontend Developer.', 'React Developer.', 'Software Engineer.'],
        typeSpeed: 100,
        loop: true
    });

    return () => {
        typed.destroy();
    };
    }, []);


    function handleLoad() {
        $(".home").fadeIn(2000);
    }

    useEffect(()=> {
        handleLoad();
    }) 
    

    
    return (
        <div className='home container text-white'>
            <div className="row">
                <div className="col-lg-6">
                    <div className='h-100 d-flex flex-column justify-content-center p-2'>
                        <h1>
                            Hello There, I'm Abdelrahman Ahmed. <br />
                            <span> I'm A <span className='fw-bold text-decoration-underline text-warning' ref={el}></span></span>
                        </h1>
                        <div className='grop w-50 mt-4 d-flex '>
                            <button className="w-50 btn btn-outline-warning text-white"><Link className=' text-decoration-none text-white' to="">My Resume</Link></button>
                            <button className="w-50 ms-4 btn btn-warning text-white"><Link className=' text-decoration-none text-white' to="/MyPortfolio/contact">Contact Me</Link></button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <figure>
                        <img src={require("../../Assets/vecteezy_ai-generated-portrait-of-handsome-smiling-young-man-with_41642230.png")} alt="human" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Home;
