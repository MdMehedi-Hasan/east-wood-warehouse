import React from 'react';

const Footer = () => {
    return (
        <div className='text-white text-center bg-dark p-4'>
            All rights reserved &copy; 2020 &mdash; {new Date().getFullYear()}
        </div>
    );
};

export default Footer;