import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [firstname,setFirstname] = useState("");
  const [lasttname,setLastname] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  const handlesumbit = () =>{
    if(firstname && lasttname && email && message){
      axios.post(`http://localhost:8000/contact`,{
        firstname : firstname,
        lasttname : lasttname,
        email : email,
        message : message
     }).then((res)=>{
        alert("Thank you filed the form....");
        setFirstname("");
        setLastname("");
        setMessage("");
        setEmail("");
     }).catch((err)=>{
       console.log(err);
       return false;
     })
    }else{
      alert("field the all data...");
    }
  }

  return (
    <div>
      <div className="container-contact">
        <h2>Contact Us</h2>
        <form id="contact-form">
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">First Name</label>
            <input type="text" className="form-control" id="first-name" name="first-name" required onChange={ (e)=> setFirstname(e.target.value)} value={firstname}/>
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="last-name" name="last-name" required onChange={ (e)=> setLastname(e.target.value)} value={lasttname}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" required onChange={ (e)=> setEmail(e.target.value)} value={email}/>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" rows={4} required defaultValue={""} onChange={ (e)=> setMessage(e.target.value)} value={message}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={ ()=> handlesumbit()}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
