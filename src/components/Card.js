import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useCart,useDispatchCart } from './ContextReducer';

export default function Card(props) {

    const priceref = useRef();
    let data=useCart();
    let dispatch = useDispatchCart();
    let options = props.options;
    let priceoptions = Object.keys(options);
    const [qnt,setqnt] = useState(1);
    const [size,setsize] = useState("");
    let foodItem = props.foodItems;
    const handleAddtoCart = async ()=>{
        await dispatch({type:"ADD",id:foodItem._id,name:foodItem.name,price:finalPrice,qnt:qnt,size:size});
        console.log(data);
    }

    useEffect(()=>{
        setsize(priceref.current.value);
    },[])
    let finalPrice = qnt*parseInt(options[size]);
    return (
        <div>
            <div className="card mt-3" style={{ "width": "16rem", "maxHeight": "360px" }}>
                <img src={foodItem.img} className="card-img-top" alt="..."  style={{"height":"180px","objectFit":"fill"}}/>
                <div className="card-body">
                    <h5 className="card-title">{foodItem.name}</h5>
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-success rounded" onChange={(e)=>setqnt(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className="m-2 h-100 bg-success rounded" ref={priceref} onChange={(e)=>setsize(e.target.value)}>
                            {
                                priceoptions.map(data=>{
                                    return (
                                        <option key={data} value={data}>{data}</option>
                                    )
                                })
                            }
                        </select>
                        <div className='d-inline fs-5 h-100'>₹{finalPrice}/-</div>
                    </div>
                    <hr />
                    <button className="btn btn-success  justify-center ms-2" onClick={handleAddtoCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
