import React, { useEffect, useState } from 'react'
import './Adminestyle.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import AdminFooter from './AdminFooter';
const AdminLayout = () => {
    const navigate = useNavigate();
    const [admin,setAdmin] = useState({});

    const logout = () =>{
       localStorage.removeItem('adminuser');
       navigate('/admin');
    }
    
    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('adminuser'));
        if(!data){
            navigate('/admin');
        }
        setAdmin(data);
    },[])
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark p-0" >
                <div className="container-fluid d-flex align-items-center justify-content-between p-1">
                    <NavLink className="navbar-brand" to="#">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg" alt="Logo" width="180" className="d-inline-block align-top ms-5" />

                    </NavLink>
                    <ul className="d-flex align-items-center">
                        <li>
                            <input type="search" className="form-control" placeholder="Search" style={{ width: "500px" }}
                            />
                        </li>
                        <li className="ms-2">
                            <i className="bi bi-github fs-4 ms-3"></i>
                        </li>
                        <li className="ms-2">
                            <i className="bi bi-bell fs-4 ms-3"></i>
                        </li>
                        <li className="ms-2">
                            <img src="https://sneat-vuetify-admin-template.vercel.app/assets/avatar-1-19a9226d.png" className="w-25 rounded-circle ms-4 " alt="User Avatar" />
                        </li>
                    </ul>
                </div>
            </nav>

             
                <div className='d-flex'>
                    <div style={{ minHeight: '82vh', backgroundColor: '#36454F' }} className='admin-nav col-lg-2'>
                        <ul className='mt-5'>
                            <li>
                                <NavLink to="/admin/dashboard">
                                  <div className='w-75 p-1 btn btn-primary ps-4 pe-4 pt-2 pb-2'>Dashboard</div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/admin/slider'}>
                                    <div className='w-75 p-1 btn  btn-primary mt-4 ps-4 pe-4 pt-2 pb-2'>Slider</div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/admin/admincategory'}>
                                    <div className='w-75 p-1 btn  btn-primary mt-4 ps-4 pe-4 pt-2 pb-2'>Category</div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={`/admin/product`}>
                                    <div className='w-75 p-1 btn  btn-primary mt-4 ps-4 pe-4 pt-2 pb-2'>Product</div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={`/admin/user`}>
                                    <div className='w-75 p-1 btn  btn-primary mt-4 ps-4 pe-4 pt-2 pb-2'>Users</div>
                                </NavLink>
                            </li>
                            <li>
                               <button className='btn btn-danger w-50 ms-4 mt-4' onClick={ ()=> logout()}>Log out</button>
                            </li>
                        </ul>
                    </div>

                    <div className='col-lg-10 p-0'>
                        <Outlet />
                    </div>
                    
                </div>
                <AdminFooter />

            

        </div>
    )
}

export default AdminLayout
