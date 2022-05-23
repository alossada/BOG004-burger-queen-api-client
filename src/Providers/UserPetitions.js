import axios from 'axios'
const url = 'http://localhost:8080/';

const login = (data) => {
    return axios.post(url+'login', data);
};

const saveUser = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
};

export {
    login,
    saveUser,
}