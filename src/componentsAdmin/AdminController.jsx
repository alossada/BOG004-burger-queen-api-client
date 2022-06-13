import React from 'react'
import { useState, useEffect } from 'react'
//import Style from '../styles/admin.module.css'
import UserTable from '../componentsAdmin/UserTable'
import EditUser from '../componentsAdmin/EditUser'
import AddUser from '../componentsAdmin/AddUser'
import { getUserInfo, createUser } from '../Providers/UserPetitions'


export default function AdminController() {
    
const [users, setUsers] = useState([])

const userInfo = () =>{
    getUserInfo()
        .then((response)=>{
            setUsers(response.data.map((user)=>{
                return {
                email: user.email,
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
    createUser()
        .then((response)=>{
            console.log('que responde addUser',response)
            setUsers([
              ...users,
              user
            ])
        })
        .catch((error)=>{
        console.log(error)
        })
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
    <div className="container" >      
        <h1>ADMINISTRADOR</h1>
        <div className="flex-row">
            <div className="flex-large">
            <h2>Administrar Empleados</h2>
            <UserTable 
                users={users} 
                deleteUser={deleteUser}               
                editRow={editRow}
            />
            </div>
            <div className="flex-large">

            {
                editing ? (
                    <div>
                        <h2>Editar Empleados</h2>
                        <EditUser 
                        currentUser={currentUser}
                        updateUser={updateUser}
                        />
                    </div>
                ) : (
                    <div>
                        <h2>Agregar Empleados</h2>
                        <AddUser
                        addUser={addUser}/>
                    </div>
                )
            }
            </div>
        </div>
    </div>
)}
