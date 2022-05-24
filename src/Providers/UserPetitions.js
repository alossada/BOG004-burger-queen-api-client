import axios from 'axios'
const url = 'http://localhost:8080/';

const login = (data) => {
    return axios.post(url+'login', data);
};

const saveUser = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
};

const getUserData = () => {
    JSON.parse(sessionStorage.getItem('user'));    
    console.log(JSON.parse(sessionStorage.getItem('user')))
}

const getToken = () => {
    console.log(JSON.parse(sessionStorage.getItem('user')))
    return JSON.parse(sessionStorage.getItem('user'));
    
}

const getId = () => {
    return getUserData().user.id;
}

export {
    login,
    saveUser,
    getUserData,
    getId,
    getToken,
}