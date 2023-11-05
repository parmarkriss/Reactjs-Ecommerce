import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

export const User = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/users`)
            .then((res) => {
                setUsers(res.data)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }, [])

    return (
        <div className="ps-5 col-lg-12 pt-2">
            <div  className="mt-2 p-4">
                <h3 className="text-center">View Users</h3>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((val) => {
                                return (
                                    <tr>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.password}</td>
                                        <td>

                                            <Link to={`/admin/userdetails/${val.id}`}>
                                                <button className='btn btn-primary btn-sm'>View</button>
                                            </Link>

                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>


            </div>


            <ToastContainer />
        </div>
    )
}
