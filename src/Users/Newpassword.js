import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Newpassword = () => {

    const navigate = useNavigate();
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmpassword] = useState("");

    const handleSubmit = () =>{
        let email = JSON.parse(localStorage.getItem('checkUserLogin'));
        if(password === confirmpassword){
            axios.patch(`http://localhost:8000/users?email=${email.id}`,{
                password : password,
                confirmpassword : confirmpassword
            }).then((res)=>{
                localStorage.setItem('checkUserLogin',JSON.stringify(res.data));
                navigate('/login');

            }).catch((err)=>{
                console.log("password is fail");
                return false;
            })
        }
    }
    
  return (
    <div>
       <div className='register'>
            <div className="testbox-1">
                <h1 className='pb-2'>User page</h1>
                <hr />
                <form action="/" className='pt-2'>
                    <label id="icon" htmlFor="name"><i className="icon-shield" /></label>
                    <input type="password" name="password" id="name" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} />

                    <label id="icon" htmlFor="name"><i className="icon-shield" /></label>
                    <input type="password" name="confirmpassword" id="name" placeholder="confirmPassword" required onChange={(e) => setConfirmpassword(e.target.value)} value={confirmpassword} />

                    <button href="#" className="btn-1 w-75 mt-3" onClick={ ()=> handleSubmit()}>Forget Password</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Newpassword
