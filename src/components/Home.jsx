import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    const [student, setStudent] = useState([]);
    const [search, setSearch] = useState("");
    const [totalCount, setTotalCount] = useState(0);
    const [todayCount, setTodayCount] = useState(0);


    const navigate = useNavigate();

    let url = "http://127.0.0.1:8000/students/";


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setStudent(data.data))
            .catch(err => console.log(err));
    }, [])


    const handleDelete = (id) => {
        fetch(`http://127.0.0.1:8000/students/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                setStudent(student.filter(s => s.id !== id));
            });
    };

    useEffect(() => {
        fetch("http://127.0.0.1:8000/students/count")
            .then(res => res.json())
            .then(data => setTotalCount(data.total_students));

        fetch("http://127.0.0.1:8000/students/today-count")
            .then(res => res.json())
            .then(data => setTodayCount(data.today_students));
    }, [])


    const filteredStudent = student.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div className='container-fluid'>

            {/* Top Cards */}
            <div className='row mb-4'>
                <div className='col-md-4'>
                    <div className='card text-center shadow-sm'>
                        <div className='card-body'>
                            <h5 className='card-title'>Student Count</h5>
                            <h3>{totalCount}</h3>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='card text-center shadow-sm'>
                        <div className='card-body'>
                            <h5 className='card-title'>Today Enrolled</h5>
                            <h3>{todayCount}</h3>
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
                <div className="input-group mb-3">
                    <span className="input-group-text">🔍</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search student..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className='table-responsive'>
                    <table className='table table-bordered table-hover text-center'>
                        <thead className='table-dark'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Course</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredStudent.map(student => (
                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.course}</td>
                                        <td>{student.phone}</td>
                                        <td>{student.gender}</td>
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