import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Userauth from './Userauth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Cart = () => { 
    const [cart, setCart] = useState([]);

    const handleDelete = (id) => {
        try {
            axios.delete(`http://localhost:8000/carts/${id}`)
                .then((res) => {
                    setCart((deletecart) =>
                        deletecart.filter((item) =>
                            item.id !== id
                        )
                    );
                    toast.success("Record successfully deleted.", {
                        position: 'top-center',
                        autoClose: 1000,
                        className: 'custom-toast'
                    });
                }).catch((err) => {
                    console.log(err);
                    return false;
                });
        } catch (error) {
            console.error(error);
            alert("An error occurred while deleting the record.");
        }
    }

    const Qtychange = (id, qty) => {
        const UpdatecartItem = cart.map(item => {
            if (item.id === id) {
                return { ...item, qty: qty };
            }
            return item;
        });

        setCart(UpdatecartItem);

        axios.patch(`http://localhost:8000/carts/${id}`, {
            qty: qty,
        }).then((res) => {
           alert("cart sucessfull add...");
        }).catch((err) => {
            console.error(err);
        });
    }

   
    useEffect(() => {

        axios.get(`http://localhost:8000/carts?userId=${Userauth().id}`)
            .then((res) => {
                setCart(res.data);
            })
            .catch((err) => {
                console.log(err);
                return false;
            });
    }, []);


    return (
        <div className='cart'>
            <ToastContainer />
            <div className='container'>
                <h2 className='text-center pt-2' style={{ color: 'darkblue', fontWeight: '600' }}>Cart</h2>
                <div className='row justify-content-between '>
                    {cart.map((val) => {
                        return (
                            <div className="card mb-4" style={{ maxWidth: 600, height: '385px' }}>
                                <div className="row g-0 align-items-center p-3">
                                    <div className="col-md-4">
                                        <img src={val.image} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{val.name}</h5>
                                            <hr/>
                                            <h4 className="card-title" >
                                               Price:- {val.price * val.qty}
                                            </h4>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <hr />
                                            Qty :- <input type='number' value={val.qty} onChange={ (e)=> Qtychange(val.id,e.target.value)}/>
                                            <hr />
                                            <div className='btn btn-danger me-2 w-25' onClick={() => handleDelete(val.id)}>Delete</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cart
