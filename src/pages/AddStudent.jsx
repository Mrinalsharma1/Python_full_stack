import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function AddStudent() {
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name: '',
        gender: '',
        email: '',
        phone: '',
        course: '',
        address: ''
    });

    const handleChange = (e) => {
        setStudent(
            { ...student, [e.target.name]: e.target.value }
        )
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("student data is", student);

        let url = "http://127.0.0.1:8000/students/";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            });

            const data = await response.json();

            // console.log("Response is", data);

            alert("Student is create Successfully");

            navigate("/");


        } catch (error) {
            console.log("Error is", error);
        }
    }

    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-body">

                    <h3 className="mb-4 text-center">Add Student</h3>

                    <form onSubmit={handleSubmit}>

                        <div className="row">

                            {/* Name */}
                            <div className="col-md-6 mb-3">
                                <label>Name</label>
                                <input type="text" name="name" className="form-control" onChange={handleChange} required />
                            </div>

                            {/* Gender */}
                            <div className="col-md-6 mb-3">
                                <label>Gender</label>
                                <select name="gender" className="form-control" onChange={handleChange} required>
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>

                            {/* Email sbsh */}
                            <div className="col-md-6 mb-3">
                                <label>Email</label>
                                <input type="email" name="email" className="form-control" onChange={handleChange} required />
                            </div>

                            {/* Mobile */}
                            <div className="col-md-6 mb-3">
                                <label>Mobile</label>
                                <input type="text" name="phone" className="form-control" onChange={handleChange} required />
                            </div>

                            {/* Age */}
                            <div className="col-md-6 mb-3">
                                <label>course</label>
                                <input type="text" name="course" className="form-control" onChange={handleChange} required />
                            </div>



                            {/* Address */}
                            <div className="col-12 mb-3">
                                <label>Address</label>
                                <textarea name="address" className="form-control" onChange={handleChange} required></textarea>
                            </div>

                        </div>

                        <button className="btn btn-primary w-100">
                            Add Student
                        </button>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default AddStudent;