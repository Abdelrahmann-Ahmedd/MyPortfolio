import React from 'react';
import "./Error.css";
function Error() {
    return (
        <div className="error">
            <figure className='d-flex flex-column justify-content-center align-items-center'>
                <figcaption className='text-white mt-5 fs-1 fw-bold'>
                    Page is Not Found.
                </figcaption>
                <img src={require("../../Assets/—Pngtree—404 page missing element_4770349.png")} alt="Error" />
            </figure>
        </div>
    )
}

export default Error;
