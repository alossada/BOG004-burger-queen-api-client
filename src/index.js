import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//-------- importamos las vistas -------- 👇
import Home from './components/home';
import Login from './components/login';
import Chef from './components/chef';
import Waiter from './components/waiter';
import Admin  from './components/admin';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='login/waiter' element={<Waiter/>}></Route>
            <Route path='login/chef' element={<Chef/>}></Route>
            <Route path='login/admin' element={<Admin/>}></Route>
            <Route path='*' element={<Navigate to={"/"} />}></Route>
        </Routes>
    </BrowserRouter>
)
