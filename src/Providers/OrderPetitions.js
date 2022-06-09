import axios from "axios";
import { getId } from "./UserPetitions";
const url = 'http://localhost:8080/';

//----- Peticion para que el mesero pueda ver los productos -----
const products = (token) => {
    return axios({
        method: "GET", 
        url:url+'products', 
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + token,
            },
    })
} 

// const getDate = () => {
//     let rightDate = new Date();
//     return rightDate.getFullYear() +
//         '-' +
//         (rightDate.getMonth() + 1 )+
//         '-' +
//         rightDate.getDate() +
//         ' ' +
//         rightDate.getHours() +
//         ':' +
//         rightDate.getMinutes()    
// }

// Peticion para un solo producto
export const onlyProduct = async (token, itemId)=>{
    return await axios({
        method: 'GET',
        url:url+'products/'+itemId,
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + token,
        },
    })
}

// -----Peticion para crear orden -----
const ordenPetition = async (token, newObject, clients) =>{
    return await axios({
        method: "POST",
        url:url+'orders',
        headers: {
            'content-type': 'application/json',
                authorization: 'Bearer ' + token.accessToken,
        },
        data: {
            userId: getId(),
            client: clients,
            products: newObject,
            status: 'pending',
            dataEntry: new Date().toLocaleString('sv'),

        }
    })
}

// -----Peticion para que el chef pueda obtener los productos -----
const getOrder =  (token) => {
    return  axios.get(url+'orders',{
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + token
            },
    })
} 

const orderStatus = async(orderId, token) => {
    
    return await axios({
        method: "PATCH",
        url:url+'orders/'+ orderId,
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + token,
        },
        data: {
            status: 'delivering',
            dateProcessed: new Date().toLocaleString('sv'),
        }
    })
}

export { products, ordenPetition, getOrder, orderStatus }