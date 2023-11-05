import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const Slider = () => {
    const [img, setImg] = useState("");
    const [slider, setSlider] = useState([]);
    const [edit, setEdit] = useState("");

    const handleSubmit = () => {

        if (edit) {
            axios.put(`http://localhost:8000/slider/${edit}`, {
                image: img
            })
                .then((res) => {
                    toast.success("Slider successfully Update");
                    setImg("");
                    setEdit("");
                    getSlider();
                }).catch((err) => {
                    console.log(err);
                    return false;
                })
        } else {
            axios.post(`http://localhost:8000/slider`, {
                image: img,
            })
                .then((res) => {
                    toast.success("Slider successfully add..");
                    setImg("");
                    getSlider();
                })
                .catch((err) => {
                    console.log(err);
                    return false;
                });
        }

    }

    const getSlider = () => {
        axios.get(`http://localhost:8000/slider`)
            .then((res) => {
                setSlider(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const categoryDelete = (id) => {
        axios.delete(`http://localhost:8000/slider/${id}`)
            .then((res) => {
                alert("Slider delete");
                setImg("");
                getSlider();
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const categoryEdit = (id) => {
        axios.get(`http://localhost:8000/slider/${id}`)
            .then((res) => {
                setImg(res.data.image);
                setEdit(id)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    useEffect(() => {
        getSlider()
    }, [])
    return (
        <div>
            <h2>Slider</h2>
            <div className="container-category">
  <table className="custom-table-category">
    <tbody>
      <tr>
        <td className="label-cell">Image URL</td>
        <td>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            name="img"
            placeholder="Enter the Image URL"
            className="input-field"
          />
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          {edit ? (
            <input
              type="button"
              value="Edit"
              onClick={() => handleSubmit()}
              className="action-button edit-button"
            />
          ) : (
            <input
              type="button"
              value="Submit"
              onClick={() => handleSubmit()}
              className="action-button submit-button"
            />
          )}
        </td>
      </tr>
    </tbody>
  </table>
</div>

            <br></br>

            <div className='container'>
                <table className='custom-table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Slider</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            slider.map((val) => (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>
                                        <img src={val.image} alt={`Slider ${val.id}`} width="250px" />
                                    </td>
                                    <td>
                                        <button className='delete-button' onClick={() => categoryDelete(val.id)}>Delete</button>
                                        <button className='edit-button' onClick={() => categoryEdit(val.id)}>Edit</button>
                                    </td>
                                </tr>
                            )
                            )}
                    </tbody>
                </table>
            </div>

            <ToastContainer />
        </div>
    )
}

export default Slider
