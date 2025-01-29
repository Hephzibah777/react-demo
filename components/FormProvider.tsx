
/*eslint-disable*/

import React, { createContext, useState, useContext } from 'react';
import user from "../interfaces/user"
import FormContextType from '../interfaces/FormContextType';

export const FormContext = createContext<FormContextType | null>(null);

export const FormProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
 
 const [users, setUsers] = useState<user[]>([]);
const [selecteduser, setSelectedUser] = useState<user|null>(null);

 const adduser = (newData:user) =>{
    setUsers((prevData)=> [...prevData, newData]);
 }

 const handleSelectedUser=(data:user)=>{
  setSelectedUser(data);
 }
 const editRow=(data:user)=>{
 setUsers((prevUser)=> prevUser.map((user)=> (user.id== data.id ? data:user))
 );
 setSelectedUser(null);
 }
 const deleteRow=(id:number)=>{
    const newData = users.filter((row)=>row.id!=id);
    setUsers(newData);
 }
 
  return (
    <FormContext.Provider value={{users, adduser, selecteduser, handleSelectedUser, editRow, deleteRow}}>
      {children}
    </FormContext.Provider>
  );
};


export const useFormContext =()=>{
  const context=useContext(FormContext);
  if(!context){
    throw new Error("useFormContext");
  }
  return context;
}