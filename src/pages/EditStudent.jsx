import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditStudent() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name: '',
        email: '',
        mobile: '',
        className: '',
        address: '',
        gender: '',
        age: ''
    });

    let editUrl = "";
    useEffect(() => {
        fetch(`editUrl/${id}`)
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [id])

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    //update student
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`editUrl/${id}`, {
            method: PUT,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        }).then(() => {
            alert("Student Update!");
            navigate("/home");
        });
    };

    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-body">

                    <h3 className="mb-4 text-center">Edit Student</h3>

                    <form onSubmit={handleSubmit}>

                        <div className="row">

                            {/* Name */}
                            <div className="col-md-6 mb-3">
                                <label>Name</label>
                                <input type="text" name="name" className="form-control" value={student.name} onChange={handleChange} required />
                            </div>

                            {/* Email sbsh */}
                            <div className="col-md-6 mb-3">
                                <label>Email</label>
                                <input type="email" name="email" className="form-control" value={student.email} onChange={handleChange} required />
                            </div>

                            {/* Mobile */}
                            <div className="col-md-6 mb-3">
                                <label>Mobile</label>
                                <input type="text" name="mobile" className="form-control" value={student.mobile} onChange={handleChange} required />
                            </div>

                            {/* Class */}
                            <div className="col-md-6 mb-3">
                                <label>Class</label>
                                <input type="text" name="className" className="form-control" value={student.class} onChange={handleChange} required />
                            </div>

                            {/* Age */}
                            <div className="col-md-6 mb-3">
                                <label>Age</label>
                                <input type="number" name="age" className="form-control" value={student.age} onChange={handleChange} required />
                            </div>

                            {/* Gender */}
                            <div className="col-md-6 mb-3">
                                <label>Gender</label>
                                <select name="gender" className="form-control" value={student.gender} onChange={handleChange} required>
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>

                            {/* Address */}
                            <div className="col-12 mb-3">
                                <label>Address</label>
                                <textarea name="address" className="form-control" value={student.address} onChange={handleChange} required></textarea>
                            </div>

                        </div>

                        <button className="btn btn-primary w-100">
                            Update Student
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditStudent