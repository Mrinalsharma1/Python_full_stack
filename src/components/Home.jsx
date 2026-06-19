import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    const [student, setStudent] = useState([]);
    const [serach, setSerach] = useState(" ");

    const navigate = useNavigate();

    let url = "";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setStudent(data))
            .catch(err => console.log(err));
    }, [])

    let deleteUrl = "";
    const handleDelete = (id) => {
        fetch(`deleteUrl/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                setStudent(student.filter(s => s.id != id));
            });
    };

    const filteredStudent = student.filter(s => s.name.toLowerCase().include(search.toLowerCase()));


    return (
        <div className='container-fluid'>

            {/* Top Cards */}
            <div className='row mb-4'>
                <div className='col-md-4'>
                    <div className='card text-center shadow-sm'>
                        <div className='card-body'>
                            <h5 className='card-title'>Student Count</h5>
                            <h3>100</h3>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='card text-center shadow-sm'>
                        <div className='card-body'>
                            <h5 className='card-title'>Today Enrolled</h5>
                            <h3>10</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/*Table Section Start here */}
            <div className='card shadow-sm'>
                <div className='card-body'>
                    <h5 className='mb-3'>Student List</h5>
                </div>

                {/* Search */}
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Search student..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className='table-responsive'>
                    <table className='table table-bordered table-hover text-center'>
                        <thead className='table-dark'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Mobile</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredStudent.map(student => (
                                    <tr key={student.id}>
                                        <td>{student.name}</td>
                                        <td>{student.class}</td>
                                        <td>{student.mobile}</td>
                                        <td>
                                            <button
                                                className='btn btn-danger btn-sm me-2'
                                                onClick={() => handleDelete(student.id)}
                                            >Delete</button>

                                            <button
                                                className='btn btn-info btn-sm me-2'
                                                onClick={() => navigate(`/view/${student.id}`)}
                                            >View</button>

                                            <button
                                                className='btn btn-warning btn-sm me-2'
                                                onClick={() => navigate(`/edit/${student.id}`)}
                                            >Edit</button>

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home