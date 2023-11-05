import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminViewProduct = () => {
    const [product, setProduct] = useState([]);
    const [marketstatus, setMarketStatus] = useState(["trending", "latest", "upcomming", "best"])
    const [selectMarketStatus, setSelectMarketStatus] = useState("");
    const [status, setStatus] = useState("");


    const changeMarketStatus = (upid, value) => {
        axios.patch(`http://localhost:8000/products/${upid}`, {
            marketstatus: value
        }).then((res) => {
            toast.success("Status successfully update");
        }).catch((err) => {
            return false;
        })
    }

    const inStock = (upid, value) => {
        axios.patch(`http://localhost:8000/products/${upid}`, {
            status: value
        }).then((res) => {
            toast.success("Status successfully update");
            getAllProduct();
        }).catch((err) => {
            return false;
        })
    }

    const outStock = (upid, value) => {
        axios.patch(`http://localhost:8000/products/${upid}`, {
            status: value
        }).then((res) => {
            toast.success("Status successfully update");
            getAllProduct();
        }).catch((err) => {
            return false;
        })
    }



    const getAllProduct = () => {
        axios.get(`http://localhost:8000/products`)
            .then((res) => {
                setProduct(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/products/${id}`)
            .then((res) => {
                setProduct((prevProducts) => prevProducts.filter(product => product.id !== id));
                toast.success("Product deleted successfully");
            })
            .catch((err) => {
                console.log(err);
                return false;
            });
    }

    useEffect(() => {
        getAllProduct();
    }, [])


    return (
        <div>
            <div className="p-4 col-lg-12 pt-2">
                <div style={{ boxShadow: '3px 3px 3px 3px #cccc' }} className="mt-4 p-5">
                    <h3 className="text-center">View Product</h3>

                    <table className="table table-success table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Market Status</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((val) => {
                                    return (
                                        <tr>
                                            <td>{val.id}</td>
                                            <td>{val.name}</td>
                                            <td>{val.price}</td>
                                            <td>
                                                <select className='form-control w-25' id='form-market' onChange={(e) => changeMarketStatus(val.id, e.target.value)}>
                                                    <option>select market status</option>
                                                    {
                                                        marketstatus.map((item) => {

                                                            return (val.marketstatus === item ? <option selected>{val.marketstatus}</option> : <option>{item}</option>)

                                                        })
                                                    }
                                                </select>
                                            </td>
                                            <td>
                                                {
                                                    val.status === "instock" ? (<button onClick={() => inStock(val.id, "outstock")} className='btn btn-success btn-sm'>Instock</button>) : (<button onClick={() => outStock(val.id, "instock")} className='btn btn-danger btn-sm'>Outstock</button>)
                                                }

                                            </td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => handleDelete(val.id)}><i class="bi bi-trash3-fill"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>


                </div>

                <button className="btn btn-primary mt-5">
                    <NavLink to={`/admin/product`} className="text-white">Add Product</NavLink>
                </button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AdminViewProduct
