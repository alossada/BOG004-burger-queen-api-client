import axios from 'axios'

const url = 'http://localhost:8080/';

const login = (data) => {
    return axios.post(url+'login', data);
};

const saveUser = (user) => {
    return sessionStorage.setItem('user', JSON.stringify(user));
};

const getUserData = () => {
    console.log(JSON.parse(sessionStorage.getItem('user')))
    return JSON.parse(sessionStorage.getItem('user'));    
}

const getToken = () => {
    return JSON.parse(sessionStorage.getItem('user'));    
}

const getId = () => {
    console.log(getUserData().user.id)
    return getUserData().user.id;
}

export {
    login,
    saveUser,
    getUserData,
    getId,
    getToken,
}