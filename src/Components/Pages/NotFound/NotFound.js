import React from 'react';
import { Link} from 'react-router-dom';
import img from '../../../images/404.png'

const NotFound = () => {
    return (
        <div className='d-flex align-items-center justify-content-center text-center p-5'>
            <div>
                <img className='w-50 mt-5' src={img} alt="" />
                <h4>The page you are looking for doesn't exist</h4>
                <p>Your requested url doesn't exist to the server</p>
                <Link to="/"><button className="btn-primary px-5 py-1 rounded-pill border border-primary">Go back</button></Link>
            </div>
        </div>
    );
};

export default NotFound;