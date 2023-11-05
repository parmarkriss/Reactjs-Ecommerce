import React, { useState, useEffect } from 'react'
import AdminNavbar from './AdminNavbar';
import './style.css';
import axios from 'axios';


const AdminCategory = () => {
    const [category,setCategory] = useState("");
    const [img,setImg] = useState("");
    const [categoryData,setCategoryData] = useState([]);
    const [edit,setEdit] = useState("");

    const handleSubmit = () => {
       
       if(edit){
        axios.put(`http://localhost:8000/category/${edit}`, {
            category_name: category,
            image_url : img
        })
            .then((res) => {
                alert("Category successfully Update");
                setCategory("");
                setImg("");
                setEdit("");
                getUser();
            }).catch((err) => {
                console.log(err);
                return false;
            })
       }else{
        axios.post(`http://localhost:8000/category`, {
            category_name: category,
            image_url: img,
        })
        .then((res) => {
            alert("Category successfully added.");
            setCategory(""); 
            setImg("");  
            getUser();
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
       }
      
    }

    const getUser = () => {
        axios.get(`http://localhost:8000/category`)
            .then((res) => {
                setCategoryData(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const categoryDelete = (id) =>{
        axios.delete(`http://localhost:8000/category/${id}`)
        .then((res)=>{
           alert("category delete");
           setCategory("");
           setImg("");
           getUser();
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    const categoryEdit = (id) => {
        axios.get(`http://localhost:8000/category/${id}`)
            .then((res) => {
                setCategory(res.data.category_name);
                setImg(res.data.image_url);
                setEdit(id)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    useEffect(()=>{
        getUser()
    },[])

    return (
        <center>
            <AdminNavbar />
            <h2>Admin Category page</h2>
            <div className="container-category">
                <table border={1} className="custom-table">
                    <tbody>
                        <tr>
                            <td>Category:</td>
                            <td>
                                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} name="category" placeholder="Enter the category" />

                            </td>
                        </tr>
                        <tr>
                            <td>Iamgeurl</td>
                            <input type="text" value={img} onChange={(e) => setImg(e.target.value)} name="img" placeholder="Enter the Image Url" />

                        </tr>
                        <tr>
                            <td />
                            <td>
                               {
                                 edit ? ( <input type="button"  value="Edit" onClick={ ()=> handleSubmit()}/>)
                                 : ( <input type="button"  value="Submit" onClick={ ()=> handleSubmit()}/>)
                               } 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>

           <div className='container'>
           <table border={1} className='table table-bordered border-primary'>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Category</td>
                        <td>Image </td>
                        <td>Action</td>
                    </tr>
                    {
                        categoryData.map((val) => {
                            return (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.category_name}</td>
                                    <td>
                                        <img src={val.image_url} width={"75px"}></img>
                                    </td>
                                    <td>


                                        <button className='btn btn-danger' onClick={ ()=> categoryDelete(val.id)}>Delete</button>
                                        <button className='btn btn-success ms-2' onClick={ ()=> categoryEdit(val.id)}>Edit</button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
           </div>
        </center>
    )
}

export default AdminCategory
