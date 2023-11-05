import React from "react";

function Adminauth(){
    let checkAdminLogin = JSON.parse(localStorage.getItem('checkAdminLogin'))
    return checkAdminLogin;
}




export default Adminauth
