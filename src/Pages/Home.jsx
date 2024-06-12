// import React from 'react';

import { useEffect, useState } from "react";
import { add } from "../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/ProductSlice";

const Home = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart)
    const { data: product, status } = useSelector(state => state.product)
    // console.log("redux cart state : ", items);
    // console.log("product state : ", product);


    // treditional system
    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         const res = await fetch("https://fakestoreapi.com/products")
    //         const data = await res.json()
    //         setProduct(data)
    //     }
    //     fetchProduct()

    // }, [])
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    // 
    const handleclickProduct = (product) => {
        // console.log("clicked ", product.price); 
        dispatch(add(product))
    }


    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 p-4 gap-5 w-full justify-center items-centerr">
            {product?.map((prod) => (
                <div className="card lg:w-[300px] bg-slate-50 p-6 rounded-md shadow-md " key={prod.id}>
                    <div className="flex items-center justify-center">
                        <img
                            className="w-28  h-36 mb-6"
                            src={prod.image}
                            alt="product Image"
                        />
                    </div>
                    <div className="justify-center text-balance my-2">
                        <h4 className="text-orange-600 my-2">Name : {prod.title.slice(0, 15)}</h4>
                        <h5><span className="font-semibold">Price $</span> : <span className="font-bold">{prod.price}</span></h5>
                    </div>
                    <button
                        onClick={() => handleclickProduct(prod)}
                        className="w-full my-3 bg-slate-600 text-white py-1 px-5 rounded-md hover:bg-slate-500">Buy now</button>
                </div>
            ))}
        </div>
    );
};

export default Home;