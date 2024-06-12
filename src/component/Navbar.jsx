// import React from 'react';

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const items = useSelector(state => state.cart)
    return (
        <div className="w-full flex justify-end p-3 fo font-semibold">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link ms-8" to="/cart">Cart <span className="text-orange-600">{items.length}</span></Link>
        </div>
    );
};

export default Navbar;