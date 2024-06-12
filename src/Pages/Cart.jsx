// import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/CartSlice";

const Cart = () => {
    const items = useSelector(state => state.cart)
    const dispatch = useDispatch()
    console.log(items);
    // id, title, price , rating, category, description

    // calculation
    const amount = items.reduce((sum, product) => sum + product.price, 0);
    const fAmount = amount.toFixed()
    let delevaryCharge;
    if (fAmount > 100) {
        delevaryCharge = 15
    } if (fAmount > 200) {
        delevaryCharge = 27
    } else {
        delevaryCharge = 10
    }

    let discount;
    if (amount > 100) {
        discount = 10
    } if (amount > 200) {
        discount = 20
    } else {
        discount = 5
    }
    const vat = 20
    const totalPrice = amount + vat + delevaryCharge - discount;


    const handleRemove = (item) => {
        console.log("deleted", item.id);
        dispatch(remove(item.id))
    }

    return (
        <div className="lg:flex  gap-x-3">
            <div className="lg:w-3/4 p-3">
                <h2 className="lg:bg-orange-700 bg-red-700 w-full text-center lg:p-4 p-3 text-white font-semibold text-2xl">{items == 0 && "There are no Product Added"}</h2>
                {
                    items.map(item => (
                        <div
                            className="lg:flex flex justify-evenly text-center items-center bg-yellow-50 mb-3 rounded:lg"
                            key={item.id}>
                            <img
                                className="w-16 h-16 p-2 mr-8"
                                src={item.image}
                                alt="product Image" />
                            <div className="bg-slate-100 lg:px-4 lg:py-1 lg:w-3/4 rounded lg:justify-evenly flex ">
                                <span className="me-2">Product Name : {item.title.slice(0, 15)}</span>
                                <span>Price : $ <span className="font-semibold ">{item.price}</span></span>
                            </div>
                            <div>
                                <button className="bg-yellow-500 hover:bg-yellow-700 px-2 py-1 text-white rounded mx-1" onClick={() => handleRemove(item)}>delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="lg:w-1/4 p-3">
                <h2 className="bg-slate-100 mb-2 p-3 text-wrap ">Total Product : {items?.length}</h2>
                <h2 className="bg-slate-100 mb-2 p-3 text-wrap ">Product Price : $  {amount.toFixed()}</h2>
                <h2 className="bg-slate-100 mb-2 p-3 text-wrap ">Delevary Charge   : $ {delevaryCharge}</h2>
                <h2 className="bg-slate-100 mb-2 p-3 text-wrap ">Discount on Online Pay   : $ {discount} </h2>
                <h2 className="bg-slate-100 mb-2 p-3 text-wrap ">Vat 15%   : $ {vat} </h2>
                <h2 className="bg-slate-100 mb-2 p-3 text-wrap ">Total Payble Amount   : $ {totalPrice.toFixed()}</h2>
                <div className="">
                    <button
                        onClick={() => alert('Payment initialize ')}
                        className=" w-full bg-zinc-500 text-white px-5 py-1 rounded  hover:bg-zinc-600 my-2">Payment</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;