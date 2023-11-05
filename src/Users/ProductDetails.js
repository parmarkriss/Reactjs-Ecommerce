import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import checkUserLogin from './Userauth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const ProductDetails = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState({});


    const getSingleRecord = async () => {
        try {
            let single = await axios.get(`http://localhost:8000/products/${productId}`);
            if (single) {
                setProduct(single.data);
            } else {
                console.log("record not fetch");
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }

   

    const Addcart = async (productId) => {
        if (!checkUserLogin()) {
            alert("Please login..");
            navigate('/login');
        } else {
            try {
                const response = await axios.get(`http://localhost:8000/carts?productId=${productId}&userId=${checkUserLogin().id}`);
        
                if (response.data.length === 0) {
                    const cartItem = {
                        name: product.name,
                        price: product.price,
                        qty: 1,
                        image: product.image,
                        category: product.category,
                        userId: checkUserLogin().id,
                        productId: productId
                    };
        
                    const cartResponse = await axios.post(`http://localhost:8000/carts`, cartItem);
        
                    if (cartResponse.status === 201) {
                        toast.success("Product successfully added to the cart.", {
                            position: 'top-center',
                            autoClose: 2000,
                        });
                    } else {
                        alert("Failed to add the product to the cart.");
                    }
                } else {
                    alert("This product is already in the cart.");
                }
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    };
    

    useEffect(() => {
        getSingleRecord();
    }, []);

    return (

        <div className='product p-3'>

           
            <div className="container">
                <div className="row ">
                    <h2 style={{ color: 'darkblue', }} className='text-center'>Product Details</h2>
                    <div className="product-card d-flex align-items-center">
                        <div className="col-md-5">
                            <div className="product-tumb ">
                                <img src={product.image}></img>
                            </div>
                        </div>
                        <div className="col-md-7 p-0">
                            <div className="product-details">
                                <h4 className="product-category" style={{ color: 'green' }}>
                                    Name: {product.name}
                                </h4>
                                <hr />
                                <h5 style={{ color: 'darkblue' }}>Price: {product.price}</h5>
                                <hr />
                                <p style={{ color: 'black', display: 'inline' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                                </p>
                                <hr />
                                <div>
                                    <div className="btn btn-success w-50 p-2" onClick={() => Addcart(product.id)}>
                                        <h6>Add to Cart</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </div>
    )
}

export default ProductDetails;
