import React from 'react'
import { useFormContext } from './FormProvider'


const TableComponent:React.FC =() =>{
  const {users, handleSelectedUser, deleteRow}=useFormContext();

  return (
    <div id="myTable" className='table'>
     <table>
      <thead>
      <tr>
            <th>Email</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
        </tr>
      </thead>
        <tbody>
          {users.map((user, index)=>(
            <tr key={index}>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>
                <div className='editdelete'>
                  <button onClick={()=>{handleSelectedUser(user)}}>Edit</button>
                  <button onClick={()=>{deleteRow(user.id)}}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
     </table>
    </div>
  )
}

export default TableComponent;
