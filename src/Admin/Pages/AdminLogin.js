import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
import axios from 'axios';
const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState([]);

  const handleSubmit = () => {
      axios.get(`http://localhost:8000/users?email=${email}&password=${password}&role=admin`).then((res)=>{
          if(res.data){
             localStorage.setItem('adminuser',JSON.stringify(res.data[0]));
             navigate('/admin/dashboard');
          }else{
            alert("email and password is not valid..");
          }
      }).catch((err)=>{
         console.log(err);
         return false;
      })
  }

  useEffect(()=>{
     let admin = JSON.parse(localStorage.getItem('adminuser'));
     if(admin){
       navigate('/admin/dashboard');
     }
     setAdmin(admin);
  },[])


  return (
    <div>
      <div className="wrapper">
        <form className="form-signin">
          <h2 className="form-signin-heading">Admin login</h2>
          <input type="text" className="form-control" name="email" placeholder="Email Address" required autofocus onChange={ (e)=> setEmail(e.target.value)} value={email}/>
          <input type="password" className="form-control" name="password" placeholder="Password" required onChange={ (e)=> setPassword(e.target.value)} value={password}/>
          <button className="btn btn-lg btn-primary btn-block" type="button" onClick={ ()=> handleSubmit()}>Login</button>
        </form>
      </div>

      

    </div>
  )
}

export default AdminLogin;
