import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div>
      <>
        <Link to={'/admin/product'} className='pe-3'>Product</Link>
        <Link to={'/admin/admincategory'}>Category</Link>
      </>
    </div>
  )
}

export default AdminNavbar
