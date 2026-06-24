import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewStudent() {
    const { id } = useParams(); // get student id from URL
    const [student, setStudent] = useState({});

    useEffect(() => {
        // 🔥 Call API to fetch student by ID
        fetch(`http://127.0.0.1:8000/students/${id}`)
            .then((res) => res.json())
            .then((data) => setStudent(data.data))
            .catch((err) => console.log(err));
    }, [id]);
    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h4>View Student Details</h4>
                </div>

                <div className="card-body">
                    <div className="row">

                        {/* Name */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={student.name || ""}
                                readOnly
                            />
                        </div>

                        {/* Email */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={student.email || ""}
                                readOnly
                            />
                        </div>

                        {/* Phone */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                value={student.phone || ""}
                                readOnly
                            />
                        </div>

                        {/* Course */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Course</label>
                            <input
                                type="text"
                                className="form-control"
                                value={student.course || ""}
                                readOnly
                            />
                        </div>

                        {/* Gender */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Gender</label>
                            <input
                                type="text"
                                className="form-control"
                                value={student.gender || ""}
                                readOnly
                            />
                        </div>

                        {/* Address */}
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Address</label>
                            <textarea
                                className="form-control"
                                value={student.address || ""}
                                rows="3"
                                readOnly
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewStudent;