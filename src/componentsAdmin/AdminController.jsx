import React from 'react'
import { useState, useEffect } from 'react'
import Style from '../styles/admin.module.css'
import UserTable from '../componentsAdmin/UserTable'
import EditUser from '../componentsAdmin/EditUser'
import { getUserInfo, createUser, userDelete } from '../Providers/UserPetitions'
import AddUserForm from './AddUserForm'


export default function AdminController() {
    
const [users, setUsers] = useState([])

const userInfo = () =>{
    getUserInfo()
        .then((response)=>{
            setUsers(response.data.map((user)=>{
                return {
                email: user.email,
                id: user.id,
                password: user.password,
                rol: user.roles,
                }
            }))             
            })
            .catch((error)=>{
                console.log('soy el error ', error)
            })   
        }
         
        const addUser = (user) => {
            createUser(user)
            .then((response)=>{
                console.log('que responde addUser',response)
            })
            .catch((error)=>{
            console.log(error)
        })
        setUsers([
            ...users,
            user
        ])
    }
        
    //---Eliminar usuarios---//
    const deleteUser = (id, users) =>{
        console.log('soy id y users',id, users)
        userDelete(id, users)
        .then((response)=>{
            console.log('soy DELETE', response)
        })
        .catch((error)=>{
            console.log(error)
        })
        const arrayFiterUser = users.filter(user => user.id !== id )
        setUsers(arrayFiterUser)
    }
    
    useEffect(()=> {
        userInfo()
    }, []);  
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            userInfo()
        },9000)
        return () => clearInterval(interval)
    },[]);

//---Editar usuarios---//
const [editing, setEditing] = useState(false);

const [currentUser, setCurrentUser] = useState({
    id: null, email:'', password: '', rol:''
});

const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
        id: user.id, email: user.email, password: user.password, rol: `${Object.keys(user.rol)}`
    })
}

const updateUser = (id, updateUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updateUser : user )))
}


return (    
    <div className={Style.container} >      
        <div className={Style.flex_row}>
            <div className={Style.flex_large}>
            <h2 className={Style.addEmployers_title}>Administrar Empleados</h2>
            <UserTable 
                users={users} 
                deleteUser={deleteUser}     
                editRow={editRow}
            />
            </div>
            <div className={Style.flex_large}>

            {
                editing ? (
                    <div>
                        <h2 className={Style.addEmployers_title}>Editar Empleados</h2>
                        <EditUser 
                        currentUser={currentUser}
                        updateUser={updateUser}
                        />
                    </div>
                ) : (
                    <div className={Style.conatiner_addEmployers}>
                        <h2 className={Style.addEmployers_title}>Agregar Empleados</h2>
                        <AddUserForm
                        addUser={addUser}/>
                    </div>
                )
            }
            </div>
        </div>
    </div>
)}
