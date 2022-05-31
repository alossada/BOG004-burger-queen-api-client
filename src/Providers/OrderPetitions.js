import axios from "axios";
import { getId } from "./UserPetitions";
const url = 'http://localhost:8080/';

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

const getDate = () => {
    let rightDate = new Date();
    return rightDate.getFullYear() +
        '-' +
        (rightDate.getMonth() + 1 )+
        '-' +
        rightDate.getDate() +
        ' ' +
        rightDate.getHours() +
        ':' +
        rightDate.getMinutes()    
}


const ordenPetition = async (token, items, clients) =>{
    console.log('Soy nombre values', clients)
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
            products: items,
            status: 'pending',
            dataEntry: getDate(),
        }
    })
}

export { products, ordenPetition }