import { NavLink } from 'react-router-dom';
import './style1.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row text-start">
                    <div className="col-md-3 ">
                        <div className="footer-logo">
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg" style={{ width: '110px' }} ></img>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Products Details</a></li>
                            <li><a href="#">Cart</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Customer Support</h5>
                        <ul className="footer-links text-start">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Returns</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h4>Follow Us</h4>
                        <div className="social-icons text-start3">
                            <NavLink to="https://www.facebook.com/flipkart/" target='_blank'>
                                <FaFacebook />
                            </NavLink>
                            <NavLink to="https://www.instagram.com/flipkart/?hl=en" target='_blank'>
                                <FaInstagram />
                            </NavLink>
                            <NavLink to="https://in.linkedin.com/company/flipkart" target='_blank'>
                                <FaLinkedin />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer;