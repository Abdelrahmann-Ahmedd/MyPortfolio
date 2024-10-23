import React, { useEffect } from 'react';
import $ from "jquery";
import "./Card.css";
import { Link } from 'react-router-dom';

function Card(props) {

    const {name , img ,devices , language ,  code , live} = props.details;

    useEffect(()=>{
        $(".showy").fadeIn(2000)
    })

    return (
        <div className="showy col-xl-3 col-lg-4 col-md-6 mb-5">
            <div className="card bg-dark text-white rounded-3 shadow  p-2" >
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center fs-4 fw-bold mb-4">{name}</h5>
                    <p className="card-text text-center opacity-50">{devices}</p>
                    <p className="card-text text-center opacity-50">{language}</p>
                    <Link to={code} target='_blank' className="btn w-50 btn-outline-warning text-white rounded-4">Code</Link>
                    <Link to={live} target='_blank' className="btn w-50 btn-outline-warning text-white rounded-4">Live</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;
