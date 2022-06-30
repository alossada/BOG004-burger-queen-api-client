import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import LoginForm from "../componentsLogin/LoginForm";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test('Permite que el usuario inicie sesión correctamente', async()=>{
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <LoginForm/>
        </Router>
    );

    const email = screen.getByPlaceholderText('usuario@bq.com');
    fireEvent.change(email, {target:{value: 'waiter@burger.com'}});

    const password = screen.getByPlaceholderText('******');
    fireEvent.change(password,{target:{value:'123456'}});

    const btn = screen.getByText('Ingresar')
    fireEvent.click(btn);
    await waitFor(()=>{
        expect(history.location.pathname).toBe('/')
    })
})

test('No permite un inicio de sesión correcto', async()=>{
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <LoginForm/>
        </Router>
    );
    const email = screen.getByPlaceholderText('usuario@bq.com');
    fireEvent.change(email, {target:{value: 'lina@burger.com'}});

    const password = screen.getByPlaceholderText('******');
    fireEvent.change(password,{target:{value:'123456'}});

    const btn = screen.getByText('Ingresar')
    fireEvent.click(btn);

    let errMessage;
    await waitFor(()=>{
        errMessage = screen.queryByTestId('login-err-message')
        expect(errMessage.textContent).toBe('Usuario y/o contraseña incorrectas')
    })
})