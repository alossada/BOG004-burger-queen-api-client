import { Routes, Route, Navigate } from 'react-router-dom';
//-------- importamos las vistas -------- :apuntando_hacia_abajo:
// import Home from '../pages/home';
// import Login from '../pages/login';
import Chef from '../pages/chef';
import Waiter from '../pages/waiter';
import Admin from '../pages/admin';
// ROUTER
export const RouterByRoles = () => {
    const activeUser = JSON.parse(sessionStorage.getItem('user'));
    return (
        <>
            <Routes>
                {
                    activeUser.user.roles.admin ? (
                        <Route path='/admin' element={<Admin />} />
                    ) : null
                }
                {
                    activeUser.user.roles.waiter ? (
                        <Route path='/waiter' element={<Waiter />} />
                    ) : null
                }
                {
                    activeUser.user.roles.chef ? (
                        <Route path='/chef' element={<Chef />} />
                    ) : null
                }
                <Route path='*' element={<Navigate to={"/"} />}></Route>
            </Routes>
        </>
    );
};