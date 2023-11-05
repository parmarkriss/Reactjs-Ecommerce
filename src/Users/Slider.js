import axios from "axios";
import { useEffect, useState } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = () => {
    const [slider, setSlider] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/slider`)
            .then((res) => {
                setSlider(res.data)
            })
            .catch((err) => {
                console.log(err);
                return false;
            })
    }, [])

    return (
        <div className="slider-container"> {/* Apply custom CSS class for the container */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {slider.map((item, index) => (
                        <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                            <img src={item.image} className="d-block w-100" alt="..." />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider;
