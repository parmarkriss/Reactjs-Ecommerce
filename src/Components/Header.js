import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const handleAccordionClick = (e) => {
        e.preventDefault();
    };

    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('checkUserLogin'));
    console.log(user);

    const logout = () =>{
        localStorage.clear('checkUserLogin');
        navigate('/');
    }

    return (
        <header className="navbar navbar-expand-lg navbar-light bg-white p-3" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <div className="container">
                <div className="col-md-1">
                    <NavLink className="navbar-brand" to="/home">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg" style={{ width: '110px' }} alt="Logo" />
                    </NavLink>
                </div>
                <div className="col-md-4 ps-4">
                    <form className="">
                        <input className="form-control " type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
                <div className="col-md-7">
                    <ul className="navbar-nav ml-auto ps-4  align-items-center">
                        <li className="nav-item pe-3">
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item pe-3">
                            <NavLink to='/product' className="nav-link">Products</NavLink>
                        </li>
                        <li className="nav-item pe-3">
                            <NavLink className="nav-link">Products Details</NavLink>
                        </li>
                        <li className="nav-item pe-3">
                            <NavLink to='/cart' className="nav-link">Cart</NavLink>
                        </li>
                        <li className="nav-item pe-3">
                            <NavLink to='/contact' className="nav-link">Contact</NavLink>
                        </li>
                       {
                         !user ? 
                         (
                            <>
                               <li class="nav-item">
                          <NavLink to='/register'><i class="bi bi-r-circle-fill"></i> <span>Register</span></NavLink>
                        </li>
                        <li class="nav-item ps-4">
                          <NavLink to='/login'>
                          <i class="bi bi-door-open-fill"></i><span>Login</span></NavLink>
                        </li>
                            </>
                         )  : (
                            <li class="nav-item ps-2">
                          <NavLink to='/login' onClick={ ()=> logout()}>
                          <i class="bi bi-power"></i><span>Logout</span></NavLink>
                        </li>
                         )
                       }
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
