import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const UserDetails = () => {

  const { userid } = useParams();

  const [cart, setCart] = useState([])
  const [user, setUser] = useState("");

  const getUserDetails = () => {
    axios.get(`http://localhost:8000/users/${userid}`)
      .then((res) => {
        setUser(res.data)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const getUserCartDetails = () => {
    axios.get(`http://localhost:8000/carts?userId=${userid}`)
      .then((res) => {
        setCart(res.data);
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  useEffect(() => {
    getUserCartDetails();
    getUserDetails();
  }, [])

  return (
    <div className="p-5 col-lg-12 pt-2">
      <div style={{ boxShadow: '3px 3px 5px 6px #ccc' }} className="mt-3 p-5">
        <h3 className="text-center">Users Details</h3>
        <div className='container'>
          <h4 className='p-2'>User Name : {user.name}</h4>
          <h4 className='p-2'>User Email : {user.email}</h4>
          <div className='row justify-content-between'>
            {
              cart.map((val) => {
                return (
                  <div className="card p-4 mb-3" style={{ maxWidth: 540 }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={val.image} className="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body ps-4">
                          <h4 className="card-title">{val.name}</h4>
                          <hr />
                          <h4 className="card-title">Price :- {val.price}</h4>

                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <ToastContainer />

      <Link to={'/admin/user'}><button className='btn btn-primary mt-2'>User</button></Link>
    </div>
  )
}

export default UserDetails