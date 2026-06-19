import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "../components/Home";
import AddStudent from "../pages/AddStudent";
import ViewStudent from "../pages/ViewStudent";
import EditStudent from "../pages/EditStudent";

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddStudent />} />
            <Route path="/view/:id" element={<ViewStudent />} />
            <Route path='/edit/:id' element={<EditStudent />} />
        </Routes>
    )
}

export default AppRoutes

