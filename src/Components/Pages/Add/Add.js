import React from 'react';

const Add = () => {
    return (
        <div className='text-center'>
            <form className='container row mx-auto my-5 py-5'>
                <span className='col-4 me-4 text-end fs-5 fw-bold'>Product name:</span><input className='col-8 w-50 mb-3 py-2 fs-4' type="text" /> <br />
                <span className='col-4 me-4 text-end fs-5 fw-bold'>Product price:</span><input className='col-8 w-50 mb-3 py-2 fs-4' type="number" /> <br />
                <span className='col-4 me-4 text-end fs-5 fw-bold'>Product description:</span><input className='col-8 w-50 mb-3 py-2 fs-4' type="text" /> <br />
                <span className='col-4 me-4 text-end fs-5 fw-bold'>Product image:</span><input className='col-8 w-50 mb-3 py-2 fs-4' type="url"/> <br />
                <span className='col-4 me-4 text-end fs-5 fw-bold'>Product quantity:</span><input className='col-8 w-50 mb-3 py-2 fs-4' type="number" /> <br />
                <span className='col-4 me-4 text-end fs-5 fw-bold'>Product supplier:</span><input className='col-8 w-50 mb-3 py-2 fs-4' type="text" /> <br />
                <div className='d-flex justify-content-around w-75 mx-auto'>
                <button className='col-6 w-25 mt-4 btn-warning border-1'>Add product</button>
                <button className='col-6 w-25 mt-4 btn-warning border-1'>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default Add;