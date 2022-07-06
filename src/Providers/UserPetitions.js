import axios from 'axios'

const url = process.env.REACT_APP_API_URL;

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
const createUser = async(user) => {
    const roleObject = {}; 
    roleObject[`${Object.keys(user.rol)}`] = true;
    
    return await axios({
        method: "POST", 
        url:url+'users', 
        headers: {
            'content-type': 'application/json',
                authorization: 'Bearer ' + getToken().accessToken,
        },
        data: {         
            email: user.email,
            password: user.password,
            roles: roleObject,
        },         
    })     
}

  //---Peticion para editar Usuario---//
const editUser = async (userId, user)=>{
    const objetRole = {};
    objetRole[`${Object.keys(user.rol)}`] = true;
    return await axios({
        method: "PATCH", 
        url:url+'users/'+ userId, 
        headers: {
            'content-type': 'application/json',
                authorization: 'Bearer ' + getToken().accessToken,
        },
        data: {         
            email: user.email,
            password: user.password,
            roles: objetRole,
        },         
    })     
}

  //---Peticion para eliminar Usuario---//
  const userDelete = async (id, user)=>{
    const objetRole = {};
    objetRole[`${Object.keys(user.rol)}`] = true;
    return await axios({
        method: "DELETE", 
        url:url+'users/'+ id, 
        headers: {
            'content-type': 'application/json',
                authorization: 'Bearer ' + getToken().accessToken,
        },
        data: {         
            email: user.email,
            password: user.password,
            roles: objetRole,
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
    createUser,
    editUser,
    userDelete
}