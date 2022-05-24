import { BrowserRouter, Routes, Route} from 'react-router-dom';

//-------- importamos las vistas -------- :apuntando_hacia_abajo:
import Home from './home';
import LoginForm from '../components/LoginForm';
import { RouterByRoles } from './routerByRoles';
const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='login' element={<LoginForm/>}></Route>
                <Route path='/*' element={<RouterByRoles/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default Rutas;