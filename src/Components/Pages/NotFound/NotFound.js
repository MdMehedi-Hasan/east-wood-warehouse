import React from 'react';
import img from '../../../images/404.png'

const NotFound = () => {
    return (
        <div className='d-flex align-items-center justify-content-center text-center p-5'>
            <div>
                <img className='w-50 mt-5' src={img} alt="" />
                <h4>The page you are looking for doesn't exist</h4>
                <p>Your requested url doesn't exist to the server</p>
                <button className="btn-primary">Go back</button>
            </div>
        </div>
    );
};

export default NotFound;