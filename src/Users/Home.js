import axios from "axios"
import { useEffect, useState } from "react"
import Slider from "./Slider";
import { NavLink } from "react-router-dom";

const Home = () => {
    const [product, setProduct] = useState([]);
    const [electronics, setElectronics] = useState([]);
    const [mobile, setMobile] = useState([]);
    const [shoes, setShoes] = useState([]);
    const [furniture,setFurniture] = useState([]);

    const getAllProduct = async () => {
        axios.get(`http://localhost:8000/products`)
            .then((res) => {
                setProduct(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
    const getAllElectronics = () => {
        axios.get(`http://localhost:8000/products?category=eletronics&&status=instock&&marketstatus=best`)
            .then((res) => {
                let ans = res.data.filter((val, i) => {
                    if (i < 4) {
                        return val.category === "eletronics"
                    }

                })
                setElectronics(ans)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
    const getAllMobile = () => {
        axios.get(`http://localhost:8000/products?category=mobile&&status=instock`)
            .then((res) => {
                setMobile(res.data.slice(0, 4));
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const getAllShoes = () => {
        axios.get(`http://localhost:8000/products?category=shoes`)
            .then((res) => {
                setShoes(res.data.slice(0, 4));
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const getAllFurniture = () =>{
        axios.get(`http://localhost:8000/products?category=furniture`)
        .then((res)=>{
            setFurniture(res.data.slice(0,4));
        })
        .catch((err)=>{
            console.log(err);
            return false;
        })
    }


    useEffect(() => {
        getAllProduct();
        getAllElectronics();
        getAllMobile();
        getAllShoes();
        getAllFurniture();
    }, []);


    return (
        <>
           <div>
           <Slider />
           </div>
            <div className="container">
                <h2 className="pt-4 pb-4 text-start">Best of Electronics</h2>
                <div className="row">
                    {
                        electronics.map((val) => {
                            return (
                                <div className="col-md-3 pb-3">
                                    <div className="card" style={{ width: '18rem', padding: '15px' }}>
                                        <img style={{ height: '200px', objectFit: 'contain' }} src={val.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Name :- {val.name}</h5>
                                            <hr />
                                            <h5 className="card-title">Price :- {val.price}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div className="flipkart-img p-3">
                <div className="container-fluied ">
                    <div className="row">
                        <div className="col-xl-4">
                            <NavLink>
                                <img
                                    src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/6ae6496d87b04fbc.jpg?q=20"
                                    alt="Product Image" className="w-100"
                                />
                                
                            </NavLink>
                        </div>
                        <div className="col-xl-4 ">
                            <NavLink>
                                <img
                                    src=" https://rukminim1.flixcart.com/fk-p-flap/520/280/image/4ac3a2dbba18d5a9.jpg?q=20"
                                    alt="Product Image" className="w-100"
                                />
                            </NavLink>
                        </div>

                        <div className="col-xl-4 ">
                            <NavLink>
                                <img
                                    src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/338a93428849c594.jpg?q=20"
                                    alt="Product Image" className="w-100"
                                />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h2 className="pt-4 pb-4 text-start">Best of Mobile</h2>
                <div className="row">
                    {
                        mobile.map((val) => {
                            return (
                                <div className="col-md-3 pb-3">
                                    <div className="card" style={{ width: '18rem', padding: '15px' }}>
                                        <img style={{ height: '200px', objectFit: 'contain' }} src={val.image} className="card-img-top" alt="..." />

                                        <div className="card-body">
                                            <h5 className="card-title">Name :- {val.name}</h5>
                                            <hr />
                                            <h5 className="card-title">Price :- {val.price}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="flipkart-img p-3">
                <div className="container-fluied ">
                    <div className="row">
                        <div className="col-xl-4">
                            <NavLink>
                                <img
                                    src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/b1318f323fc5950b.jpg?q=20"
                                    alt="Product Image" className="w-100"
                                />
                                
                            </NavLink>
                        </div>
                        <div className="col-xl-4 ">
                            <NavLink>
                                <img
                                    src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/7b77a5bbb1974b93.jpg?q=20"
                                    alt="Product Image" className="w-100"
                                />
                            </NavLink>
                        </div>

                        <div className="col-xl-4 ">
                            <NavLink>
                                <img
                                    src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/4154b6d71562349a.jpg?q=20"
                                    alt="Product Image" className="w-100"
                                />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h2 className="pt-4 pb-4 text-start">Best of Shoes</h2>
                <div className="row">
                    {
                        shoes.map((val) => {
                            return (
                                <div className="col-md-3 pb-2">
                                    <div className="card" style={{ width: '18rem', padding: '15px' }}>
                                        <img style={{ height: '200px', objectFit: 'contain' }} src={val.image} className="card-img-top" alt="..." />

                                        <div className="card-body">
                                            <h5 className="card-title">Name :- {val.name}</h5>
                                            <hr />
                                            <h5 className="card-title">Price :- {val.price}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="flipkart-img p-3">
                <div className="container-fluied ">
                    <div className="row">
                        <div className="col-xl-4">
                            <NavLink>
                                <img
                                    src="https://rukminim1.flixcart.com/fk-p-flap/450/280/image/fcf932685e7ab17a.jpeg?q=20"
                                    alt="Product Image" className="w-100"
                                />
                                
                            </NavLink>
                        </div>
                        <div className="col-xl-4 ">
                            <NavLink>
                                <img
                                    src="https://rukminim1.flixcart.com/fk-p-flap/450/280/image/8fefcbb0ec4e1ded.png?q=20"
                                    alt="Product Image" className="w-100"
                                />
                            </NavLink>
                        </div>

                        <div className="col-xl-4 ">
                            <NavLink>
                                <img
                                    src="https://rukminim1.flixcart.com/fk-p-flap/450/280/image/8fd0dcaee5006b20.jpeg?q=20"
                                    alt="Product Image" className="w-100"
                                />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h2 className="pt-4 pb-4 text-start">Bestselling Furniture</h2>
                <div className="row">
                    {
                        furniture.map((val) => {
                            return (
                                <div className="col-md-3 pb-3">
                                    <div className="card" style={{ width: '18rem', padding: '15px' }}>
                                        <img style={{ height: '200px', objectFit: 'contain' }} src={val.image} className="card-img-top" alt="..." />

                                        <div className="card-body">
                                            <h5 className="card-title">Name :- {val.name}</h5>
                                            <hr />
                                            <h5 className="card-title">Price :- {val.price}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>

    )
}

export default Home