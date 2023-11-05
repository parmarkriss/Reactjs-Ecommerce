import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Users/Home';
import Product from './Users/Product';
import ProductDetails from './Users/ProductDetails';
import Cart from './Users/Cart';
import Register from './Users/Register';
import Login from './Users/Login';
import Contact from './Users/Contact';


import AdminLayout from './Admin/components/AdminLayout';
import AdminLogin from './Admin/Pages/AdminLogin';
import AdminProduct from './Admin/Pages/AdminProduct';
import AdminDashboard from './Admin/Pages/AdminDashboard';
import AdminViewProduct from './Admin/Pages/AdminViewProduct';
import { User } from './Admin/Pages/User';
import UserDetails from './Admin/Pages/UserDetails';
import AdminCategory from './Admin/Pages/AdminCategory';
import Slider from './Admin/Pages/Slider';


function App() {
  
  return (
    <BrowserRouter>
       <Routes>
        {/* users route  */}
         <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/productDetails/:productId' element={<ProductDetails/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>

         </Route>

         {/* admin route  */}
         <Route path='/admin' element={<AdminLogin/>}></Route>

         <Route  element={<AdminLayout/>}>
             <Route path='/admin/dashboard' element={<AdminDashboard/>}> 
             </Route>
             <Route path='/admin/product' element={<AdminProduct/>}></Route>
             <Route path='/admin/viewproduct' element={<AdminViewProduct/>}></Route>
             <Route path='/admin/user' element={<User/>}></Route>
             <Route path='/admin/userdetails/:userid' element={<UserDetails/>}></Route>
             <Route path='/admin/admincategory' element={<AdminCategory/>}></Route>
             <Route path='/admin/slider' element={<Slider/>}></Route>
         </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
