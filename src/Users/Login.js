import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [user,setUserData]=useState([]);


    const handleSubmit = async() => {
       try{
        let users = await axios.get(`http://localhost:8000/users?email=${email}&password=${password}`);

       if(users.data.length === 0){
                console.log("Email and Password not valid");
                return false;
                navigate('/')    
       }
       localStorage.setItem('checkUserLogin',JSON.stringify(users.data[0]));
       setEmail("");
       setPassword("");
        navigate('/');
       }catch(err){
        console.log(err);
        return false;
       }
    }


    return (
        <div className='register'>
            <div className="testbox-1">
                <h1 className='pb-2'>Login In</h1>
                <hr />
                <form action="/" className='pt-2'>
                    <label id="icon" htmlFor="name"><i className="icon-envelope " /></label>
                    <input type="text" name="email" id="name" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} value={email} />

                    <label id="icon" htmlFor="name"><i className="icon-shield" /></label>
                    <input type="password" name="password" id="name" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} />
                    
                   

                    <button href="#" className="btn-1 w-75 mt-3" onClick={() => handleSubmit()}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
