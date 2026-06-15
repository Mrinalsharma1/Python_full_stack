import React from 'react'

function Home() {
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
                            <tr>
                                <td>01</td>
                                <td>Sam</td>
                                <td>7th</td>
                                <td>82687266287</td>
                                <td>
                                    <button className='btn btn-danger btn-sm me-2'>Delete</button>
                                    <button className='btn btn-info btn-sm me-2'>View</button>
                                    <button className='btn btn-warning btn-sm me-2'>Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home