import React, { useEffect, useState } from 'react'
import './style.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const AdminProduct = () => {
  const [category,setCategory] = useState([]);

  const [categoryname,setCategoryName] = useState("");
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [qty,setQty] = useState("");
  const [image,setImage] = useState("");
  const [description,setDescription] = useState("");
  const [marketstatus,setMarketStatus] = useState("");
  const [status,setStatus] = useState("");

  const handleSubmit = () => {
      axios.post(`http://localhost:8000/products`,{
          name : name,
          price : price,
          qty : qty,
          desc : description,
          image : image,
          category : categoryname,
          marketstatus : marketstatus,
          status : status
      })
      .then((res)=>{
          alert("Product successfully Add");
          setCategoryName("");
          setName("");
          setPrice("");
          setQty("");
          setDescription("");
          setImage("");
          setMarketStatus("");
          setStatus("");
      }).catch((err)=>{
          console.log(err);
          return false;
      })
  }


  useEffect(()=>{
      axios.get(`http://localhost:8000/category`)
      .then((res)=>{
          setCategory(res.data);
      }).catch((err)=>{
          console.log(err);
          return false;
      })
  },[])


  return (
    <div>
       <div className="d-flex justify-content-between">
            <div className="ps-5 col-lg-9 pt-2">
                <div style={{ boxShadow: '3px 3px 5px 6px #ccc' }} className="mt-3 p-5">
                    <h3 className="text-center">Add Product</h3>
                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                                    <select name="category" onChange={ (e) => setCategoryName(e.target.value) } className="form-control mt-2">
                                        <option value="">---Select Category---</option>
                                        {
                                            category.map((item)=>{
                                                return (
                                                    <option value={item.category_name}>{item.category_name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                                    <input type="text" name="name" onChange={ (e) => setName(e.target.value) } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Product Price</label>
                                    <input type="number" name="price" onChange={ (e) => setPrice(e.target.value) } className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Product Qty</label>
                                    <input type="number" name="qty" onChange={ (e) => setQty(e.target.value) } className="form-control" id="exampleInputPassword1" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Product Image Url</label>
                                    <input type="text" name="image" onChange={ (e) => setImage(e.target.value) } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Product Description</label>
                                    <input type="text" name="description" onChange={ (e) => setDescription(e.target.value) }className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Product Market Status</label>
                                    <select name="marketstatus" onChange={ (e) => setMarketStatus(e.target.value) } className="form-control">
                                        <option value="">---Select Market Status---</option>
                                        <option value="trending">Trending</option>
                                        <option value="latest">Latest</option>
                                        <option value="upcomming">Upcomming</option>
                                        <option value="best">Best</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Status</label>
                                    <select name="status" onChange={ (e) => setStatus(e.target.value) } className="form-control">
                                        <option value="">---Select Status---</option>
                                        <option value="instock">Instock</option>
                                        <option value="outstock">Outstock</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button type="button" onClick={ () => handleSubmit() } className="btn btn-primary">Submit</button>
                    </form>
                                    
                </div>
                 
                 <button className="btn btn-primary mt-4 mb-2">
                    <NavLink to={`/admin/viewproduct`} className="text-white">View Product</NavLink>
                 </button>
            </div>
            
        </div>

    </div>
  )
}

export default AdminProduct
