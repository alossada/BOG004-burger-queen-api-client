import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//-------- importamos las vistas -------- 👇
import Home from '../pages/home';
import Login from '../pages/login';
import Chef from '../pages/chef';
import Waiter from '../pages/waiter';
import Admin from '../pages/admin';

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='login' element={<Login/>}></Route>
                <Route path='login/waiter' element={<Waiter />}></Route>
                <Route path='login/chef' element={<Chef />}></Route>
                <Route path='login/admin' element={<Admin />}></Route>
                <Route path='*' element={<Navigate to={"/"} />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rutas;