import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Myitems = () => {
    const [user] = useAuthState(auth);
    // const email = user?.email;
    const [items, setItems] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setItems(data.filter(item => item.email ==user?.email)))
    }, [])
    console.log(items)
    return (
        <div>
            {/* {
                items?.filter(item => item.email === email)
            } */}
        </div>
    );
};

export default Myitems;