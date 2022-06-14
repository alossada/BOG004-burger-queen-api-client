import React from 'react'
import { useState, useEffect } from 'react'
import Style from '../styles/admin.module.css'
import UserTable from '../componentsAdmin/UserTable'
import EditUser from '../componentsAdmin/EditUser'
import { getUserInfo, createUser } from '../Providers/UserPetitions'
import AddUserForm from './AddUserForm'


export default function AdminController() {
    
const [users, setUsers] = useState([])

const userInfo = () =>{
    getUserInfo()
        .then((response)=>{
            console.log('Informacion de usuarios', response.data)
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
        
useEffect(()=> {       
    userInfo()               
}, [])       


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
    // user.id = uuidv4()
//   }

//---Eliminar usuarios---//
const deleteUser = (id) =>{
    const arrayFiterUser = users.filter(user => user.id !== id )
setUsers(arrayFiterUser)
}

//---Editar usuarios---//
const [editing, setEditing] = useState(false);

const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username:''
});

const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
        id: user.id, name: user.name, username: user.username
    })
}

const updateUser = (id, updateUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updateUser : user )))
}


return (    
    <div className={Style.container} >      
        <h1 style={{color:'#f1f1f1',textAlign:'center', margin:'30px'}}>Administrador</h1>
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
