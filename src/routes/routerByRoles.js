import { Routes, Route, Navigate } from 'react-router-dom';

//-------- importamos las vistas -------- 
import Chef from './chef';
import Waiter from './waiter';
import Admin from './admin';
import Order from '../components/Order';
import OrderReady from '../components/OrderReady';

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
                        <Route path='/waiter' element={<Waiter  />}>
                            <Route path='/waiter/order' element={<Order/>}></Route>
                            <Route path='/waiter/ready' element={<OrderReady/>}></Route>
                        </Route> 
                    ) : null
                }
                {
                    activeUser.user.roles.chef ? (
                        <Route path='/chef' element={<Chef />}/>
                    ) : null
                }
                <Route path='*' element={<Navigate replace to={"/"} />}></Route>
            </Routes>
        </>
    );
};