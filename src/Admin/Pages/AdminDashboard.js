import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css';


const AdminDashboard = () => {
  const [usercnt, setUsercnt] = useState(0);
  const [productcnt, setProductcnt] = useState(0);
  const [categorycnt, setCategorycnt] = useState(0);

  useEffect(() => {
    axios.get(` http://localhost:8000/users`).then((res) => {
      setUsercnt(res.data.length)
    }).catch((err) => {
      console.log(err);
      return false;
    })

    axios.get(`http://localhost:8000/products`)
      .then((res) => {
        setProductcnt(res.data.length)
      })
      .catch((err) => {
        console.log(err);
        return false;
      })

    axios.get(`http://localhost:8000/category`)
      .then((res) => {
        setCategorycnt(res.data.length);
      })
      .catch((err) => {
        console.log(err);
        return false;
      })

  }, [])

 


  return (
    <div>
      <div className='p-5'>
        <div className='row justify-content-between'>
          <div style={{ backgroundColor: 'darkblue', boxShadow: '5px 5px 5px gray' }} className='col-lg-2 p-4'>
            <h4 className='text-center text-white'>User</h4>
            <h2 className='text-center text-white mt-2'>{usercnt}</h2>
          </div>
          <div style={{ backgroundColor: 'darkblue', boxShadow: '5px 5px 5px gray' }} className='col-lg-2 p-4'>
            <h4 className='text-center text-white'>Category</h4>
            <h2 className='text-center text-white mt-2'>{categorycnt}</h2>
          </div>
          <div style={{ backgroundColor: 'darkblue', boxShadow: '5px 5px 5px gray' }} className='col-lg-2 p-4'>
            <h4 className='text-center text-white'>Product</h4>
            <h2 className='text-center text-white mt-2'>{productcnt}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
