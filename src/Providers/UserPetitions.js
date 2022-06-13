import axios from 'axios'

const url = 'http://localhost:8080/';

const login = (data) => {
    return axios.post(url+'login', data);
};

const saveUser = (user) => {
    return sessionStorage.setItem('user', JSON.stringify(user));
};

const getUserData = () => {
    return JSON.parse(sessionStorage.getItem('user'));    
}

const getToken = () => {
    return JSON.parse(sessionStorage.getItem('user'));    
}

const getId = () => {
    return getUserData().user.id;
}

//--- Obtiene info de usuario---//
const getUserInfo = async() => {
    console.log('que es getToken', getToken().accessToken)
    return await axios({
        method: "GET", 
        url:url+'users', 
        headers: {
            'content-type': 'application/json',
                authorization: 'Bearer ' + getToken().accessToken,
        },         
    })     
}

  //---Peticion para crear Usuario---//
const createUser = async() => {
    console.log('que es createUser', getToken().accessToken)
    return await axios({
        method: "POST", 
        url:url+'users', 
        headers: {
            'content-type': 'application/json',
                authorization: 'Bearer ' + getToken().accessToken,
        },
        data: {         
            id: getId(),
            email: "grace.hopper@systers.xyz",
            roles: {
            admin: true
            }
        },         
    })     
}

export {
    login,
    saveUser,
    getUserData,
    getId,
    getToken,
    getUserInfo,
    createUser
}